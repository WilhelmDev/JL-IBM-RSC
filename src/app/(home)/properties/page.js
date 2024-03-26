import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v3/Header";
import Footer from "@/components/home/home-v3/footer";
import TableEnterprises from "@/components/home/home-v3/hero/EnterprisesTable";
import Property from "@/components/location/property";
import Tabs from "@/components/location/tabs";
import Map from "@/components/home/home-v10/Map";
import FormView from "@/components/home/home-v3/Form";
import PropertieComponent from "@/components/home/home-v3/propertie";
import HeaderV2 from "@/components/common/HeaderV2";

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

                        <div className="col-lg-7 wow fadeInUp" data-wow-delay="100">
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
                                <button style={{ border: '1px solid #DDDDDD', height: '122px', borderRadius: '0px' }} className="btn">14.000 USD <br /> 1,400.000 ARS</button>
                                <div className="d-grid">
                                    <button style={{ border: '1px solid #DDDDDD', background: '#06173D', color: 'white', borderRadius: '0px' }} className="btn mb-0">Venta</button>
                                    <button style={{ border: '1px solid #DDDDDD', borderRadius: '0px' }} className="btn mb-0 bg-white">Alquiler</button>
                                    <button style={{ border: '1px solid #DDDDDD', borderRadius: '0px' }} className="btn mb-0 bg-white">Alquiler Temporal</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 justify-content-end d-flex mb-5 wow fadeInUp" data-wow-delay="100">
                            <div>
                                <div className="card me-3" style={{ width: "11rem" }}>
                                    <div className="d-flex my-0 mx-auto">
                                        <h1 className="text-center fs-1 fw-normal">1200</h1>
                                        <p className="d-flex align-items-end fw-bold">MTS2</p>
                                    </div>
                                    <div style={{ marginTop: '1px' }} className="card text-center rounded-0">
                                        <p className="fw-bold">Superficie Cubierta</p>
                                    </div>
                                </div>

                                <div className="card me-3 mt-3" style={{ width: "11rem" }}>
                                    <div className="d-flex my-0 mx-auto">
                                        <h1 className="text-center fs-1 fw-normal">2700</h1>
                                        <p className="d-flex align-items-end fw-bold">MTS2</p>
                                    </div>
                                    <div style={{ marginTop: '1px' }} className="card text-center rounded-0">
                                        <p className="fw-bold">Superficie Terreno</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card me-3" style={{ width: "6.5rem" }}>
                                    <h1 className="text-center fs-1 fw-normal">3</h1>

                                    <div className="card text-center rounded-0">
                                        <p className="fw-bold">dormitorios</p>
                                    </div>
                                </div>

                                <div className="card me-3 mt-3" style={{ width: "6.5rem" }}>
                                    <h1 className="text-center fs-1 fw-normal">2</h1>

                                    <div className="card text-center rounded-0">
                                        <p className="fw-bold">Baños</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 mt-5 wow fadeInUp" data-wow-delay="100">
                            <div className="text-start">
                                <p className="fw-bold mb-0">Descripción de la propiedad</p>
                                <p className="mb-0">Esta casa de 3 dormitorios con loft y 2 baños en la comunidad cerrada de The Hideout lo tiene todo. Desde el piso abierto Debido a la abundancia de luz que entra por las ventanas, esta casa es perfecta para el entretenimiento. La sala de estar y el comedor tienen techos abovedados y una hermosa chimenea. Te encantará pasar tiempo en la terraza. disfrutando de las hermosas vistas. En la cocina, encontrará electrodomésticos de acero inoxidable y un protector contra salpicaduras de azulejos, así como así como una barra desayunadora.</p>
                                <a href="#" className="fw-bold">Leer mas</a>
                            </div>
                        </div>

                        <div className="col-lg-12 mt-3 wow fadeInUp" data-wow-delay="100">
                            <div className="container">
                                <p className="fw-bold mb-2">Detalles de la propiedad</p>
                                <div className="row ms-3">
                                    <div className="col-lg-4">
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Código de referencia</p>
                                            <p>RT48</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Precio Expensas</p>
                                            <p>$112.123 ARS</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Fecha de Expensas</p>
                                            <p>12-12-2024</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Superficie Cubierta</p>
                                            <p>1500 Mts2</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Superficie Semi Cubierta</p>
                                            <p>1500 Mts2</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Superficie del terreno</p>
                                            <p>1500 Mts2</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Zonificación</p>
                                            <p>Residencial & Comercial</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Frente</p>
                                            <p>1020 Mts</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Fondo</p>
                                            <p>560 Mts</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Orientación</p>
                                            <p>Norte</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Disposición</p>
                                            <p>Unifamiliar</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Plantas</p>
                                            <p>1</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Ambientes</p>
                                            <p>5</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Estacionamiento Cubierto</p>
                                            <p>1</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Estacionamiento Semicubierto</p>
                                            <p>1</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Estacionamiento Descubierto</p>
                                            <p>1</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Garaje</p>
                                            <p>3</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Antigüedad</p>
                                            <p>2</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Sotano</p>
                                            <p>2</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Baños en Suit</p>
                                            <p>2</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fw-bold">Toilet</p>
                                            <p>1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* this is the component of the entrepreneurship table */}

            {/* End Our Partners */}
            <div className="col-lg-12 mt-3 properties-table mb-5 wow fadeInUp" data-wow-delay="100">
                <div className="container">
                    <div class="btn-group mb-2" role="group" aria-label="Basic checkbox toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btnradio1">Amenidades</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btnradio2">Servicios</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btnradio3">Adicionales</label>
                    </div>
                    <div className="row ms-3">
                        <div className="col-lg-3">
                            <p className="mb-0">Altillo</p>
                            <p className="mb-0">Balcon</p>
                            <p className="mb-0">Biblioteca</p>
                            <p className="mb-0">Cocina</p>
                            <p className="mb-0">Cocina Comedor</p>
                        </div>
                        <div className="col-lg-3">
                            <p className="mb-0">Cocina Living Comedor</p>
                            <p className="mb-0">Comedor Diario</p>
                            <p className="mb-0">Cochera</p>
                            <p className="mb-0">Dependencia de servicio</p>
                            <p className="mb-0">Entrada de coche</p>
                        </div>
                        <div className="col-lg-3">
                            <p className="mb-0">Galeria</p>
                            <p className="mb-0">Hall</p>
                            <p className="mb-0">Lavadero</p>
                            <p className="mb-0">Living</p>
                            <p className="mb-0">Living Comedor</p>
                        </div>
                        <div className="col-lg-3">
                            <p className="mb-0">Oficina</p>
                            <p className="mb-0">Playroom</p>
                            <p className="mb-0">Patio</p>
                            <p className="mb-0">Quincho</p>
                            <p className="mb-0">Sotano</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <PropertieComponent />
            </div>

            <div className="container mb-5">
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
                        <h4>Otras propiedades que te pueden interesar</h4>
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
