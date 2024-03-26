import Image from "next/image";

const PropertieComponent = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay="100">
                        <div className="text-start">
                            <h4>Esta propiedad pertenece al barrio [Nombre del barrio]</h4>
                        </div>
                        <div style={{ backgroundImage: 'url(/images/home-v3/district.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: '700px', margin: '0px auto' }}></div>
                    </div>
                    <div className="col-lg-12 mt-5 wow fadeInUp" data-wow-delay="100">
                        <div className="text-start">
                            <p className="mb-0">Descripción del emprendimiento.</p>
                            <a href="#" className="fw-bold">Leer mas</a>
                        </div>
                    </div>

                    <div className="col-lg-12 mt-3 mb-4 wow fadeInUp" data-wow-delay="100">
                        <div className="container">
                            <p className="fw-bold mb-2">Amenidades de [Nombre del barrio]</p>
                            <div className="row ms-1">
                                <div className="col-lg-4">
                                    <p className="mb-0">Calle</p>
                                    <p className="mb-0">Seguridad 24 Hrs</p>
                                    <p className="mb-0">Pileta</p>
                                    <p className="mb-0">Multiespacio</p>
                                </div>
                                <div className="col-lg-4">
                                    <p className="mb-0">Restaurant</p>
                                    <p className="mb-0">Sala de cine</p>
                                    <p className="mb-0">Alambre perimetral</p>
                                    <p className="mb-0">Mantenimiento de jardines</p>
                                </div>
                                <div className="col-lg-4">
                                    <p className="mb-0">Limpieza de calles</p>
                                    <p className="mb-0">Recolección de basura</p>
                                    <p className="mb-0">Atención Medica</p>
                                    <p className="mb-0">Wi Fi publico</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="fw-bold mb-5">Ver Propiedades del barrio</a>
                </div>
            </div>
        </>
    );
};

export default PropertieComponent;
