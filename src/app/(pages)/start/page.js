import React from 'react'
import Image from 'next/image'

import HeaderV2 from '@/components/common/HeaderV2'
import Property from '@/components/location/property';
import Neighborhood from '../../../components/pages/start/generic-components/neighborhood2';
import Entrepreneurship from '../../../components/pages/start/generic-components/entrepreneurship2';
import Footer from '@/components/common/generic-footer';

import Banner from '../../../components/pages/start/start-components/banner';
import { FrameSearch, ActionBTN } from '../../../components/pages/start/start-components/framecomponents';
import { PaginationProperty, ActionProperty, ActionNeighborhood } from '../../../components/pages/start/start-components/genericcomponents';
import InfElement from '../../../components/pages/start/start-components/infelement';
import DigitalMedia from '../../../components/pages/start/start-components/digitalmedia';
import Reviews from '../../../components/pages/start/start-components/reviews';
import { Contact, MapContact } from '../../../components/pages/start/start-components/contactcomponents';

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
                        <ActionBTN />
                        <ActionBTN />
                        <ActionBTN />
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

                <section id='section-service'>
                    <div className='inf-service'>
                        <div className='container-center'>
                            <h4 className='title-service'>Nuestros Servicios</h4>
                            {/* Begin of Component "InfElement" */}
                            <InfElement />
                            <InfElement />
                            <InfElement />
                            <InfElement />
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
                            <Neighborhood />
                            <Neighborhood />
                        </div>
                        {/* Generic Component */}
                        <div className='load-more'>
                            <span>CARGAR MÁS</span>
                        </div>
                    </div>
                </section>
                <section id='section-reviews'>
                    {/* Begin of Component "Reviews" */}
                    <Reviews />
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
                            <Entrepreneurship />
                            <Entrepreneurship />
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