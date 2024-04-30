import Image from 'next/image';
import React from 'react';

export default function DigitalMedia() {
    return (
        <div className='container-media'>
            <span>Trabajamos tu propiedad compartiéndola en multiples canales dígitales</span>
            <div className='media-channel'>
                <Image width={130} height={60} src={"/images/image-start/facebook-logo.svg"} alt={"digital channel image"} />
                <Image width={130} height={60} src={"/images/image-start/LG-logo.svg"} alt={"digital channel image"} />
                <Image width={130} height={60} src={"/images/image-start/argenprop-logo.svg"} alt={"digital channel image"} />
                <Image width={130} height={60} src={"/images/image-start/mercadolibre-logo.svg"} alt={"digital channel image"} />
                <Image width={130} height={60} src={"/images/image-start/instagram-logo.svg"} alt={"digital channel image"} />
                <Image width={130} height={60} src={"/images/image-start/zonaprop-logo.svg"} alt={"digital channel image"} />
                <Image width={130} height={60} src={"/images/image-start/youtube-logo.svg"} alt={"digital channel image"} />
            </div>
        </div>
    );
}