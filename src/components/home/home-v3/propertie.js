import Image from "next/image";

const PropertieComponent = ({ neighborhood }) => {
    /*${neighborhood.media.images.find(({front_page}) => front_page === 1).url}*/
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay="100">
                        <div className="text-start">
                            <h4>Esta propiedad pertenece al barrio [{neighborhood.title}]</h4>
                        </div>
                        <div style={{ backgroundImage: `url(/images/home-v3/district.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: '700px', margin: '0px auto' }}></div>
                    </div>
                    <div className="col-lg-12 mt-5 wow fadeInUp" data-wow-delay="100">
                        <div className="text-start">
                            <p className="mb-0">{neighborhood.description}</p>
                            {/*<a href="#" className="fw-bold">Leer mas</a>*/}
                        </div>
                    </div>

                    <div className="col-lg-12 mt-3 mb-4 wow fadeInUp" data-wow-delay="100">
                        <div className="container">
                            <p className="fw-bold mb-2">Amenidades de [{neighborhood.title}]</p>
                            <div className="row ms-1">
                                {
                                    neighborhood.details.amenidades.map((amenidad, index) => {
                                        return (
                                            <div key={index} className="col-lg-4">
                                                <p className="mb-0">{amenidad.name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/*<a href="#" className="fw-bold mb-5">Ver Propiedades del barrio</a>*/}
                </div>
            </div>
        </>
    );
};

export default PropertieComponent;
