
const TableEnterprises = () => {
  return (
    <>
      <section className="py-5 bgc-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="100">
              <div className="main-title text-end">
                <button className="btn btn-primary fw-bold bg-white w-50">SOLICITAR UNA VISITA</button>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="100">
              <div className="main-title text-start">
                <button className="btn btn-primary fw-bold bg-white w-50">SOLICITAR UNA VISITA</button>
              </div>
            </div>

            <div className="col-lg-7 wow fadeInUp" data-wow-delay="100">
              <div className="text-start">
                <h4>Nombre del emprendimiento</h4>
              </div>
              <div className="d-flex text-start">
                <p className="me-3">Partido</p>
                <p className="me-3">Localidad</p>
                <p className="me-3">Barrio</p>
                <p className="me-3">Ubicación</p>
              </div>
              <div className="d-flex text-start">
                <div className="card me-3 p-2"><i class="fa-regular fa-heart fs-3"></i></div>
                <div className="card me-3 p-2"><i class="fa-regular fa-share-nodes fs-3"></i></div>
                <div className="card me-3 p-2"><i class="fa-solid fa-print fs-3"></i></div>
              </div>
            </div>

            <div className="col-lg-5 justify-content-end d-flex mb-5 wow fadeInUp" data-wow-delay="100">
              <div className="d-grid">
                <button style={{ border: '1px solid #DDDDDD', background: '#06173D', color: 'white', borderRadius: '0px' }} className="btn mb-1">Apartamento</button>
                <button style={{ border: '1px solid #DDDDDD', borderRadius: '0px' }} className="btn mb-1 bg-white">Duplex</button>
                <button style={{ border: '1px solid #DDDDDD', borderRadius: '0px' }} className="btn mb-1 bg-white">Ofícina</button>
              </div>
              <button style={{ border: '1px solid #DDDDDD', height: '122px', borderRadius: '0px' }} className="btn">120.000USD <br /> 1300 mts cubiertos</button>
            </div>

            <div className="col-lg-12 d-flex mt-4 wow fadeInUp" data-wow-delay="100">
              <div className="card me-3" style={{ width: "11rem" }}>
                <h1 className="text-center fs-1 fw-normal">5</h1>

                <div style={{ marginTop: '1px' }} className="card text-center rounded-0">
                  <p className="fw-bold">Unidades disponibles</p>
                </div>
              </div>

              <div className="card me-3" style={{ width: "11rem" }}>
                <div className="d-flex my-0 mx-auto">
                  <h1 className="text-center fs-1 fw-normal">70</h1>
                  <p className="d-flex align-items-end fw-bold">KM</p>
                </div>
                <div style={{ marginTop: '1px' }} className="card text-center rounded-0">
                  <p className="fw-bold">Distancia de la capital</p>
                </div>
              </div>

              <div className="card me-3" style={{ width: "11rem" }}>
                <h1 className="text-center fs-1 fw-normal">3</h1>

                <div style={{ marginTop: '1px' }} className="card text-center rounded-0">
                  <p className="fw-bold">Tipos de propiedades</p>
                </div>
              </div>

              <div className="card me-3" style={{ width: "6rem" }}>
                <h1 className="text-center fs-1 fw-normal"><i class="fa-solid fa-download"></i></h1>

                <div className="card text-center rounded-0">
                  <p className="fw-bold">Catalogo</p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 mt-5 wow fadeInUp" data-wow-delay="100">
              <div className="text-start">
                <p className="fw-bold mb-0">Descripción del Emprendimiento</p>
                <p className="mb-0">Descripción del emprendimiento.</p>
                <a href="#">Leer mas</a>
              </div>
            </div>

            <div className="col-lg-12 mt-3 wow fadeInUp" data-wow-delay="100">
              <div className="container">
                <p className="fw-bold mb-2">Amenites</p>
                <div className="row ms-3">
                  <div className="col-lg-3">
                    <p className="mb-0">Cancha de fútbol</p>
                    <p className="mb-0">Cancha de Hockey sintética</p>
                    <p className="mb-0">Cacha de Basket</p>
                    <p className="mb-0">Cancha de Voley</p>
                    <p className="mb-0">Golf</p>
                  </div>
                  <div className="col-lg-3">
                    <p className="mb-0">Golfhouse</p>
                    <p className="mb-0">Casa de té</p>
                    <p className="mb-0">Cancha de pádel</p>
                    <p className="mb-0">Plaza de juegos</p>
                    <p className="mb-0">SUM</p>
                  </div>
                  <div className="col-lg-3">
                    <p className="mb-0">Club House</p>
                    <p className="mb-0">Microcine</p>
                    <p className="mb-0">Kiosko</p>
                    <p className="mb-0">Cancha de Polo</p>
                    <p className="mb-0">Sector hípico</p>
                  </div>
                  <div className="col-lg-3">
                    <p className="mb-0">Equitación</p>
                    <p className="mb-0">salto</p>
                    <p className="mb-0">Gimnasio</p>
                    <p className="mb-0">Control de acceso</p>
                    <p className="mb-0">Alambre eléctrico perimetral</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 mt-3 wow fadeInUp" data-wow-delay="100">
              <div className="container">
                <p className="fw-bold mb-2">Detalles</p>
                <div className="row ms-1">
                  <div className="col-lg-4">
                    <p className="mb-0 fw-bold">Código de referencia</p>
                    <p className="mb-0 fw-bold">Expensas</p>
                    <p className="mb-0 fw-bold">Fecha actualización expensas</p>
                  </div>
                  <div className="col-lg-4">
                    <p className="mb-0 fw-bold">Superficie del terreno</p>
                    <p className="mb-0 fw-bold">Superficie Cubierta</p>
                    <p className="mb-0 fw-bold">Superficie Semi Cubierta</p>
                  </div>
                  <div className="col-lg-4">
                    <p className="mb-0 fw-bold">Zonificación</p>
                    <p className="mb-0 fw-bold">Financiación</p>
                    <p className="mb-0 fw-bold">Eco-Construcción</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TableEnterprises;
