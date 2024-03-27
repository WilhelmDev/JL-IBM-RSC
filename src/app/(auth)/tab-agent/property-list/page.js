import Pagination from "@/components/listing/Pagination";
import List from "@/components/property/list.js"

const PropertyList = () => {
  return (
    <div className="m-5">
      <section id="property-list">
        <div className="info-page">
          <p className="title-page">Todas las propiedades</p>
          <span>
            Estás viendo una lista con todos las propiedades donde puedes
            ingresar a observarlas, editarlas y saber si tienen solicitudes.
          </span>
        </div>
        <div className="content-page">
          <List />
        </div>
      </section>

      <div className="pagination-container">
        <div className="row mt-5">
          <div className="mbp_pagination text-center">
            <Pagination />
            <p className="mt10 pagination_page_count text-center"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
