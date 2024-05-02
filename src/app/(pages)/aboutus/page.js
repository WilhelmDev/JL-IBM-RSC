import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderV2 from "@/components/common/HeaderV2";
import Footer from "@/components/common/generic-footer";
import { Contact, MapContact } from "@/components/pages/start/start-components/contactcomponents";
import EmailSend from "@/components/tasaciones/emailsend";
import InfElement from "@/components/pages/start/start-components/infelement";
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
                    <div className='inf-service d-flex flex-column'>
                        <div className='container-center'>
                            <h4 className='title-service'>Nuestros Servicios</h4>
                            {/* Begin of Component "InfElement" */}
                            <InfElement
                                items={[
                                    {
                                        "title_info": 'Sistema propio de trabajo:',
                                        "content": [
                                            'Nuestro propio sistema de trabajo cuenta con un orden para la venta y para la compra de cada propiedad con resultados exitosos.',
                                            'Trabajamos con nuestros clientes como socios estratégicos de su propiedad, los clientes nos confían la mercadería y nosotros la comercializamos.',
                                            'Con ese compromiso, nos comunicamos mensualmente compartiéndo el informes de estadísticas que nos aporta muestro departamento de marketing para que juntos podamos tomar acciones que nos acerquen al objetivo de venta.',
                                            'Contamos además con un apoyo constante de Coaching y formación continua, para asegurar la excelencia en la atención de todos y cada uno de nuestros clientes.'
                                        ],
                                        "button": ''
                                    },
                                    {
                                        "title_info" : 'Invertimos en tu propiedad:',
                                        "content" : [
                                            'Servicio de fotografía profesional con la que producimos material audiovisual con cámaras de última tecnología y drones.',
                                            'Tenemos un equipo de diseño gráfico y community manager dedicado a generar contenidos diferentes e innovadores.',
                                            'Publicamos tu propiedad en los portales inmobiliarios más referentes del mercado contratando los estándares más altos de publicación para multiplicar la exposición.'
                                        ],
                                        "button": ''
                                    },
                                    {
                                        "title_info" : 'Apoyo legal:',
                                        "content" : [
                                            'Revisión y confección de documentos y/o contratos.',
                                            'Información sobre regulaciones y requisitos legales para la compra y alquiler.',
                                            'Asesoramiento en términos legales y tributarios relacionados con la adquisición'
                                        ],
                                        "button": 'NUESTROS SERVICIOS'
                                    }
                                ]}
                            />
                            {/* End of Component "InfElement" */}
                        </div>
                    </div>
                    <Image className='img-service' width={960} height={1015} src={"/images/aboutus/side-image.png"} alt='img-service' />
                </section>
            </div>
            <Footer />
        </main>
    )
}