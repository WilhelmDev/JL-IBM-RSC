import React from 'react'
import Image from 'next/image'
import HeaderV2 from '@/components/common/HeaderV2'
import Property from '@/components/location/property';
import Neighborhood from '@/components/location/neighborhood';
import Entrepreneurship from '@/components/location/entrepreneurship';
import Footer from '@/components/common/generic-footer';
import "./start.css"

export const metadata = {
    title: "Start  || Homez - Real Estate NextJS Template",
  };

const Start = () => {
    return(
        <main id='tab-start'>
            <HeaderV2/>
            <div id='container-content'>
                <section id='section-banner'>
                    {/* Begin of Component "Banner" */}
                    <div className='container-banner'>
                        <div className='inf-banner'>
                            <h1>TENEMOS LAS MEJORES PROPIEDADES</h1>
                            <span>Busca tú próxima casa aquí</span>
                            <Image className='arrow-icon' width={60.28} height={35.97} src={"/images/image-start/banner-icon.png"} alt='icon-arrow'/>
                        </div>
                    </div>
                    {/* End of Component "Banner" */}
                </section>
                <section id='section-frame'>
                    {/* Begin of Component "FrameSearch" */}
                    <div className='frame-search'>
                        <ul className='pagination-search'>
                            <li className='active'>Comprar</li>
                            <li className=''>Alquilar</li>
                            <li className=''>Alquiler temporal</li>
                            <li className=''>Todas</li>
                        </ul>
                        <div className='fetchPLN'>
                            <input className='input-PLN' placeholder=' 🏠 Ingrese Partido, Localidad o Barrio donde desea buscar.'></input>
                            <div className='action-fetch'>
                                <span><Image width={13} height={13} src={'/images/image-start/icon-fetch.png'} alt='icon fetch'/> Avanzado</span>
                                <button><Image width={20} height={20} src={'/images/image-start/icon-button-search.svg'} alt={'svg-serch-icon'}/></button>
                            </div>
                        </div>
                    </div>
                    {/* End of Component "FrameSearch" */}

                    <div className='container-action'>
                        {/* Begin of Component "ActionBTN" */}
                        <div className='component-action'>
                            <Image className='image-action' width={230} height={230} src={"/images/image-start/info-team-icon.png"} alt='image-frame'/>
                            <span>Descripcion componente</span>
                            <button>SOBRE NOSOTROS</button>
                        </div>
                        {/* End of Component "ActionBTN" */}
                    </div>
                </section>
                <section id='section-property'>
                    {/* Generic Component */}
                    <div className='content'>
                        <Property/>
                        <Property/>
                    </div>
                    {/* Generic Component */}
                </section>
                <section id='section-service'>
                    {/* Begin of Component "InfService" */}
                    <div className='inf-service'>
                        <span className='title-service'>Nuestros Servicios</span>
                        {/* Begin of Component "InfElement" */}
                        <div className='container-info'>
                            <span className='title-info'>Texto generico</span>
                            <ul className='container info'>
                                <li className=''>Texto generico pero en lista</li>
                                <li className=''>Texto generico pero en lista</li>
                                <li className=''>Texto generico pero en lista</li>
                            </ul>
                            <button className='btn-action'>Click me</button>
                        </div>
                        {/* End of Component "InfElement" */}
                        <Image className='img-service' width={100} height={100} src={""} alt='img-service'/>
                    </div>
                    {/* End of Component "InfService" */}
                </section>
                <section id='section-media'>
                    {/* Begin of Component "DigitalMedia" */}
                    <div className='container-media'>
                        <span className='generic-text'>Trabajamos tu propiedad compartiéndola en multiples canales dígitales</span>
                        <div className='media-channel'>
                            <Image width={300} height={300} src={""} alt={"digital channel image"}/>
                            <Image width={300} height={300} src={""} alt={"digital channel image"}/>
                            <Image width={300} height={300} src={""} alt={"digital channel image"}/>
                            <Image width={300} height={300} src={""} alt={"digital channel image"}/>
                            <Image width={300} height={300} src={""} alt={"digital channel image"}/>
                            <Image width={300} height={300} src={""} alt={"digital channel image"}/>
                            <Image width={300} height={300} src={""} alt={"digital channel image"}/>
                        </div>
                    </div>
                    {/* End of Component "DigitalMedia" */}
                </section>
                <section id='section-neighborhood'>
                    {/* Generic Component */}
                    <div className='content'>
                        <Neighborhood/>
                        <Neighborhood/>
                    </div>
                    {/* Generic Component */}
                </section>
                <section id='section-reviews'>
                    {/* Begin of Component "Reviews" */}
                    <div className='container-reviews'>
                        <div className='header-reviews'>
                            <div className='container-text'>
                                <span className='big-text'>Las personas hablan por nosotros</span>
                                <span className='little-text'>Estos son clientes más felices</span>
                            </div>
                            {/* Begin of Component "ControlReviews" */}
                            <div className='control-reviews'>
                                <div className='control'>
                                    <button className='control-arrow'>▶</button>
                                    <div className='container-page'>
                                        <div className='circle-page'>⚪</div>
                                        <div className='circle-page'>⚫</div>
                                    </div>
                                    <button className='control-arrow'>◀</button>
                                </div>
                                <span className='text-control'>VER EN GOOGLE</span>
                            </div>
                            {/* End of Component "ControlReviews" */}
                        </div>
                        {/* Begin of Component "ElementReview" */}
                        <div className='review'>
                            <span className='title-review'>Great Work</span>
                            <p className='text-review'>Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.</p>
                            <ul className='stars-container'>
                                <li className='star'>⭐</li>
                                <li className='star'>⭐</li>
                                <li className='star'>⭐</li>
                                <li className='star'>⭐</li>
                                <li className='star'>⭐</li>
                            </ul>
                            <div className='user-review'>
                                <Image className='user-image' width={30} height={30} src={""} alt={"user image"}/>
                                <div className='info-user'>
                                    <span className='name-user'>Nombre de usuario</span>
                                    <span className='user-job'>Trabajo de usuario</span>
                                </div>
                            </div>
                        </div>
                        {/* End of Component "ElementReview" */}
                    </div>
                    {/* End of Component "Reviews" */}
                </section>
                <section id='section-entrepreneurship'>
                    {/* Generic Component */}
                    <div className='content'>
                        <Entrepreneurship/>
                        <Entrepreneurship/>
                    </div>
                    {/* Generic Component */}
                </section>
                <section id='section-contact'>
                    {/* Begin of Component "MapContact" */}
                    <div className='container-map'>
                        <span className='generic-text'>Podes encontrarnos en:</span>
                        <div className='container-inf-location'>
                            <span className='inf-location'>25 de Mayo 422, Los Cardales, Partido de Exaltación de la Cruz, Provincia de Buenos Aires</span>
                            <a className='link-contact'>Contacto</a>
                            <a className='link-google'>Ver en Google</a>
                        </div>
                        <div className='map-location'>
                            {/* Hi, I'm a Map Component! (Generic Component) */}
                        </div>
                    </div>
                    {/* End of Component "MapContact" */}

                    {/* Begin of Component "Contact" */}
                    <div className='container-contact'>
                        <div className='container-center'>
                            <div className='text-contact'>
                                <span className='big-text'>Necesitas contactar con nosotros</span>
                                <span className='little-text'>Escribinos y nos pondremos en contacto</span>
                            </div>
                            <button className='btn-wsp'>Escribenos 💁‍♀️</button>
                        </div>
                    </div>
                    {/* End of Component "Contact" */}
                </section>
            <Footer/>
            </div>
        </main>
    )
}

export default Start;