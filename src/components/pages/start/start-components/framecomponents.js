import Image from 'next/image';
import React from 'react';

const FrameSearch = () => {
    return (
        <div className='frame-search'>
            <ul className='pagination-search'>
                <li className='active'>Comprar</li>
                <li className=''>Alquilar</li>
                <li className=''>Alquiler temporal</li>
                <li className=''>Todas</li>
            </ul>
            <div className='fetchPLN'>
                <label className='input-container'>
                    <input className='input-PLN' placeholder='Ingrese Partido, Localidad o Barrio donde desea buscar.'></input>
                </label>
                <div className='action-fetch'>
                    <span><Image width={13} height={13} src={'/images/image-start/icon-fetch.png'} alt='icon fetch' /> Avanzado</span>
                    <button><Image width={20} height={20} src={'/images/image-start/icon-button-search.svg'} alt={'svg-serch-icon'} /></button>
                </div>
            </div>
        </div>
    );
}

const ActionBTN = () => {
    return (
        <div className='component-action'>
            <Image className='image-action' width={230} height={230} src={"/images/image-start/info-team-icon.png"} alt='image-frame' />
            <span>Descripcion componente</span>
            <button>SOBRE NOSOTROS</button>
        </div>
    );
}

export { FrameSearch, ActionBTN }