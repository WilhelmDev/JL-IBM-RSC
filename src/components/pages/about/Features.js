import PropTypes from 'prop-types';
const Features = ({ features = [
  {
    id: 1,
    icon: "flaticon-security",
    title: "Acceso a información detallada del mercado:",
    description: [
      "Informes sobre tendencias de mercado en propiedades dentro y fuera del club.",
      "Análisis comparativos de propiedades similares en la zona.",
      "Datos sobre el crecimiento y valorización de propiedades dentro del club.",
    ]
  },
  {
    id: 2,
    icon: "flaticon-keywording",
    title: "Asesoramiento inmobiliario:",
    description: [
      "Equipo especializado en la compra y venta de propiedades en todo tipo de barrios.",
      "Visitas guiadas a las propiedades disponibles"
    ],
  },
  {
    id: 3,
    icon: "flaticon-investment",
    title: "Apoyo legal:",
    description: [
      "Asistencia legal para la revisión de contratos y documentos",
      "Información detallada sobre las opciones disponibles",
      "Asesoramiento en términos legales y tributarios relacionados con la adquisición de propiedades",
    ],
  },
] }) => {
  return (
    <>
      {features.map((feature, index) => (
        <div className="list-one d-flex align-items-start mb30" key={feature.id}>
          <span className={`list-icon flex-shrink-0 ${feature.icon}`} />
          <div className="list-content flex-grow-1 ml20">
            <h6 className="mb-1">{feature.title}</h6>
            {Array.isArray(feature.description) ? (
              <ul className="text mb-0 fz15" style={{ paddingLeft: '0.8rem' }}>
                {feature.description.map((desc, i) => (
                  <li style={{ listStyleType: 'disc' }} key={i}>{desc}</li>
                ))}
              </ul>
            ) : (
              <p className="text mb-0 fz15">{feature.description}</p>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
Features.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  )
}
export default Features;
