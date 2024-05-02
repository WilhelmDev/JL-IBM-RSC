import React from 'react'
import Image from 'next/image'

// Generic amounts
import HeaderV2 from '@/components/common/HeaderV2'
import Property from '@/components/location/property';
import Footer from '@/components/common/generic-footer';
// Generic amounts

// Stylized generic amounts
import Neighborhood2 from '../../../components/pages/start/generic-components/neighborhood2';
import Entrepreneurship2 from '../../../components/pages/start/generic-components/entrepreneurship2';
// Stylized generic amounts

// Own amounts
import Banner from '../../../components/pages/start/start-components/banner';
import { FrameSearch, ActionBTN } from '../../../components/pages/start/start-components/framecomponents';
import { PaginationProperty, ActionProperty, ActionNeighborhood } from '../../../components/pages/start/start-components/genericcomponents';
import InfElement from '../../../components/pages/start/start-components/infelement';
import DigitalMedia from '../../../components/pages/start/start-components/digitalmedia';
import Reviews from '../../../components/pages/start/start-components/reviews';
import { Contact, MapContact } from '../../../components/pages/start/start-components/contactcomponents';
// Own amounts

export const metadata = {
    title: "Start  || Homez - Real Estate NextJS Template",
};

const Start = () => {
    return (
        <main id='tab-start'>
            <HeaderV2 />
            <div id='container-content'>
                <section id='section-banner'>
                    {/* Begin of Component "Banner" */}
                    <Banner />
                    {/* End of Component "Banner" */}
                </section>
                <section id='section-frame'>
                    {/* Begin of Component "FrameSearch" */}
                    <FrameSearch />
                    {/* End of Component "FrameSearch" */}
                    <div className='container-action'>
                        {/* Begin of Component "ActionBTN" */}
                        <ActionBTN
                            url={"/images/image-start/frame-image1.png"}
                            desc={"Información del equipo"}
                            desc_btn={"SOBRE NOSOTROS"}
                        />
                        <ActionBTN
                            url={"/images/image-start/frame-image2.png"}
                            desc={"Mapa Interactivo"}
                            desc_btn={"BÚSCA TU PROPIEDAD"}
                        />
                        <ActionBTN
                            url={"/images/image-start/frame-image3.png"}
                            desc={"Comercios en el mapa"}
                            desc_btn={"COMERCIOS VECINOS"}
                        />
                        {/* End of Component "ActionBTN" */}
                    </div>
                </section>
                <section id='section-generic'>
                    <div className='container-center'>
                        {/* Begin of Component "ActionGeneric" */}
                        <ActionProperty />
                        {/* End of Component "ActionGeneric" */}

                        {/* Generic Component */}
                        <div className='content'>
                            <Property />
                            <Property />
                        </div>
                        {/* Generic Component */}

                        {/* Begin of Component "PaginationProperty" */}
                        <PaginationProperty />
                        {/* End of Component "PaginationProperty" */}
                    </div>
                </section>

                <section className='section-service'>
                    <div className='inf-service'>
                        <div className='container-center'>
                            {/* Begin of Component "InfElement" */}
                            <InfElement
                                title={"Nuestros Servicios"}
                                items={[
                                    {
                                        "title_info": 'Tres tasaciones por propiedad',
                                        "content": [
                                            'Valoración Profesional',
                                            'Análisis de Mercado',
                                            'Asesoramiento en Tasaciones'
                                        ],
                                        "image" : '',
                                        "button": 'TASACIONES'
                                    },
                                    {
                                        "title_info": '¿Que obtienes con el diagnostico?',
                                        "content": [
                                            'Sello de verificación',
                                            'Comprención del estado de tu propiedad',
                                            'Mayor visualización y ofertas'
                                        ],
                                        "image" : '',
                                        "button": 'DIAGNOSTICO DE PROPIEDADES'
                                    },
                                    {
                                        "title_info": '¿Que obtienes con el mantenimiento?',
                                        "content": [
                                            'Preservar el valor y prolongar su vida útil.',
                                            'Minimizar los costos a largo plazo',
                                            'Tipos: Preventivo, Correctivo y Estético.'
                                        ],
                                        "image" : '',
                                        "button": 'DIAGNOSTICO DE PROPIEDADES'
                                    },
                                    {
                                        "title_info": '¿Queres construir tu casa?',
                                        "content": [
                                            'Asesoramiento.',
                                            'Vinculación con Profesionales de la Zona.',
                                            'TPresupuestos personalizados.'
                                        ],
                                        "image" : '',
                                        "button": 'CONSTRUCCIONES'
                                    },
                                ]}
                            />
                            {/* End of Component "InfElement" */}
                        </div>
                    </div>
                    <Image className='img-service' width={960} height={1015} src={"/images/image-start/inf-service-image.png"} alt='img-service' />
                </section>

                <section id='section-media'>
                    {/* Begin of Component "DigitalMedia" */}
                    <DigitalMedia />
                    {/* End of Component "DigitalMedia" */}
                </section>
                <section id='section-generic' className='neighborhood'>
                    <div className='container-center'>
                        {/* Begin of Component "ActionNeighborhood" */}
                        <ActionNeighborhood />
                        {/* End of Component "ActionNeighborhood" */}
                        {/* Generic Component */}
                        <div className='content'>
                            <Neighborhood2 />
                            <Neighborhood2 />
                        </div>
                        {/* Generic Component */}
                        <div className='load-more'>
                            <span>CARGAR MÁS</span>
                        </div>
                    </div>
                </section>
                <section id='section-reviews'>
                    {/* Begin of Component "Reviews" */}
                    <Reviews
                        review={[]}
                    />
                    {/* End of Component "Reviews" */}
                </section>
                <section id='section-generic' className='entrepreneurship'>
                    <div className='container-center'>
                        <div className="action-container">
                            <div className="text-info">
                                <h2>Últimos Emprendimientos</h2>
                                <p>Si quieres invertir en tu casa del futuro aquí encontrarás los emprendimientos que te ofrecemos</p>
                            </div>
                        </div>
                        {/* Generic Component */}
                        <div className='content'>
                            <Entrepreneurship2 />
                            <Entrepreneurship2 />
                        </div>
                        {/* Generic Component */}
                        <div className='load-more'>
                            <span>VER TODOS</span>
                        </div>
                    </div>
                </section>
                <section id='section-contact'>
                    {/* Begin of Component "MapContact" */}
                    <MapContact />
                    {/* End of Component "MapContact" */}

                    {/* Begin of Component "Contact" */}
                    <Contact />
                    {/* End of Component "Contact" */}
                </section>
                <Footer />
            </div>
        </main>
    )
}

export default Start;