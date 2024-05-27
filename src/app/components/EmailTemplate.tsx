import { Button, Container, Hr, Html, Img } from '@react-email/components';

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

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nombre,
  correo,
  telefono,
  negocio,
  interes,
  ciudad,
  comentarios,
  fecha,
  hora,
}) => (
  <Html lang="es" dir="ltr">
    <Container style={styles.body}>
      <Img
        src="https://cdn.discordapp.com/attachments/950929345365545053/1244436569020956712/email_logo.png?ex=66551b5e&is=6653c9de&hm=4b7f0828590444611651aeb21e778cbbc2730b20ebc643b31d1e0ab339c42806&"
        alt="logo"
        width={170}
        height={32}
        style={styles.logo}
      />
      <Container style={styles.mainSection}>
        <Container style={styles.header}>
          <Container style={styles.headerTitle}>Solicitud de Cotización</Container>
          <Container style={styles.textBody}>
            {nombre + ' (' + correo + ')'}
            <br />
            ha solicitado una cotización mediante el formulario de contacto en la página web de Sumiplas.
          </Container>
        </Container>
        <Container style={styles.section}>
          <Container style={styles.sectionTitle}>Datos del Cliente</Container>
          <Container style={styles.field}>
            <Container style={styles.fieldLabel}>Nombre y Correo:</Container>
            <Container style={styles.fieldData}>{nombre + ' (' + correo + ')'}</Container>
          </Container>
          {telefono && (
            <Container style={styles.field}>
              <Container style={styles.fieldLabel}>Número de Teléfono:</Container>
              <Container style={styles.fieldData}>{telefono}</Container>
            </Container>
          )}
          {negocio && (
            <Container style={styles.field}>
              <Container style={styles.fieldLabel}>Negocio / Empresa:</Container>
              <Container style={styles.fieldData}>{negocio}</Container>
            </Container>
          )}
          {ciudad && (
            <Container style={styles.field}>
              <Container style={styles.fieldLabel}>Ciudad / Municipio:</Container>
              <Container style={styles.fieldData}>{ciudad}</Container>
            </Container>
          )}
        </Container>
        <Hr style={styles.divider} />
        <Container style={styles.section}>
          <Container style={styles.sectionSubtitle}>Se encuentra interesado en:</Container>
          <Container style={styles.fieldData}>{interes}</Container>
          {comentarios && (
            <Container style={styles.section}>
              <Container style={styles.fieldLabel}>Comentarios adicionales:</Container>
              <Container style={styles.fieldData}>{comentarios}</Container>
            </Container>
          )}
        </Container>
        <Hr style={styles.divider} />
        <Container style={styles.section}>
          <Container style={styles.textBody}>
            Si desea responder a esta solicitud, da click en el siguiente botón:
          </Container>
          <Button
            href={
              'mailto:' +
              correo +
              '?subject=Respuesta a Solicitud de Cotización en Sumiplas&body=Hola ' +
              nombre +
              ', este correo es para responder a tu solicitud de cotización con interés en ' +
              interes +
              ', realizada el día ' +
              fecha +
              ' desde nuestro formulario en sumiplas.mx.'
            }
            style={styles.button}
          >
            Responder a {nombre}
          </Button>
        </Container>
      </Container>
      <Container style={styles.footerText}>
        Este correo fue enviado automáticamente desde sumiplas.mx el día {fecha} a las {hora}.
      </Container>
    </Container>
  </Html>
);

