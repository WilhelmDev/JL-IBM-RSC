import Property from "@/components/location/property";

const ImageCondominium = () => {
    return (
        <>
            <div className="container">
                <div style={{ backgroundImage: 'url(/images/home-v3/condominium.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', width: '79%', height: '700px', margin: '0px auto' }}></div>
                <div className="row">
                    <div className="col-lg-12 mt-3 wow fadeInUp" data-wow-delay="100">
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
                </div>

                <div class="accordion mt-5 mb-5" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <p>Departamento</p>
                                <div className="d-flex justify-content-end w-100">
                                    <p className="me-3"><b>Tamaño:</b>1267 mts2</p>
                                    <p className="me-3"><b>Habitaciones</b> 2</p>
                                    <p className="me-3"><b>Baños</b> 2</p>
                                    <p className="me-3"><b>Precio</b> $920,99</p>
                                </div>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div style={{ backgroundImage: 'url(/images/home-v3/room.png)', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', width: '100%', height: '700px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-lg-12 mt-2 wow fadeInUp" data-wow-delay="100">
                        <div className="container">
                            <h4 className="text-center mb-4">
                                Oferta
                            </h4>
                            <div className="row d-flex justify-content-center ms-3">
                                <div className="col-lg-3">
                                    <img src="/images/home-v3/room.png" width={170} height={100} />
                                    <p className="fw-bold mb-0">Tipo de unidad 1</p>
                                    <p className="mb-0">120.000 USD</p>
                                    <p>Descripción</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 1</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 2</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 3</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 4</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 5</p>
                                </div>
                                <div className="col-lg-3">
                                    <img src="/images/home-v3/room.png" width={170} height={100} />
                                    <p className="fw-bold mb-0">Tipo de unidad 1</p>
                                    <p className="mb-0">120.000 USD</p>
                                    <p>Descripción</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 1</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 2</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 3</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 4</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 5</p>
                                </div>
                                <div className="col-lg-3">
                                    <img src="/images/home-v3/room.png" width={170} height={100} />
                                    <p className="fw-bold mb-0">Tipo de unidad 1</p>
                                    <p className="mb-0">120.000 USD</p>
                                    <p>Descripción</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 1</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 2</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 3</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 4</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 5</p>
                                </div>
                                <div className="col-lg-3">
                                    <img src="/images/home-v3/room.png" width={170} height={100} />
                                    <p className="fw-bold mb-0">Tipo de unidad 1</p>
                                    <p className="mb-0">120.000 USD</p>
                                    <p>Descripción</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 1</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 2</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 3</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 4</p>
                                    <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Forma de pago 5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 mt-5 wow fadeInUp" data-wow-delay="100">
                    <div className="main-title text-center">
                        <button className="btn btn-primary fw-bold bg-white w-25">SOLICITAR UNA VISITA</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ImageCondominium;
