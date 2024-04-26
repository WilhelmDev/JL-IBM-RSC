import React from 'react'
import HeaderV2 from '@/components/common/HeaderV2'
import Footer from '@/components/common/default-footer'
import Comparisons from '@/components/comparisons/comparisons'
import Image from 'next/image'

export default function FavoritesList() {
  return (
    <>
      <HeaderV2 />
        <section id='comparisons'>
            <h2 className='title-comparisons'>Comparación</h2>
            <div className='comparisons-container'>
                <div className='btn-comparisons first-column'>
                    <div className='btn-container'>
                        <button className='btn'>Limpiar Comparación</button>
                        <button className='btn'>Guardar Comparación</button>
                    </div>
                        <div className='table-column'>
                        <div>Tipo de propiedad</div>
                        <div>Tipo de Barrio</div>
                        <div>Precio</div>
                        <div>Venta</div>
                        <div>Alquiler</div>
                        <div>Alquiler Temporal</div>
                        <div>Expensas</div>
                        <div>Sup. Total</div>
                        <div>Sup. Cubierta</div>
                        <div>Sup. Semicubierta</div>
                        <div>Sup. Descubierta</div>
                        <div>Estacionamiento</div>
                        <div>Cubierto</div>
                        <div>Semicubierto</div>
                        <div>Descubierto</div>
                        <div>Plantas</div>
                        <div>Ambientes</div>
                        <div>Baños</div>
                        <div>Antigüedad</div>
                        <div>Baños en Suit</div>
                        <div>Toilet</div>
                        <div>Internet</div>
                        <div>Lavadero</div>
                        <div>Quincho</div>
                        <div>Parrilla</div>
                        <div>Hogar</div>
                        <div>Pileta</div>
                        <div>Alambrado</div>
                        <div>Ubicación Interna</div>
                        <div>Ubicación Perimetral</div>
                        <div>Pavimento</div>
                        <div>Gas Natural</div>
                        <div>Aberturas DVH</div>
                        <div>Vista a la laguna</div>
                        <div>Vista al Golf</div>
                    </div>
                </div>
                <Comparisons 
                    property={true}
                    typeProperty="Casa"
                    typeNeighborhood="Privado"
                    price=""
                    sales="$123.123.000"
                    rent="$123.123.000"
                    temporalyRent="Ver Lista"
                    expense="$123.123.000"
                    totalArea="1233 Mts"
                    coveredArea="1233 Mts"
                    semiCoveredArea="1233 Mts"
                    uncoveredArea="1233 Mts"
                    parking
                    covered="1"
                    semiCovered="0"
                    uncovered="0"
                    floors="3"
                    environments="7"
                    bathrooms=""
                    antiquity="2"
                    suitBathrooms="1"
                    toilet="2"
                    internet="Fibra Optica"
                    laundry
                    quincho=""
                    grill
                    home
                    pool
                    wiring
                    internalLocation
                    perimeterLocation
                    pavement
                    gas
                    dvh
                    lagoonView
                    golfView
                />
                <Comparisons/>
                <Comparisons/>
            </div>
            <div className='digital-channels'>
                <p>Trabajamos tu propiedad compartiéndola en multiples canales digitales</p>
                <div className='logo-container'>
                    <Image
                        src={`/images/comparisons/facebook.png`}
                        width={126}
                        height={25}
                        alt='facebook'
                    />
                    <Image
                        src={`/images/comparisons/exaltación.png`}
                        width={79}
                        height={55}
                        alt='exaltación'
                    />
                    <Image
                        src={`/images/comparisons/argenprop.png`}
                        width={131}
                        height={33}
                        alt='argenprop'
                    />
                    <Image
                        src={`/images/comparisons/mercado_libre.png`}
                        width={124}
                        height={31}
                        alt='mercado libre'
                    />
                    <Image
                        src={`/images/comparisons/instagram.png`}
                        width={48}
                        height={48}
                        alt='instagram'
                    />
                    <Image
                        src={`/images/comparisons/zonaprop.png`}
                        width={145}
                        height={33}
                        alt='zonaprop'
                    />
                    <Image
                        src={`/images/comparisons/youtube.png`}
                        width={121}
                        height={27}
                        alt='youtube'
                    />
                </div>
            </div>
        </section>
    {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
    {/* End Our Footer */}
    </>
  )
}
