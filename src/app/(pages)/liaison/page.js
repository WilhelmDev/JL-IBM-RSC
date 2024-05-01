import React from "react";
import Image from "next/image";
import HeaderV2 from "@/components/common/HeaderV2";
import Footer from "@/components/common/generic-footer";
import { MapContact, Contact } from "@/components/pages/start/start-components/contactcomponents";
import EmailSend from "@/components/tasaciones/emailsend";

export const metadata = {
    title: "Contact  || Homez - Real Estate NextJS Template",
};

export default function Liaison(){
    return(
        <main id="tab-liaison">
            <HeaderV2/>
            <div id="container-content">
                <section className="section-questions">
                    <div className="container-questions">
                        <h1 data-aos="fade-down">Contacto</h1>
                        <div className="container-form" data-aos="fade-down">
                            <div className="container-form-left">
                                <span>Tienes preguntas ? Ponte en contacto !</span>
                                <form>
                                    <input type="text" name="name" placeholder="Nombre"/>
                                    <input type="text" name="phone" placeholder="Teléfono"/>
                                    <input type="text" name="email" placeholder="Email"/>
                                    <textarea placeholder="Escribe aquí tu consulta"></textarea>
                                    <input type="button" name="send" value="ENVIAR"/>
                                </form>
                                <span>También puedes encontrarnos en nuestras redes</span>
                                <div className="image-media">
                                    <Image width={20} height={20} src={"/images/liaison/icon-form/facebook.svg"} alt="facebook icon"/>
                                    <Image width={20} height={20} src={"/images/liaison/icon-form/instagram.svg"} alt="instagram icon"/>
                                    <Image width={20} height={20} src={"/images/liaison/icon-form/youtube.svg"} alt="youtube icon"/>
                                    <Image width={20} height={20} src={"/images/liaison/icon-form/soptify.svg"} alt="spotify icon"/>
                                </div>
                            </div>
                            <Image className="image-side-right" width={1200} height={1200} src={"/images/liaison/image-side-form.png"} alt={"image side right"}/>
                        </div>
                    </div>
                </section>
                <section className="section-email">
                    <EmailSend/>
                </section>
                <section className="section-schedule">
                    <div className="container-schedule">
                        <span data-aos="fade-down">Visita nuestra oficina</span>
                        <p data-aos="fade-down">Puedes hacerlo durante la semana desde las 8AM a 12AM y desde las 15PM a 19PM</p>
                    </div>
                </section>
                <section className="section-contact" data-aos="fade-down">
                    <MapContact/>
                    <Contact/>
                </section>
            </div>
            <Footer/>
        </main>
    )
}