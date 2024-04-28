import Image from 'next/image';
import React from 'react';

const PaginationProperty = () => {
    return (
        <div className='pagination-property'>
            <button className='arrow-left'><Image width={20} height={20} src={"/images/image-start/arrow-left.svg"} alt='arrow-left' /></button>
            <div className='page-property'>
                <div className='active'><Image width={10} height={10} src={'/images/image-start/pagination-bullet-active.svg'} alt='bullet active' /></div>
                <div className=''><Image width={10} height={10} src={'/images/image-start/pagination-bullet.svg'} alt='bullet' /></div>
            </div>
            <button className='arrow-right'><Image width={20} height={20} src={"/images/image-start/arrow-right.svg"} alt='arrow-right' /></button>
        </div>
    );
}

const ActionProperty = () => {
    return (
        <div className="action-container">
            <div className="text-info">
                <h2>Ofertas que no pueden esperar</h2>
                <p> Puedes guardar y seleccionar las que te gusten y compararlas </p>
            </div>
            <div className="control">
                <button className='active'>Todas</button>
                <button className=''>Venta</button>
                <button className=''>Alquiler</button>
                <button className=''>Alquiler temporal</button>
            </div>
        </div>
    );
}

const ActionNeighborhood = () => {
    return (
        <div className="action-container">
            <div className="text-info">
                <h2>Ofertas que no pueden esperar</h2>
                <p> Puedes guardar y seleccionar las que te gusten y compararlas </p>
            </div>
            <div className="control">
                <button className='active'>Todas</button>
                <button className=''>Abiertos</button>
                <button className=''>Semi Cerrados</button>
                <button className=''>Privados</button>
                <button className=''>Country Club</button>
            </div>
        </div>
    );
}

export { PaginationProperty, ActionProperty, ActionNeighborhood };
