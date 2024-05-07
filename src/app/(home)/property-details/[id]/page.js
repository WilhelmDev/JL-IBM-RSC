import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/home-v3/footer";
import Property from "@/components/location/property";
import Tabs from "@/components/location/tabs";
import Map from "@/components/home/home-v10/Map";
import FormView from "@/components/home/home-v3/Form";
import PropertieComponent from "@/components/home/home-v3/propertie";
import HeaderV2 from "@/components/common/HeaderV2";
import TabsDetails from "@/components/property-details/tabs-details";

export const metadata = {
    title: "Propiedades",
};


const PropertiesView = () => {

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


    return (
        <>
            {/* Main Header Nav */}
            <HeaderV2 />
            {/* End Main Header Nav */}

            {/* Mobile Nav  */}
            <MobileMenu />
            {/* End Mobile Nav  */}


            {/* Home Banner Style V3 */}
            <section className="properties-banner-style2 p0">
                <div className="properties-style2">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 text-center">
                            </div>
                            {/* End .col-xl-8 */}

                            <div className="col-xl-4 d-none d-xl-block">
                                <div className="home3-img-box1">

                                </div>
                            </div>
                            {/* End .col-xl-4 */}
                        </div>
                    </div>
                    {/* End .container */}
                </div>
            </section>
            {/* End Home Banner Style V3 */}
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
                                <button className="btn btn-primary fw-bold bg-white w-50">OFRECER PERMUTA</button>
                            </div>
                        </div>

                        <div className="d-flex border-section">
                            <div className="col-lg-7 mb-2 wow fadeInUp" data-wow-delay="100">
                                <div className="text-start">
                                    <h4>Nombre de la Propiedad</h4>
                                </div>
                                <div className="d-flex text-start">
                                    <p className="me-3">Partido</p>
                                    <p className="me-3">Localidad</p>
                                    <p className="me-3">Barrio</p>
                                    <p className="me-3">Ubicación de la propiedad</p>
                                </div>
                                <div className="d-flex text-start">
                                    <div className="card me-3 p-2"><i class="fa-regular fa-heart fs-3"></i></div>
                                    <div className="card me-3 p-2"><i class="flaticon-new-tab fs-3"></i></div>
                                    <div className="card me-3 p-2"><i class="fa-regular fa-share-nodes fs-3"></i></div>
                                    <div className="card me-3 p-2"><i class="fa-solid fa-print fs-3"></i></div>
                                </div>
                                <div className="d-flex mt-4">
                                    <div style={{ border: '1px solid #DDDDDD', height: '114px', borderRadius: '0px' }} className="btn d-grid align-items-center"><b className="fs-3 mb-usd">14.000 USD</b> <span className="mt-0 d-flex justify-content-end">1,400.000 ARS</span></div>
                                    <div className="d-grid">
                                        <button style={{ border: '1px solid #DDDDDD', background: '#06173D', color: 'white', borderRadius: '0px' }} className="btn mb-0">Venta</button>
                                        <button style={{ border: '1px solid #DDDDDD', borderRadius: '0px' }} className="btn mb-0 bg-white">Alquiler</button>
                                        <button style={{ border: '1px solid #DDDDDD', borderRadius: '0px' }} className="btn mb-0 bg-white">Alquiler Temporal</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 justify-content-end d-flex wow fadeInUp" data-wow-delay="100">
                                <div>
                                    <div className="card me-3 br-0" style={{ width: "11rem" }}>
                                        <div className="d-flex my-0 mx-auto">
                                            <h1 className="text-center fs-1 fw-normal">1200</h1>
                                            <p className="d-flex align-items-end fw-bold">MTS2</p>
                                        </div>
                                        <div style={{ marginTop: '1px' }} className="card br-0 text-center rounded-0">
                                            <p className="fw-bold">Superficie Cubierta</p>
                                        </div>
                                    </div>

                                    <div className="card me-3 mt-3 br-0" style={{ width: "11rem" }}>
                                        <div className="d-flex my-0 mx-auto">
                                            <h1 className="text-center fs-1 fw-normal">2700</h1>
                                            <p className="d-flex align-items-end fw-bold">MTS2</p>
                                        </div>
                                        <div style={{ marginTop: '1px' }} className="card br-0 text-center rounded-0">
                                            <p className="fw-bold">Superficie Terreno</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card br-0" style={{ width: "6.5rem" }}>
                                        <h1 className="text-center fs-1 fw-normal">3</h1>

                                        <div className="card br-0 text-center rounded-0">
                                            <p className="fw-bold">dormitorios</p>
                                        </div>
                                    </div>

                                    <div className="card me-0 br-0 mt-3" style={{ width: "6.5rem" }}>
                                        <h1 className="text-center fs-1 fw-normal">2</h1>

                                        <div className="card br-0 text-center rounded-0">
                                            <p className="fw-bold">Baños</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 mt-5 border-section wow fadeInUp" data-wow-delay="100">
                            <div className="text-start">
                                <p className="fw-bold mb-0">Descripción de la propiedad</p>
                                <p className="mb-0">Esta casa de 3 dormitorios con loft y 2 baños en la comunidad cerrada de The Hideout lo tiene todo. Desde el piso abierto Debido a la abundancia de luz que entra por las ventanas, esta casa es perfecta para el entretenimiento. La sala de estar y el comedor tienen techos abovedados y una hermosa chimenea. Te encantará pasar tiempo en la terraza. disfrutando de las hermosas vistas. En la cocina, encontrará electrodomésticos de acero inoxidable y un protector contra salpicaduras de azulejos, así como así como una barra desayunadora.</p>
                                <a href="#" className="fw-bold link-style">Leer mas</a>
                            </div>
                        </div>

                        <div className="col-lg-12 mt-3 border-section wow fadeInUp" data-wow-delay="100">
                            <div className="container">
                                <h5 className="fw-bold mb-2">Detalles de la propiedad</h5>
                                <div className="row ms-3">
                                    <div className="col-lg-4">
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Código de referencia</p>
                                            <p>RT48</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Precio Expensas</p>
                                            <p>$112.123 ARS</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Fecha de Expensas</p>
                                            <p>12-12-2024</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Superficie Cubierta</p>
                                            <p>1500 Mts2</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Superficie Semi Cubierta</p>
                                            <p>1500 Mts2</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Superficie del terreno</p>
                                            <p>1500 Mts2</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Zonificación</p>
                                            <p>Residencial & Comercial</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Frente</p>
                                            <p>1020 Mts</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Fondo</p>
                                            <p>560 Mts</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Orientación</p>
                                            <p>Norte</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Disposición</p>
                                            <p>Unifamiliar</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Plantas</p>
                                            <p>1</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Ambientes</p>
                                            <p>5</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Estacionamiento Cubierto</p>
                                            <p>1</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Estacionamiento Semicubierto</p>
                                            <p>1</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Estacionamiento Descubierto</p>
                                            <p>1</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Garaje</p>
                                            <p>3</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Antigüedad</p>
                                            <p>2</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Sotano</p>
                                            <p>2</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Baños en Suit</p>
                                            <p>2</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold fs-6">Toilet</p>
                                            <p>1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <TabsDetails />

            <div className="container border-section">
                <PropertieComponent />
            </div>

            <div className="container mt-2 border-section mb-5">
                <div className="row">
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay="100">
                        <div className="text-start">
                            <h4>¿Que podes encontrar en [Nombre de la localidad]?</h4>
                        </div>
                        <div className="home10-map">
                            <Map />
                        </div>
                        <Tabs items={items} tabs={tabs} />
                    </div>
                </div>
            </div>

            {/* Form  */}
            <FormView />
            {/* Form  */}

            <div className="container mb-5">
                <div className="row">
                    <div className='title'>
                        <h3>Otras propiedades que te pueden interesar</h3>
                        <div className="d-flex justify-content-between">
                            <p>Puedes guardar y seleccionar las que te gusten y compararlas</p>
                            <a className="fw-bold">VER TODAS</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Property />
                    </div>
                    <div className="col-lg-6">
                        <Property />
                    </div>
                </div>
            </div>

            <section className="footer-style1 pt60 pb-0">
                <Footer />
            </section>
        </>
    );
};

export default PropertiesView;
