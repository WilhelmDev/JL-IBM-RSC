'use client'
import HeaderV2 from '@/components/common/HeaderV2'
import Footer from '@/components/common/default-footer'
import Entrepreneurship from '@/components/location/entrepreneurship'
import Neighborhood from '@/components/location/neighborhood'
import Property from '@/components/location/property'
import { getLocationId, getEntrepreneurshipsList, getNeighborhoodsList, getPropertiesList } from "@/core/infrastructure/services/tab-agent.service";
import Tabs from '@/components/location/tabs'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { usePathname, useSearchParams, useRouter } from "next/navigation";


export default function Locations() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentType, setCurrentType] = useState('1')
  const [currentLocation, setCurrentLocation] = useState(Number(searchParams.get("id")) || 1)
  const [location, setLocation] = useState({})
  const [entrepreneurship, setEntrepreneurship] = useState([])
  const [properties, setProperties] = useState([]);
  const [neighborhood, setNeighborhood] = useState([]);
  const [loading, setLoading] = useState(false)
  const newSearchParams = new URLSearchParams(searchParams.toString());
  newSearchParams.set("id", currentLocation);
  router.push(`${pathname}?id=${currentLocation}`)


  const fetchLocation = async (currentLocation) => {
    try {
      setLoading(true)
      const {data} = await getLocationId(currentLocation);
      setLocation(data);
    } catch (error) {
      console.log(error)
      setLocation(undefined);
    }
  };

  const fetchEntrepreneurship = async () => {
    try {
      setLoading(true)
      const {data} = await getEntrepreneurshipsList(1, "", "title", "asc")
      setEntrepreneurship(data.length > 0 ? data : undefined)
    } catch (error) {
      setEntrepreneurship(undefined)
    } finally {
      setLoading(false)
    }
  }

  const fetchProperties = async () => {
    try {
      setLoading(true)
      const { data } = await getPropertiesList(1, "", "title", "asc");
      setProperties(data.length > 0 ? data : undefined);
    } catch (error) {
      setProperties(undefined);
    } finally {
      setLoading(false)
    }
  };

  const fetchNeighborhood = async () => {
    try {
      setLoading(true)
      const { data } = await getNeighborhoodsList(1, "", "title", "asc");
      setNeighborhood(data.length > 0 ? data : undefined);
    } catch (error) {
      setNeighborhood(undefined);
    } finally {
      setLoading(false)
    }
  }


  const tabs = [
    { id: "buy", label: "Establecimiento (3)" },
    { id: "rent", label: "Transporte y accesos" },
    { id: "sold", label: "Alquiler temporal" },
  ];

  const items = [
    { id: "1", title: "Escuela Primaria Nombre" },
    { id: "2", title: "Hospital" },
    { id: "3", title: "Banco" },
  ];

  useEffect(() => {
    fetchLocation(currentLocation);
    fetchEntrepreneurship();
    fetchProperties();
    fetchNeighborhood();
  }, [currentLocation]);

  return (
    <>
      {/* // Begin Header V2 */}
      <HeaderV2 />
      {/* // End header V2 */}

      {/* // Begin Content */}
      <main id='locations'>

        {/* // Begin carrousel */}
        <section className='carrousel'>
          <Image src={'/images/locations/carrousel.png'} alt='carrousel' height={200} width={600} className='carrousel-img'/>
          <Image src={'/images/locations/controls.svg'} alt='controls' height={200} width={600} className='controls-img'/>
        </section>
        {/* //End carrousel */}

        <section className='description'>
          <div className='name'>
            {location && location.information ? (
              <>
                <h1>{location.title}</h1>
              </>
            ) : (
              <>
                <h1>No esta disponible la informacion de esta localidad</h1>
              </>
            )}
          </div>
          <div className="container mb-5">
        <div className="row">
          <div className="col-lg-12 wow fadeInUp" data-wow-delay="100">
            <div className="text-start">
              <h4>¿Que podes encontrar en {location.title}?</h4>
            </div>
            <div className="home10-map">
              
            </div>
          </div>
        </div>
      </div>
          <Tabs items={items} tabs={tabs}/>
        </section>

        {/* Begin Propertys */}
          <section className='propertys'> 
            <div className='title'>
              {location && location.information ? (
                <>
                  <h1>{location.information.real_states_amount} Propiedades Disponibles en esta localidad</h1>
                  <p>Puedes guardar y seleccionar las que te gusten y compararlas</p>
                </>
              ) : (
                <>
                  <h1>0 Propiedades Disponibles en esta localidad</h1>
                  <p>Puedes guardar y seleccionar las que te gusten y compararlas</p>
                </>
              )
              }
            </div>
            <div className='content'>
              <div className='button-container'>
                <button className={`btn-custom ${currentType === '1' && 'active'}`}>
                  Venta
                </button>
                <button className={`btn-custom ${currentType === '2' && 'active'}`}>
                  Alquiler
                </button>
                <button className={`btn-custom ${currentType === '3' && 'active'}`}>
                  Alquiler Temporal
                </button>
              </div>
              <div className='gallery'>
                {properties && properties.length > 0 && (
                  properties.map((property, index) => (
                    <Property key={index} property={property} />
                  ))
                )}
              </div>
              <p className='expand-button'><strong>Cargar Más</strong></p>
            </div>
          </section>
        {/* End Propertys */}

        {/* Begin Neighborhoods */}
          <section className='neighborhoods'>
            <div className='title'>
            {location && location.information ? (
                <>
                  <h1>{location.information.neighborhoods_amount} Barrios Disponibles en esta localidad</h1>
                  <p>Puedes guardar y seleccionar las que te gusten y compararlas</p>
                </>
              ) : (
                <>
                  <h1>0 Barrios Disponibles en esta localidad</h1>
                  <p>Puedes guardar y seleccionar las que te gusten y compararlas</p>
                </>
              )
              }
            </div>
            <div className='content'>
              <div className='button-container'>
                  <button className={`btn-custom ${currentType === '1' && 'active'}`}>
                    Todos
                  </button>
                  <button className={`btn-custom ${currentType === '2' && 'active'}`}>
                    Abiertos
                  </button>
                  <button className={`btn-custom ${currentType === '3' && 'active'}`}>
                    Semi Cerrados
                  </button>
                  <button className={`btn-custom ${currentType === '5' && 'active'}`}>
                    Privados
                  </button>
                  <button className={`btn-custom ${currentType === '6' && 'active'}`}>
                    Country Club
                  </button>
                </div>
              <div className='gallery'>
                {neighborhood && neighborhood.length > 0 && (
                  neighborhood.map((neighborhood, index) => (
                    <Neighborhood key={index} neighborhood={neighborhood} />
                  ))
                )}
              </div>
            </div>
            <p className='expand-button'><strong>Cargar Más</strong></p>
          </section>
        {/* End Neighborhoods */}

        {/* Begin Entrepreneurship */}
        <section className='entrepreneurships'>
            <div className='title'>
            {location && location.information ? (
                <>
                  <h1>{location.information.entrepreneurships_amount} Emprendimientos Disponibles en esta localidad</h1>
                  <p>Puedes guardar y seleccionar las que te gusten y compararlas</p>
                </>
              ) : (
                <>
                  <h1>0 Emprendimientos Disponibles en esta localidad</h1>
                  <p>Puedes guardar y seleccionar las que te gusten y compararlas</p>
                </>
              )
              }
            </div>
            <div className='content'>
              <div className='gallery'>
                {entrepreneurship && entrepreneurship.length > 0 && (
                  entrepreneurship.map((entrepreneurship, index) => (
                    <Entrepreneurship key={index} entrepreneurship={entrepreneurship} />
                  ))
                )}
              </div>
            </div>
            <p className='expand-button'><strong>Cargar Más</strong></p>
          </section>
        {/* End Entrepreneurship */}
      </main>
      {/* //End Content */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  )
}