export default EmailTemplate;

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#F2F7FB',
    padding: '1.25rem',
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  },
  logo: {
    height: '2.5rem',
    width: '170px',
    marginTop: '1.25rem',
    marginBottom: '1.25rem',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  },
  mainSection: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderRadius: '0.25rem',
  },
  header: {
    backgroundColor: '#005482',
    color: '#FFFFFF',
    padding: '2.5rem',
    borderRadius: '0.25rem',
  },
  headerTitle: {
    paddingBottom: '1rem',
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: '700',
  },
  headerText: {
    color: '#FFFFFF',
    lineHeight: '1.25rem',
  },
  textBody: {
    color: '#FFFFFF',
    lineHeight: '1.25rem',
  },
  section: {
    padding: '2.5rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  sectionTitle: {
    color: '#000000',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    borderColor: '#000000',
    width: '100%',
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: '700',
  },
  sectionSubtitle: {
    color: '#000000',
    paddingBottom: '0.5rem',
    width: '100%',
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    fontWeight: '700',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
  },
  fieldLabel: {
    color: '#000000',
    fontWeight: '700',
  },
  fieldData: {
    color: '#757575',
    marginLeft: '0.5rem',
  },
  divider: {
    color: 'transparent',
    alignSelf: 'center',
    borderColor: '#C7C7C7',
    width: '80%',
  },
  button: {
    width: '90%',
    padding: '1rem',
    marginTop: '1rem',
    borderRadius: '0.5rem',
    fontWeight: '700',
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: '#3B82F6',
    color: '#FFFFFF',
  },
  footerText: {
    padding: '2.5rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    color: '#9CA3AF',
  },
};

/* 

PURE REACT COMPONENT

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nombre,
  correo,
  telefono,
  negocio,
  interes,
  ciudad,
  comentarios,
  fecha,
  hora,
}) => (
  <div className="flex flex-col w-full bg-gray-200 p-5">
    <img src="/images/logos/email_logo.png" alt="logo" className="h-8 w-[170px] my-5 mx-2" />
    <div className="flex flex-col bg-spwhite rounded">
      <div className="bg-spblue text-spwhite p-10 rounded">
        <p className="font-bold text-2xl pb-4">Solicitud de Cotización</p>
        <p className="leading-5">
          {nombre + ' (' + correo + ')'}
          <br /> ha solicitado una cotización mediante el formulario de contacto en la página web de Sumiplas.
        </p>
      </div>
      <div className="p-10 py-4">
        <p className="font-bold text-2xl border-black w-full py-2"> Datos del Cliente </p>
        <div className="flex flex-col sm:flex-row">
          <p className="font-medium">Nombre y Correo:</p>
          <p className="text-gray-600 ml-2">{nombre + ' (' + correo + ')'}</p>
        </div>
        {telefono && (
          <div className="flex flex-col sm:flex-row">
            <p className="font-medium">Número de Teléfono:</p>
            <p className="text-gray-600 ml-2">{telefono}</p>
          </div>
        )}
        {negocio && (
          <div className="flex flex-col sm:flex-row">
            <p className="font-medium">Negocio / Empresa:</p>
            <p className="text-gray-600 ml-2">{negocio}</p>
          </div>
        )}
        {ciudad && (
          <div className="flex flex-col sm:flex-row">
            <p className="font-medium">Ciudad / Municipio:</p>
            <p className="text-gray-600 ml-2">{ciudad}</p>
          </div>
        )}
      </div>
      <hr className="border-gray-400 w-[calc(100%-5rem)] self-center" />
      <div className="p-10 py-4">
        <p className="font-bold text-xl w-full pb-2">Se encuentra interesado en:</p>
        <p className="text-gray-600">{interes}</p>
        {comentarios && (
          <div className="flex flex-col p-4">
            <p className="font-medium">Comentarios adicionales:</p>
            <p className="text-gray-600 leading-5">{comentarios}</p>
          </div>
        )}
      </div>
      <hr className="border-gray-400 w-[calc(100%-5rem)] self-center" />
      <div className="flex flex-col p-10 py-4">
        <p className="font-medium leading-5">Si desea responder a esta solicitud, da click en el siguiente botón:</p>
        <a
          href={
            'mailto:' +
            correo +
            '?subject=Respuesta a Solicitud de Cotización en Sumiplas&body=Hola ' +
            nombre +
            ', este correo es para responder a tu solicitud de cotización con interés en ' +
            interes +
            ', realizada el día ' +
            fecha +
            ' desde nuestro formulario en sumiplas.mx.'
          }
          className="bg-blue-500 hover:bg-blue-600 text-center text-spwhite p-4 font-bold rounded-lg mt-4"
        >
          Responder a {nombre}
        </a>
      </div>
    </div>
    <div className="text-gray-400 text-sm p-10">
      Este correo fue enviado automáticamente desde{' '}
      <a className="underline hover:text-blue-300" href={'sumiplas.mx'}>
        sumiplas.mx
      </a>{' '}
      el día {fecha} a las {hora}.
    </div>
  </div>
); */
