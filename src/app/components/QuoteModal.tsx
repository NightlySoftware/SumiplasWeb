'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './Dialog';
import Input from './Input';
import TextArea from './TextArea';
import ArrowButton from './ArrowButton';

const validCities = [
  'Aguascalientes',
  'Baja California',
  'Baja California Sur',
  'Campeche',
  'Chiapas',
  'Chihuahua',
  'Coahuila',
  'Colima',
  'Ciudad de México',
  'Durango',
  'Guanajuato',
  'Guerrero',
  'Hidalgo',
  'Jalisco',
  'México',
  'Michoacán',
  'Morelos',
  'Nayarit',
  'Nuevo León',
  'Oaxaca',
  'Puebla',
  'Querétaro',
  'Quintana Roo',
  'San Luis Potosí',
  'Sinaloa',
  'Sonora',
  'Tabasco',
  'Tamaulipas',
  'Tlaxcala',
  'Veracruz',
  'Yucatán',
  'Zacatecas',
];

const validProducts = [
  'Bolsa Transparente para Alimentos',
  'Bolsa Antiestática',
  'Bolsa Anticorrosiva',
  'Bolsa Negra / Uso Industrial',
  'Bolsa Lisa Pigmentada',
  'Bolsa de Asa tipo Camiseta',
  'Película Stretch',
  'Cinta Transparente',
  'Cinta Canela',
  'Cinta PVC de Colores',
  'Rollo de Plástico',
  'Poli Burbuja Natural',
  'Poli Burbuja Antiestático',
  'Fleje Negro',
  'Grapa Metálica',
];

const schema = z.object({
  nombre: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, 'Nombre inválido')
    .min(1, 'Campo obligatorio'),
  correo: z.string().email('Correo electrónico inválido'),
  telefono: z
    .string()
    .regex(/^\d{10}$/, 'Número de teléfono inválido')
    .optional(),
  negocio: z.string().max(50, 'Máximo 50 caracteres').optional(),
  interes: z.string().min(1, 'Campo obligatorio'),
  ciudad: z.string().refine((val) => validCities.includes(val), 'Ciudad inválida'),
  comentarios: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface FormErrors {
  [key: string]: string;
}

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const [formValues, setFormValues] = useState<FormData>({
    nombre: '',
    correo: '',
    telefono: '',
    negocio: '',
    interes: '',
    ciudad: '',
    comentarios: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormValues((prevValues) => {
      const newValues = { ...prevValues, [name]: value };
      const validation = schema.safeParse(newValues);
      if (validation.success) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [name]: '',
        }));
      } else {
        const fieldError = validation.error.errors.find((err) => err.path[0] === name);
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [name]: fieldError ? fieldError.message : '',
        }));
      }
      return newValues;
    });
  };

  const handleBlur = (name: string, value: string) => {
    const validation = schema.safeParse({ ...formValues, [name]: value });
    if (!validation.success) {
      const fieldError = validation.error.errors.find((err) => err.path[0] === name);
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: fieldError?.message || '',
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  const handleClick = (name: string) => {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    });
    const formattedTime = currentDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    const formDataWithDate = { ...formValues, fecha: formattedDate, hora: formattedTime };
    const validation = schema.safeParse(formDataWithDate);
    if (validation.success) {
      try {
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formDataWithDate),
        });

        if (!response.ok) {
          throw new Error('Error al enviar el correo');
        }

        toast.success('Correo enviado correctamente');
        setFormValues({
          nombre: '',
          correo: '',
          telefono: '',
          negocio: '',
          interes: '',
          ciudad: '',
          comentarios: '',
        });
        onOpenChange(false);
      } catch (error) {
        console.error(error);
        toast.error('Error al enviar el correo');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      const errors: FormErrors = {};
      validation.error.errors.forEach((error) => {
        errors[error.path[0] as string] = error.message;
      });
      setFormErrors(errors);
      setIsSubmitting(false);
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    e.currentTarget.scrollTop += e.deltaY;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[650px] bg-spwhite py-10 overflow-auto" onWheel={handleWheel}>
        <DialogHeader>
          <DialogTitle className="text-3xl font-medium text-center">Contáctanos en segundos</DialogTitle>
          <DialogDescription className="text-center">
            Habla directamente con nosotros para cotización de nuestros productos y ofrecerte una experiencia
            personalizada, entendemos que cada negocio es único y queremos brindarte nuestros productos a tu medida.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4" noValidate>
          <Input
            label="Nombre*"
            placeholder="Nombre*"
            name="nombre"
            required
            value={formValues.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
            onClick={handleClick}
            hasError={!!formErrors.nombre}
            errorMessage={formErrors.nombre}
            disabled={isSubmitting}
          />
          <Input
            label="Correo Electrónico*"
            placeholder="Correo Electrónico*"
            type="email"
            name="correo"
            required
            value={formValues.correo}
            onChange={handleChange}
            onBlur={handleBlur}
            onClick={handleClick}
            hasError={!!formErrors.correo}
            errorMessage={formErrors.correo}
            disabled={isSubmitting}
          />
          <Input
            label="Número de Teléfono"
            placeholder="Número de Teléfono"
            name="telefono"
            value={formValues.telefono || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            onClick={handleClick}
            errorMessage={formErrors.telefono}
            disabled={isSubmitting}
          />
          <Input
            label="Negocio / Empresa"
            placeholder="Negocio / Empresa"
            name="negocio"
            value={formValues.negocio || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            onClick={handleClick}
            hasError={!!formErrors.negocio}
            errorMessage={formErrors.negocio}
            disabled={isSubmitting}
          />
          <Input
            label="¿En qué estás interesado?*"
            placeholder="¿En qué estás interesado?*"
            name="interes"
            required
            value={formValues.interes}
            onChange={handleChange}
            onBlur={handleBlur}
            onClick={handleClick}
            hasError={!!formErrors.interes}
            errorMessage={formErrors.interes}
            disabled={isSubmitting}
          />
          <Input
            label="Ciudad / Municipio*"
            placeholder="Ciudad / Municipio*"
            name="ciudad"
            required
            value={formValues.ciudad}
            onChange={handleChange}
            onBlur={handleBlur}
            onClick={handleClick}
            hasError={!!formErrors.ciudad}
            errorMessage={formErrors.ciudad}
            disabled={isSubmitting}
          />
          <TextArea
            label="Comentarios Adicionales"
            placeholder="Comentarios Adicionales"
            name="comentarios"
            value={formValues.comentarios || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            onClick={handleClick}
            hasError={!!formErrors.comentarios}
            errorMessage={formErrors.comentarios}
            size="lg"
            disabled={isSubmitting}
          />
          <ArrowButton type="submit" text="Enviar" disabled={isSubmitting} />
        </form>
      </DialogContent>
    </Dialog>
  );
}
