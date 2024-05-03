import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderV2 from "@/components/common/HeaderV2";
import Footer from "@/components/common/generic-footer";
import { Contact, MapContact } from "@/components/pages/start/start-components/contactcomponents";
import EmailSend from "@/components/tasaciones/emailsend";
import InfElement from "@/components/pages/start/start-components/infelement";
import AboutVideo from "./video";
import Partner from "@/components/common/Partner";


import "./main.scss"

export const metadata = {
    title: "About Us  || Homez - Real Estate NextJS Template",
};


function AboutUsInf(props) {
    return (
        <>
            <div className="side-title-left">
                <h1>{props.title}</h1>
            </div>
            <div className="side-content-right">
                <p>{props.content}</p>
                <Link className="link" href={""}>Leer más</Link>
            </div>
        </>
    );
}



function AboutUsDetails(props) {
    return (
        <div className="container">
            <div className="element-detail">
                <span className="content">{props.google_points}</span>
                <Image width={100} height={50} src={"/images/aboutus/google-review.png"} alt="google-review" />
                <span className="title">Referencias</span>
            </div>
            <div className="element-detail">
                <span className="content">{props.propertys}</span>
                <span className="title">Propiedades disponibles</span>
            </div>
            <div className="element-detail">
                <span className="content">{props.happy_clients}</span>
                <span className="title">Clientes felices</span>
            </div>
        </div>
    );
}


export default function AboutUs() {
    return (
        <main id="tab-aboutus">
            <HeaderV2 />
            <div id="container-content">
                <section className="section-banner"></section>
                <section className="section-info">
                    <AboutUsInf
                        title={"¿Quiénes somos?"}
                        content={"Somos un equipo de talentosos profesionales apasionados por brindar un servicio de asesoramiento inmobiliario de alto nivel distinguido en el mercado, ofreciendo un acompañamiento experto reflejado en operaciones exitosas. En JL bienes raíces nos enfocamos en generar relaciones a largo plazo con nuestros clientes, acompañando la constante modernización y la cooperación entre colegas. Nuestra intención es que cada cliente pueda disfrutar de la operación inmobiliaria en cada etapa del proceso. Nuestra corredora y martillera pública Jessica Libert de reconocida trayectoria en la zona de Exaltación de la Cruz y aledaños cuyo profesionalismo es respaldado por ser la tercera generación en esta profesión, cuenta con más de 10 años de experiencia. Continuando con el legado familiar de sus padres sede GALPERIN DE LIBERT sobre el Corredor de Ruta 8 en el kilómetro 72, Jessica Libert y Pablo Martínez fundadores de JL BIENES RAÍCES invierten su experiencia en el rubro para traer una propuesta distinta siendo una referencia de calidad y excelencia en la zona. Nuestra presencia en la zona, los años de trayectoria, y nuestra participación e interacción constante con los vecinos y comercios, nos aportan contactos estratégicos en la región cubriendo todos los aspectos que se relacionan con la adecuada concreción de las operaciones inmobiliarias. Nuestra metodología de trabajo está regida bajo los códigos éticos del ejercicio profesional de los Corredores y Martilleros públicos, como ser la honestidad, respeto, confiabilidad, gentileza, confidencialidad, honradez, entre otros. JL Bienes Raíces es un equipo de talentosos profesionales que quieren lo que hacen"}
                    />
                </section>
                <section className="section-video">
                    <AboutVideo src={""} />
                </section>
                <section className="section-details d-flex align-items-center justify-content-center">
                    <AboutUsDetails
                        google_points={"5.0"}
                        propertys={'{Count}'}
                        happy_clients={"400"}
                    />
                </section>
                <section className="main-section-service">
                    <div className='section-service'>
                        <div className='inf-service d-flex flex-column'>
                            <div className='container-center'>
                                {/* Begin of Component "InfElement" */}
                                <InfElement
                                    title={"¿Cómo Garantiamos Una Buena Atención?"}
                                    items={[
                                        {
                                            "title_info": 'Sistema propio de trabajo:',
                                            "content": [
                                                'Nuestro propio sistema de trabajo cuenta con un orden para la venta y para la compra de cada propiedad con resultados exitosos.',
                                                'Trabajamos con nuestros clientes como socios estratégicos de su propiedad, los clientes nos confían la mercadería y nosotros la comercializamos.',
                                                'Con ese compromiso, nos comunicamos mensualmente compartiéndo el informes de estadísticas que nos aporta muestro departamento de marketing para que juntos podamos tomar acciones que nos acerquen al objetivo de venta.',
                                                'Contamos además con un apoyo constante de Coaching y formación continua, para asegurar la excelencia en la atención de todos y cada uno de nuestros clientes.'
                                            ],
                                            "image": '/images/aboutus/icon-service1.svg',
                                            "button": ''
                                        },
                                        {
                                            "title_info": 'Invertimos en tu propiedad:',
                                            "content": [
                                                'Servicio de fotografía profesional con la que producimos material audiovisual con cámaras de última tecnología y drones.',
                                                'Tenemos un equipo de diseño gráfico y community manager dedicado a generar contenidos diferentes e innovadores.',
                                                'Publicamos tu propiedad en los portales inmobiliarios más referentes del mercado contratando los estándares más altos de publicación para multiplicar la exposición.'
                                            ],
                                            "image": '/images/aboutus/icon-service2.svg',
                                            "button": ''
                                        },
                                        {
                                            "title_info": 'Apoyo legal:',
                                            "content": [
                                                'Revisión y confección de documentos y/o contratos.',
                                                'Información sobre regulaciones y requisitos legales para la compra y alquiler.',
                                                'Asesoramiento en términos legales y tributarios relacionados con la adquisición'
                                            ],
                                            "image": '/images/aboutus/icon-service3.svg',
                                            "button": 'NUESTROS SERVICIOS'
                                        }
                                    ]}
                                />
                                {/* End of Component "InfElement" */}
                            </div>
                        </div>
                        <Image className='img-service' width={1013} height={1653} src={"/images/aboutus/side-image.png"} alt='img-service' />
                    </div>
                </section>
                <section className="our-partners">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" data-aos="fade-up">
                                <div className="main-title text-center">
                                    <h5>Trabajamos tu propiedad compartiéndola en multiples canales digitales</h5>
                                </div>
                            </div>
                            <div className="col-lg-12 text-center">
                                <div
                                    className="dots_none nav_none"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <Partner />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="death-section">

                </section>
                <section className="section-email">
                    <EmailSend/>
                </section>
            </div>
            <Footer />
        </main>
    )
}