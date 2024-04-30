import React from 'react';
import Image from 'next/image';

const Contact = () => {
    return (
        <div className='container-contact'>
            <div className='container-center'>
                <div className='text-contact'>
                    <h3 className='big-text'>Necesitas contactar con nosotros</h3>
                    <span className='little-text'>Escribinos y nos pondremos en contacto</span>
                </div>
                <button className='btn-wsp'>ESCRIBÍNOS <Image width={20} height={20} src={"/images/image-start/wsp-icon.svg"} alt='wsp icon' /></button>
            </div>
        </div>
    );
}


const MapContact = () => {
    return (
        <div className='container-map'>
            <span className='generic-text'>Podes encontrarnos en:</span>
            <div className='container-inf-location'>
                <span className='inf-location'>25 de Mayo 422, Los Cardales, Partido de Exaltación de la Cruz, Provincia de Buenos Aires</span>
                <a className='link-contact'>Contacto</a>
                <a className='link-google'>Ver en Google</a>
            </div>
            <Image className='image-map' width={1000} height={1000} src={"/images/image-start/image-map.png"} alt='image map' />
        </div>
    );
}

export { Contact, MapContact }