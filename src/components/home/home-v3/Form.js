import Image from "next/image";

const FormView = () => {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="100">
                    <div className="card mb-4 p-3">
                        <div className="text-start">
                            <p className="fw-bold">Más Información</p>
                            <div className="row">
                                <div className="col-3">

                                    <Image src='/images/home-v3/person.png' alt="" width={100} height={100} />
                                </div>
                                <div className="col-9">
                                    <p className="fw-bold">Agente 1</p>
                                    <p><i className="fa-regular fa-phone"></i> (920) 012-3421</p>
                                    <p className="fw-bold">Ver Casas Listadas</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 d-grid justify-content-center">
                            <button style={{ color: '#000', borderRadius: '0px', border: '1px solid #000' }} className="btn w-50 bg-white fw-bold w-100 me-2">CONTACTAR AGENTE</button>
                        </div>
                    </div>

                    <div className="card p-4">
                        <p className="fw-bold">Más Información</p>
                        <p style={{ fontSize: '19px', lineHeight: '44px' }}>Hola, aquí pondremos información a cerca de los horarios de visita posible que ofrece JL ademas de las posibles ofertas qeu están dispuestos a recibir por permuta de una propiedad. </p>
                    </div>
                </div>

                <div className="col-lg-6 wow fadeInUp" data-wow-delay="100">
                    <div className="text-start">
                        <button style={{ borderRadius: "0px", color: 'white' }} className="btn btn-primary mb-3 fw-bold">Solicitar una visita</button>
                        <button style={{ borderRadius: "0px" }} className="btn btn-primary mb-3 fw-bold bg-white">Ofrecer permuta</button>

                        <p>Elejí tu dia preferido</p>
                        <button style={{ border: '1px solid #000', borderRadius: '0px' }} className="btn mb-3 fw-bold bg-white me-2">Llamada</button>
                        <button style={{ border: '1px solid #DDDDDD', borderRadius: '0px' }} className="btn mb-3 fw-bold bg-white me-2">En persona</button>

                        <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Día y hora preferido" />
                        <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Nombre" />
                        <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Teléfono" />
                        <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Email" />
                        <textarea className="form-control mb-3" placeholder="Escríbenos" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button style={{ color: 'white', borderRadius: '0px' }} className="btn fw-bold btn-primary w-25 me-2">Enviar Solicitud</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormView;
