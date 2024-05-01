import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderV2 from "@/components/common/HeaderV2";
import Footer from "@/components/common/generic-footer";
import { Contact, MapContact } from "@/components/pages/start/start-components/contactcomponents";
import EmailSend from "@/components/tasaciones/emailsend";
import InfElement from "./infelement";
import AboutVideo from "./video";

import "./main.scss"

export const metadata = {
    title: "About Us  || Homez - Real Estate NextJS Template",
};

export default function AboutUs() {
    return (
        <main id="tab-aboutus">
            <HeaderV2 />
            <div id="container-content">
                <section className="section-banner"></section>
                <section className="section-info">
                    <div className="side-title-left">
                        <h1>¿Quiénes somos?</h1>
                    </div>
                    <div className="side-content-right">
                        <p>Somos un equipo de talentosos profesionales apasionados por brindar un servicio de asesoramiento inmobiliario de alto nivel distinguido en el mercado, ofreciendo un acompañamiento experto reflejado en operaciones exitosas. En JL bienes raíces nos enfocamos en generar relaciones a largo plazo con nuestros clientes, acompañando la constante modernización y la cooperación entre colegas. Nuestra intención es que cada cliente pueda disfrutar de la operación inmobiliaria en cada etapa del proceso. Nuestra corredora y martillera pública Jessica Libert de reconocida trayectoria en la zona de Exaltación de la Cruz y aledaños cuyo profesionalismo es respaldado por ser la tercera generación en esta profesión, cuenta con más de 10 años de experiencia. Continuando con el legado familiar de sus padres sede GALPERIN DE LIBERT sobre el Corredor de Ruta 8 en el kilómetro 72, Jessica Libert y Pablo Martínez fundadores de JL BIENES RAÍCES invierten su experiencia en el rubro para traer una propuesta distinta siendo una referencia de calidad y excelencia en la zona. Nuestra presencia en la zona, los años de trayectoria, y nuestra participación e interacción constante con los vecinos y comercios, nos aportan contactos estratégicos en la región cubriendo todos los aspectos que se relacionan con la adecuada concreción de las operaciones inmobiliarias. Nuestra metodología de trabajo está regida bajo los códigos éticos del ejercicio profesional de los Corredores y Martilleros públicos, como ser la honestidad, respeto, confiabilidad, gentileza, confidencialidad, honradez, entre otros. JL Bienes Raíces es un equipo de talentosos profesionales que quieren lo que hacen</p>
                        <Link className="link" href={""}>Leer más</Link>
                    </div>
                </section>
                <section className="section-video">
                    <AboutVideo src={""}/>
                </section>
                <section className="section-details d-flex align-items-center justify-content-center">
                    <div className="container">
                        <div className="element-detail">
                                <span className="content">5.0</span>
                                <Image width={100} height={50} src={"/images/aboutus/google-review.png"} alt="google-review"/>
                            <span className="title">Referencias</span>
                        </div>
                        <div className="element-detail">
                            <span className="content">{'{Count}'}</span>
                            <span className="title">Propiedades disponibles</span>
                        </div>
                        <div className="element-detail">
                            <span className="content">400</span>
                            <span className="title">Clientes felices</span>
                        </div>
                    </div>
                </section>
                <section className='section-service'>
                    <div className='inf-service'>
                        <div className='container-center'>
                            <h4 className='title-service'>Nuestros Servicios</h4>
                            {/* Begin of Component "InfElement" */}
                            <InfElement
                                list_title={"Tres tasaciones por propiedad"}
                                item1={"Valoración Profesional"}
                                item2={"Análisis de Mercado"}
                                item3={"Asesoramiento en Tasaciones"}
                                desc_btn={"TASACIONES"}
                            />
                            <InfElement
                                list_title={"¿Que obtienes con el diagnostico?"}
                                item1={"Sello de verificación"}
                                item2={"Comprención del estado de tu propiedad"}
                                item3={"Mayor visualización y ofertas"}
                                desc_btn={"DIAGNOSTICO DE PROPIEDADES"}
                            />
                            <InfElement
                                list_title={"¿Que obtienes con el mantenimiento?"}
                                item1={"Preservar el valor y prolongar su vida útil. "}
                                item2={"Minimizar los costos a largo plazo."}
                                item3={"Tipos: Preventivo, Correctivo y Estético."}
                                desc_btn={"MANTENIMIENTO"}
                            />
                            <InfElement
                                list_title={"¿Queres construir tu casa?"}
                                item1={"Asesoramiento. "}
                                item2={"Vinculación con Profesionales de la Zona. "}
                                item3={"Presupuestos personalizados."}
                                desc_btn={"CONSTRUCCIONES"}
                            />
                            {/* End of Component "InfElement" */}
                        </div>
                    </div>
                    <Image className='img-service' width={960} height={1015} src={"/images/image-start/inf-service-image.png"} alt='img-service' />
                </section>
            </div>
            <Footer />
        </main>
    )
}