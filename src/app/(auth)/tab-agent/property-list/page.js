import dynamic from 'next/dynamic' 
const List = dynamic(() => import('@/components/tab-admin/list-agent/property/list'), { ssr: false })

export const metadata = {
  title: "Listado de propiedades || Homez - Real Estate NextJS Template",
};

const PropertyList = () => {
  return (
    <div className="m-5">
      <section className="p-4" id="property-list">
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
