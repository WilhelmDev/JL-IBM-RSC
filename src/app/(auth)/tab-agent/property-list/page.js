import List from "@/components/property/list.js";
export const metadata = {
  title: "Listado de propiedades || Homez - Real Estate NextJS Template",
};

const PropertyList = () => {
  return (
    <div className="m-5">
      <section id="property-list">
        <div className="info-page">
          <p className="title-page">Todas tus propiedades</p>
          <span>
            Estás viendo una lista con todos las propiedades donde puedes
            ingresar a observarlas, editarlas y saber si tienen solicitudes.
          </span>
        </div>
        <div className="content-page">
          <List />
        </div>
      </section>
    </div>
  );
};

export default PropertyList;
