import React from "react";

const EmailSend = () =>{
    return (
        <section className="email-send d-flex justify-content-center">
            <div className="container-email d-flex">
                <div className="info-send" data-aos="fade-right">
                    <h1>Enterate de todo</h1>
                    <p>Recibí más información de la zona, las ultimas novedades del rubro y las nuevas propiedades disponibles</p>
                </div>
                <div className="input-email" data-aos="fade-left">
                    <label>
                        <input placeholder="Email"></input>
                    </label>
                    <button>ENVIAR</button>
                </div>
            </div>
            <div className="rotate-element"></div>
        </section>
    );
}

export default EmailSend;