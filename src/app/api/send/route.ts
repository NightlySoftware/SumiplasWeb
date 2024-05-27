import EmailTemplate, { EmailTemplateProps } from '@/app/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData: EmailTemplateProps = await request.json();

    const { data, error } = await resend.emails.send({
      from: formData.nombre + ' (' + formData.correo + ') <correos@sumiplas.mx>',
      to: ['lololertrololer@gmail.com'],
      subject: 'Solicitud de Cotización - ' + formData.nombre,
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
