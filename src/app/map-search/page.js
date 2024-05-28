import dynamic from "next/dynamic";
const Property = dynamic(
  () => import('@/components/location/property'),
  { ssr: false }
)
const HeaderV2 = dynamic(
  () => import('@/components/common/HeaderV2'),
  { ssr: false }
)
const Tabs = dynamic(
  () => import('@/components/location/tabs'),
  { ssr: false }
)
const Entrepreneurship = dynamic(
  () => import('@/components/location/entrepreneurship'),
  { ssr: false }
)

const Neighborhood = dynamic(
  () => import('@/components/location/neighborhood'),
  { ssr: false }
)

const MobileMenu = dynamic(
  () => import('@/components/common/mobile-menu'),
  { ssr: false }
)

const Footer = dynamic(
  () => import('@/components/common/default-footer'),
  { ssr: false }
)

const tabs = [
  { id: "buy", label: "Establecimiento (3)" },
  { id: "rent", label: "Transporte y accesos" },
  { id: "sold", label: "Alquiler temporal" },
];

const items = [
  { id: "1", title: "Escuela Primaria Nombre" },
  { id: "2", title: "Hospital" },
  { id: "3", title: "Banco" },
];

const addresses = [
  {
    address: "10425 Tabor St",
    city: "Los Angeles",
    state: "California",
    zipCode: "90034",
    area: "Brookside",
    country: "United States",
  },
  {
    address: "10 Downing Street",
    city: "London",
    state: "Greater London",
    zipCode: "SW1A 2AA",
    area: "Westminster",
    country: "United Kingdom",
  },
];
export const metadata = {
  title: "Busqueda en mapa  || Homez - Real Estate NextJS Template",
};

const MapSearch = () => {
  return (
    <>
      <div id="map-search">
        {/* Main Header Nav */}
        <HeaderV2 />
        {/* End Main Header Nav */}

        {/* Mobile Nav  */}
        <MobileMenu />
        {/* End Mobile Nav  */}

        <div className="container pt-5 ">

          {/* <div className="row my-5 py-5"> */}
          {/*   <div className="col-6 left-side"> */}
          {/*     <h1>Ofertas que no pueden esperar</h1> */}
          {/*     <p> Puedes guardar y seleccionar las que te gusten y compararlas </p> */}
          {/*     </div> */}
          {/*   <div className="col-6 d-flex justify-content-end align-items-center right-side"> */}
          {/*     <h3>VER TODAS</h3> */}
          {/*   </div> */}
          {/* </div> */}

          <div className="row">
            <div className="col-6">
              <Property />
            </div>
            <div className="col-6">
              <Property />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Property />
            </div>
            <div className="col-6">
              <Property />
            </div>
          </div>
          <div className="row">
            <div className="col-12 pt-4 d-flex justify-content-center align-items-center right-side">
              <h3 style={{ fontSize: '20px' }}>CARGAR MÁS</h3>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="col-md-12 map">
            <iframe
              className="position-relative bdrs12 mt30 h250"
              loading="lazy"
              src={`https://maps.google.com/maps?q=${addresses[0].address}&t=m&z=14&output=embed&iwloc=near`}
              title={addresses[0].address}
              aria-label={addresses[0].address}
            />
          </div>
        </div>

        <section className='p0'>
          <div className="container tabs-wrapper">
            <Tabs items={items} tabs={tabs} />
          </div>
        </section>

        <div className="container my-5">

          <div className="row my-4">
            <div className="col-8 left-side">
              <h1 style={{ fontSize: '30px' }}>Otras propiedades que te pueden interesar</h1>
              <p> Puedes guardar y seleccionar las que te gusten y compararlas </p>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center right-side">
              <h3>VER TODAS</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <Property />
            </div>
            <div className="col-6">
              <Property />
            </div>
          </div>

        </div>


        <div className="container my-5">

          <div className="row my-4">
            <div className="col-12 left-side">
              <h1 style={{ fontSize: '30px' }}>Emprendimientos</h1>
              <p> Si quieres invertir en tu casa del futuro aquí encontraras los emprendimientos que te ofrecemos </p>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <Entrepreneurship />
            </div>
            <div className="col-6">
              <Entrepreneurship />
            </div>
          </div>

          <div className="row">
            <div className="col-12 pt-4 d-flex justify-content-center align-items-center right-side">
              <h3 style={{ fontSize: '20px' }}>CARGAR MÁS</h3>
            </div>
          </div>
        </div>


        <div className="container my-5">

          <div className="row my-4">
            <div className="col-12 left-side">
              <h1 style={{ fontSize: '30px' }}>Emprendimientos</h1>
              <p> Si quieres invertir en tu casa del futuro aquí encontraras los emprendimientos que te ofrecemos </p>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <Entrepreneurship />
            </div>
            <div className="col-6">
              <Entrepreneurship />
            </div>
          </div>

          <div className="row">
            <div className="col-12 pt-4 d-flex justify-content-center align-items-center right-side">
              <h3 style={{ fontSize: '20px' }}>CARGAR MÁS</h3>
            </div>
          </div>
        </div>


        <div className="container my-5">

          <div className="row my-4">
            <div className="col-12 left-side">
              <h1 style={{ fontSize: '30px' }}>Otros Barrios que pueden Interesarte</h1>
              <p> Puedes guardar y seleccionar las que te gusten y compararlas </p>
            </div>
            <div className="col-12">
              <button className="button">Todos</button>
              <button className="button">Abiertos</button>
              <button className="button">Semi Cerrados</button>
              <button className="button">Privados</button>
              <button className="button">Country Club</button>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <Neighborhood />
            </div>
            <div className="col-6">
              <Neighborhood />
            </div>
          </div>

          <div className="row">
            <div className="col-12 pt-4 d-flex justify-content-center align-items-center right-side">
              <h3 style={{ fontSize: '20px' }}>CARGAR MÁS</h3>
            </div>
          </div>
        </div>

        {/* Start Our Footer */}
        <section className="footer-style1 pt60 pb-0">
          <Footer />
        </section>
        {/* End Our Footer */}
      </div>
    </>
  );
};

export default MapSearch;
