import EmailTemplate from '@/app/components/EmailTemplate';
import { Resend } from 'resend';

export interface EmailTemplateProps {
  nombre: string;
  correo: string;
  telefono?: string;
  negocio?: string;
  interes: string;
  ciudad: string;
  comentarios?: string;
  fecha: string;
  hora: string;
}

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return new Response(JSON.stringify({ error: 'Missing RESEND_API_KEY configuration.' }), { status: 500 });
    }

    const resend = new Resend(resendApiKey);
    const formData: EmailTemplateProps = await request.json();

    const { data, error } = await resend.emails.send({
      from: `${formData.nombre} (${formData.correo}) <correos@sumiplas.mx>`,
      to: ['correos@sumiplas.mx'],
      subject: `Solicitud de Cotización - ${formData.nombre}`,
      react: EmailTemplate({
        nombre: formData.nombre,
        correo: formData.correo,
        telefono: formData.telefono,
        negocio: formData.negocio,
        interes: formData.interes,
        ciudad: formData.ciudad,
        comentarios: formData.comentarios,
        fecha: formData.fecha,
        hora: formData.hora,
      }) as React.ReactElement,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
