'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import * as z from 'zod';
import ArrowButton from './ArrowButton';

interface HalfScreenCardProps {
  isVisible: boolean;
  onClose: () => void;
}

interface FormErrors {
  [key: string]: string;
}

const schema = z.object({
  nombre: z.string().min(1, 'Campo obligatorio'),
  correo: z.string().email('Correo electrónico inválido'),
  telefono: z.string().optional(),
  negocio: z.string().optional(),
  interes: z.string().min(1, 'Campo obligatorio'),
  ciudad: z.string().optional(),
  comentarios: z.string().optional(),
});

export default function HalfScreenCard({ isVisible, onClose }: HalfScreenCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const variants = {
    hidden: { y: '200%' },
    visible: { y: '10%' },
    exit: { y: '200%' },
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleChange = (name: string, value: string) => {
    setFormValues((prevValues) => {
      const newValues = { ...prevValues, [name]: value };

      // Validate the updated form values
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = schema.safeParse(formValues);

    if (validation.success) {
      // Aquí puedes manejar el caso de éxito del formulario
    } else {
      const errors: FormErrors = {};
      validation.error.errors.forEach((error) => {
        // Usamos error.message para obtener el mensaje personalizado
        errors[error.path[0] as string] = error.message;
      });
      setFormErrors(errors);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center" onClick={onClose}>
      <motion.div
        ref={cardRef}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        exit="exit"
        variants={variants}
        transition={{ ease: 'easeOut', duration: 0.3 }}
        className="fixed bottom-0 g:bottom-[12%] flex flex-col self-center w-full max-w-[calc(650px+1.25rem)] h-[100lvh] max-h-[1150px] bg-spwhite rounded-t-2xl g:rounded-2xl p-5 pb-[120px] xl:pb-5 g:-mb-6 gap-4 no-doc-scroll overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="self-end" onClick={onClose}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 0C24.8368 0 32 7.1632 32 16C32 24.8368 24.8368 32 16 32C7.1632 32 0 24.8368 0 16C0 7.1632 7.1632 0 16 0ZM12.6064 10.3424C12.3191 10.0524 11.9319 9.88315 11.5239 9.86931C11.116 9.85547 10.7181 9.99807 10.4119 10.2679C10.1056 10.5378 9.91408 10.9145 9.87647 11.321C9.83887 11.7275 9.95804 12.1329 10.2096 12.4544L10.344 12.6064L13.736 15.9984L10.344 19.3936C10.054 19.6809 9.88475 20.0681 9.87091 20.4761C9.85707 20.884 9.99968 21.2819 10.2695 21.5881C10.5394 21.8944 10.9161 22.0859 11.3226 22.1235C11.7291 22.1611 12.1345 22.042 12.456 21.7904L12.6064 21.6576L16 18.2624L19.3936 21.6576C19.6809 21.9476 20.0681 22.1169 20.4761 22.1307C20.884 22.1445 21.2819 22.0019 21.5881 21.7321C21.8944 21.4622 22.0859 21.0855 22.1235 20.679C22.1611 20.2725 22.042 19.8671 21.7904 19.5456L21.6576 19.3936L18.2624 16L21.6576 12.6064C21.9476 12.3191 22.1169 11.9319 22.1307 11.5239C22.1445 11.116 22.0019 10.7181 21.7321 10.4119C21.4622 10.1056 21.0855 9.91408 20.679 9.87647C20.2725 9.83887 19.8671 9.95804 19.5456 10.2096L19.3936 10.3424L16 13.7376L12.6064 10.3424Z"
              fill="#005482"
            />
          </svg>
        </button>
        <div className="flex flex-col text-spblack text-center text-pretty gap-4">
          <p className="text-3xl font-medium pb-8">Contáctanos en segundos</p>
          <p className="leading-5">
            Habla directamente con nosotros para cotización de nuestros productos y ofrecerte una experiencia
            personalizada, entendemos que cada negocio es único y queremos brindarte nuestros productos a tu medida.
          </p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
          <Input
            label="Nombre*"
            placeholder="Nombre*"
            name="nombre"
            required
            value={formValues.nombre || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            onClick={handleClick}
            hasError={!!formErrors.nombre}
            errorMessage={formErrors.nombre}
          />
          <Input
            label="Correo Electrónico*"
            placeholder="Correo Electrónico*"
            type="email"
            name="correo"
            required
            value={formValues.correo || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            onClick={handleClick}
            hasError={!!formErrors.correo}
            errorMessage={formErrors.correo}
          />
          <Input
            label="Número de Teléfono"
            placeholder="Número de Teléfono"
            name="telefono"
            value={formValues.telefono || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            onClick={handleClick}
            hasError={!!formErrors.telefono}
            errorMessage={formErrors.telefono}
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
          />
          <Input
            label="¿En qué estás interesado?*"
            placeholder="¿En qué estás interesado?*"
            name="interes"
            required
            value={formValues.interes || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            onClick={handleClick}
            hasError={!!formErrors.interes}
            errorMessage={formErrors.interes}
          />
          <Input
            label="Ciudad / Municipio"
            placeholder="Ciudad / Municipio"
            name="ciudad"
            value={formValues.ciudad || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            onClick={handleClick}
            hasError={!!formErrors.ciudad}
            errorMessage={formErrors.ciudad}
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
          />
          <ArrowButton type="submit" text="Enviar" />
        </form>
      </motion.div>
    </div>
  );
}
