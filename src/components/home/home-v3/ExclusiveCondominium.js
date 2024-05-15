"use client"
import Property from "@/components/location/property";
import { useState } from "react"

const ImageCondominium = ({ entrepreneurship }) => {
    const [items, setItems] = useState([])
    return (
        <>
            <div className="container">
                <div style={{ backgroundImage: 'url(/images/home-v3/condominium.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', width: '79%', height: '700px', margin: '0px auto' }}></div>
                <div className="row">
                    <div className="col-lg-12 mt-3 wow fadeInUp" data-wow-delay="100">
                        <div className="container">
                            <div class="btn-group mb-2" role="group" aria-label="Basic checkbox toggle button group">
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" onClick={() => {
                                    setItems(entrepreneurship.details.amenidades.map((anemidad) => anemidad.name))
                                }} />
                                <label class="btn btn-outline-primary" for="btnradio1">Amenidades</label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" onClick={() => {
                                    setItems(entrepreneurship.services.map((service) => service.name))
                                }} />
                                <label class="btn btn-outline-primary" for="btnradio2">Servicios</label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" onClick={() => {
                                    setItems([])
                                }} />
                                <label class="btn btn-outline-primary" for="btnradio3">Adicionales</label>
                            </div>
                            <div className="row ms-3">
                                {items.map((item, index) => {
                                    return (
                                        <div key={index} className="col-lg-3">
                                            <p className="mb-0">{item}</p>
                                        </div>
                                    )
                                })}
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
                                    <p className="me-3"><b>Tamaño:</b> {entrepreneurship.offers[0].covered_sourface} mts2</p>
                                    <p className="me-3"><b>Habitaciones</b> {entrepreneurship.offers[0].rooms_amount}</p>
                                    <p className="me-3"><b>Baños</b> {entrepreneurship.offers[0].bathrooms_amount}</p>
                                    <p className="me-3"><b>Precio</b> ${entrepreneurship.offers[0].min_max_price.max.amount}</p>
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
                                {entrepreneurship.offers.map((offer, index) => {
                                    const {type, description, units_amount, rooms_amount, bathrooms_amount, total_sourface, covered_sourface, semicovered_sourface, images, min_max_price, ...payments} = offer
                                    return (
                                        <div key={index} className="col-lg-3">
                                            <img src="/images/home-v3/room.png" width={170} height={100} />
                                            <p className="fw-bold mb-0">{type}</p>
                                            <p className="mb-0">{min_max_price.max.amount} USD</p>
                                            <p>{description}</p>
                                            {Object.keys(payments).map((payment, paymentIndex) => (
                                              <p key={paymentIndex} style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">{payment}</p>
                                            ))}
                                            <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Superficie Total: {total_sourface}</p>
                                            <p style={{ borderBottom: '1px solid #000', width: '140px' }} className="mb-0">Superficie Cubierta: {covered_sourface}</p>
                                        </div>
                                    )
                                })
                                }
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
