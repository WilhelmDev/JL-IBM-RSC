/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/home-v3/footer";
import Property from "@/components/location/property";
import Tabs from "@/components/location/tabs";
import FormView from "@/components/home/home-v3/Form";
import PropertieComponent from "@/components/home/home-v3/propertie";
import HeaderV2 from "@/components/common/HeaderV2";
import TabsDetails from "@/components/property-details/tabs-details";
import MapPropertyDetails from "@/components/property-details/map-property-details";
import { useEffect, useState } from "react";
import { getProperty, getPropertiesList, getLocalities } from "@/core/infrastructure/services/tab-agent.service";

const PropertiesView = () => {
    const [loading, setLoading] = useState(false)
    const [properties, setProperties] = useState([]);
    const [propertyData, setPropertyData] = useState();
    const [price, setPrice] = useState('venta');
    const [priceUsd, setPriceUsd] = useState('');
    const [priceArg, setPriceArg] = useState('');
    const [idProperty, setIdProperty] = useState('');
    const [localities, setLocalities] = useState();

    useEffect(() => {
        const parts = location.pathname.split("/");
        const id = parts[parts.length - 1];
        setIdProperty(id)
    }, [])

    const metadata = {
        title: "Propiedades",
    };

    useEffect(() => {
        // Cambiar el título del documento cuando cambie el estado de metadata
        document.title = metadata.title;
    }, [metadata]);

    const fetchProperty = async () => {
        try {
            setLoading(true)
            const data = await getProperty(idProperty);
            console.log(data)
            setPropertyData(data)
        } catch (error) {
            setProperties(undefined);
        } finally {
            setLoading(false)
        }
    };

    const fetchProperties = async () => {
        try {
            setLoading(true)
            const data = await getPropertiesList(1, '', '', '');
            setProperties(data)
        } catch (error) {
            setProperties(undefined);
        } finally {
            setLoading(false)
        }
    }

    const fetchLocalities = async () => {
        try {
            const data = await getLocalities(3);
            setLocalities(data)
        } catch (error) {

        } finally {

        }
    };

    useEffect(() => {
        if (idProperty !== '') {
            fetchProperty();
        }
        fetchProperties();
    }, [idProperty])

    useEffect(() => {
        fetchLocalities()
    }, [])

    useEffect(() => {
        if (propertyData !== undefined) {
            const usd = price === 'venta' ? propertyData.data.price.retail.usd : propertyData.data.price.anual_rent.usd;
            const arg = price === 'venta' ? propertyData.data.price.retail.arg : propertyData.data.price.anual_rent.arg;
            setPriceArg(arg)
            setPriceUsd(usd)
        }
    }, [price, propertyData]);

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
            {propertyData !== undefined ? (
                <>
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
                                            <h4>{propertyData.data.title}</h4>
                                        </div>
                                        <div className="d-flex text-start">
                                            <p className="me-3">Partido</p>
                                            <p className="me-3">Localidad</p>
                                            <p className="me-3">Barrio</p>
                                            <p className="me-3">Ubicación de la propiedad</p>
                                        </div>
                                        <div className="d-flex text-start">
                                            <div className="card me-3 p-2"><i className="fa-regular fa-heart fs-3"></i></div>
                                            <div className="card me-3 p-2"><i className="flaticon-new-tab fs-3"></i></div>
                                            <div className="card me-3 p-2"><i className="fa-regular fa-share-nodes fs-3"></i></div>
                                            <div className="card me-3 p-2"><i className="fa-solid fa-print fs-3"></i></div>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <div style={{ border: '1px solid #DDDDDD', height: '114px', borderRadius: '0px' }} className="btn d-grid align-items-center">
                                                <b className="fs-3 mb-usd">{priceUsd} USD</b> {/* Asumiendo que siempre se muestra el precio en USD */}
                                                <span className="mt-0 d-flex justify-content-end">{priceArg} ARS</span>
                                            </div>
                                            <div className="d-grid">
                                                <button
                                                    style={{ border: '1px solid #DDDDDD', background: price === 'venta' ? '#06173D' : 'transparent', color: price === 'venta' ? 'white' : 'black', borderRadius: '0px' }}
                                                    onClick={() => setPrice('venta')}
                                                    className="btn mb-0 "
                                                >
                                                    Venta
                                                </button>
                                                <button
                                                    style={{ border: '1px solid #DDDDDD', background: price === 'alquiler' ? '#06173D' : 'transparent', color: price === 'alquiler' ? 'white' : 'black', borderRadius: '0px' }}
                                                    onClick={() => setPrice('alquiler')}
                                                    className="btn mb-0"
                                                >
                                                    Alquiler
                                                </button>
                                                <button
                                                    style={{ border: '1px solid #DDDDDD', background: price === 'alquiler temporal' ? '#06173D' : 'transparent', color: price === 'alquiler temporal' ? 'white' : 'black', borderRadius: '0px' }}
                                                    onClick={() => setPrice('alquiler temporal')}
                                                    className="btn mb-0"
                                                >
                                                    Alquiler Temporal
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 justify-content-end d-flex wow fadeInUp" data-wow-delay="100">
                                        <div>
                                            <div className="card me-3 br-0" style={{ width: "11rem" }}>
                                                <div className="d-flex my-0 mx-auto">
                                                    <h5 className="text-center fs-2 fw-normal">{propertyData.data.surface_area.covered_surface}</h5>
                                                    <p className="d-flex align-items-end fw-bold">MTS2</p>
                                                </div>
                                                <div style={{ marginTop: '1px' }} className="card br-0 text-center rounded-0">
                                                    <p className="fw-bold">Superficie Cubierta</p>
                                                </div>
                                            </div>

                                            <div className="card me-3 mt-3 br-0" style={{ width: "11rem" }}>
                                                <div className="d-flex my-0 mx-auto">
                                                    <h1 className="text-center fs-2 fw-normal">{propertyData.data.surface_area.land_source}</h1>
                                                    <p className="d-flex align-items-end fw-bold">MTS2</p>
                                                </div>
                                                <div style={{ marginTop: '1px' }} className="card br-0 text-center rounded-0">
                                                    <p className="fw-bold">Superficie Terreno</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card br-0" style={{ width: "6.5rem" }}>
                                                <h1 className="text-center fs-2 fw-normal">{propertyData.data.surface_area.rooms}</h1>

                                                <div className="card br-0 text-center rounded-0">
                                                    <p className="fw-bold">dormitorios</p>
                                                </div>
                                            </div>

                                            <div className="card me-0 br-0 mt-3" style={{ width: "6.5rem" }}>
                                                <h1 className="text-center fs-2 fw-normal">{propertyData.data.surface_area.bathrooms}</h1>

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
                                        <p className="mb-0">{propertyData.data.description}</p>
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
                                                    <p>{propertyData.data.ref_code}</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Precio Expensas</p>
                                                    <p>${propertyData.data.expensas.amount_arg} ARS</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Fecha de Expensas</p>
                                                    <p>{propertyData.data.expensas.referenceDate}</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Superficie Cubierta</p>
                                                    <p>{propertyData.data.surface_area.covered_surface} Mts2</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Superficie Semi Cubierta</p>
                                                    <p>{propertyData.data.surface_area.semicovered_surface} Mts2</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Superficie del terreno</p>
                                                    <p>{propertyData.data.surface_area.land_source}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Zonificación</p>
                                                    <p>{propertyData.data.surface_area.zonification}</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Frente</p>
                                                    <p>{propertyData.data.surface_area.front} Mts</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Fondo</p>
                                                    <p>{propertyData.data.surface_area.depth} Mts</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Orientación</p>
                                                    <p>{propertyData.data.surface_area.orientation}</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Disposición</p>
                                                    <p>{propertyData.data.surface_area.disposition}</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Plantas</p>
                                                    <p>{propertyData.data.surface_area.floors}</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Ambientes</p>
                                                    <p>5</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Estacionamiento Cubierto</p>
                                                    <p>{propertyData.data.surface_area.garage_covered}</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Estacionamiento Semicubierto</p>
                                                    <p>{propertyData.data.surface_area.garage_semicovered}</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Estacionamiento Descubierto</p>
                                                    <p>{propertyData.data.surface_area.garage_uncovered}</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Garaje</p>
                                                    <p>3</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Antigüedad</p>
                                                    <p>{propertyData.data.surface_area.age}</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Sotano</p>
                                                    <p>{propertyData.data.surface_area.basement}</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Baños en Suit</p>
                                                    <p>{propertyData.data.surface_area.en_suite_bathrooms}</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0 fw-bold fs-6">Toilet</p>
                                                    <p>{propertyData.data.surface_area.toilet}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <TabsDetails datos={{ espacios: propertyData.data.surface_area.spaces, servicios: propertyData.data.services, adicionales: propertyData.data.services }} />

                    <div className="container border-section">
                        <PropertieComponent neighborhood={propertyData.data.location.neighborhood} />
                    </div>

                    <div className="container mt-2 border-section mb-5">
                        <div className="row">
                            <div className="col-lg-12 wow fadeInUp" data-wow-delay="100">
                                <div className="text-start">
                                    <h4>¿Que podes encontrar en {propertyData.data.location.locality.title}?</h4>
                                </div>
                                <div className="home10-map">
                                    <MapPropertyDetails location={localities} />
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
                                <Property data={properties.data[0]} />
                            </div>
                            <div className="col-lg-6">
                                <Property data={properties.data[1]} />
                            </div>
                        </div>
                    </div>
                </>
            ) : (<></>)}
            <section className="footer-style1 pt60 pb-0">
                <Footer />
            </section>
        </>
    );
};

export default PropertiesView;