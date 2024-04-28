import Image from 'next/image';
import React from 'react';

export default function Banner() {
    return (
        <div className='container-banner'>
            <div className='inf-banner'>
                <h1>TENEMOS LAS MEJORES PROPIEDADES</h1>
                <span>Busca tú próxima casa aquí</span>
                <Image className='arrow-icon' width={60.28} height={35.97} src={"/images/image-start/banner-icon.png"} alt='icon-arrow' />
            </div>
        </div>
    );
}