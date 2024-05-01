import React from "react";
import Link from "next/link";
import HeaderV2 from "@/components/common/HeaderV2";
import Footer from "@/components/common/generic-footer";
import { Contact, MapContact } from "@/components/pages/start/start-components/contactcomponents";
import EmailSend from "@/components/tasaciones/emailsend";
import AboutVideo from "./video";

import "./aboutus.scss"

export const metadata = {
    title: "About Us  || Homez - Real Estate NextJS Template",
};

export default function AboutUs() {
    return (
        <main id="tab-aboutus">
            <HeaderV2 />
            <div id="container-content">
                <section id="section-banner"></section>
                <section id="section-info">
                    <div className="side-title-left">
                        <h1>¿Quiénes somos?</h1>
                    </div>
                    <div className="side-content-right">
                        <p>Somos un equipo de talentosos profesionales apasionados por brindar un servicio de asesoramiento inmobiliario de alto nivel distinguido en el mercado, ofreciendo un acompañamiento experto reflejado en operaciones exitosas. En JL bienes raíces nos enfocamos en generar relaciones a largo plazo con nuestros clientes, acompañando la constante modernización y la cooperación entre colegas. Nuestra intención es que cada cliente pueda disfrutar de la operación inmobiliaria en cada etapa del proceso. Nuestra corredora y martillera pública Jessica Libert de reconocida trayectoria en la zona de Exaltación de la Cruz y aledaños cuyo profesionalismo es respaldado por ser la tercera generación en esta profesión, cuenta con más de 10 años de experiencia. Continuando con el legado familiar de sus padres sede GALPERIN DE LIBERT sobre el Corredor de Ruta 8 en el kilómetro 72, Jessica Libert y Pablo Martínez fundadores de JL BIENES RAÍCES invierten su experiencia en el rubro para traer una propuesta distinta siendo una referencia de calidad y excelencia en la zona. Nuestra presencia en la zona, los años de trayectoria, y nuestra participación e interacción constante con los vecinos y comercios, nos aportan contactos estratégicos en la región cubriendo todos los aspectos que se relacionan con la adecuada concreción de las operaciones inmobiliarias. Nuestra metodología de trabajo está regida bajo los códigos éticos del ejercicio profesional de los Corredores y Martilleros públicos, como ser la honestidad, respeto, confiabilidad, gentileza, confidencialidad, honradez, entre otros. JL Bienes Raíces es un equipo de talentosos profesionales que quieren lo que hacen</p>
                        <Link className="link" href={"#"}>Leer más</Link>
                    </div>
                </section>
                <section id="section-video">
                    <AboutVideo src={""}/>
                </section>
            </div>
            <Footer />
        </main>
    )
}