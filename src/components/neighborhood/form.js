'use client'
import React, { useState, useEffect } from 'react'
import TabDescription from './tabs/description'
import TabLocalization from './tabs/localization'
import TabDetails from './tabs/details'
import TabMedia from './tabs/media'
import { sendNeighborhoodForm, getNeighborhood } from '@/core/infrastructure/services/tab-agent.service'
import { useRouter, useSearchParams } from 'next/navigation'
import { ROUTES } from '@/utilis/routes'
import { toast } from 'react-toastify'

export default function FormNeighborhood() {

  const [stepOne, setStepOne] = useState({})
  const [stepTwo, setStepTwo] = useState({})
  const [stepThree, setStepThree] = useState({})
  const [stepFour, setStepFour] = useState({})
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  useEffect(() => {
    const fetchNeighborhood = async () => {
      try {
        const neigborhood = await getNeighborhood(id)
        console.log(neigborhood)
        setStepOne({
          title: neigborhood.title,
          refCode: neigborhood.ref_code,
          type: {
            label: neigborhood.type,
            value: neigborhood.type
          },
          description: neigborhood.description,
          expenses: neigborhood.expensas_amount,
          expensesDate: neigborhood.expensas_date,
          state: {
            label: neigborhood.state,
            value: neigborhood.state
          },
          notes: neigborhood.internal_notes,
          phone: neigborhood.phone,
          zonification: neigborhood.zonificacion
        })
        setStepTwo({
          country: {
            label: neigborhood.location.country,
            value: neigborhood.location.country
          },       
          province: {
            label: neigborhood.location.province,
            value: neigborhood.location.province
          },
          partido: {
            label: neigborhood.location.locality.partido.name,
            value: neigborhood.location.locality.partido.id
          },
          locality: {
            label: neigborhood.locality_title,
            value: neigborhood.locality_title
          },
          neigborhood: {
            label: (neigborhood.location.neigborhood !== null) ? 'Coutrie' : 'Barrio',
            value: (neigborhood.location.neigborhood !== null) ? 'Coutrie' : 'Barrio'
          },
          street: neigborhood.location.street_or_uf,
          lat: neigborhood.location.lat,
          lng: neigborhood.location.long
        });
        setStepThree({
          surface: neigborhood.details.neighborhood_surface,
          lotes: neigborhood.details.lots_amount,
          lotesConst: neigborhood.details.lots_built_year,
          available: neigborhood.details.available_lots,
          capDistance: neigborhood.details.capital_distance,
          maxSize: neigborhood.details.lots_max_size,
          minSize: neigborhood.details.lots_min_size,

          propsChecked: neigborhood.details.props,
          amenitiesChecked: neigborhood.details.amenidades,
          servicesChecked: neigborhood.details.services
        })
        setStepFour({
          photo: neigborhood.media.images,
          airDoc: neigborhood.airDoc,
          logoDoc: neigborhood.logoDoc,
          ruleDoc: neigborhood.ruleDoc,
          videoData: neigborhood.media.video_link
        })
      } catch (error) {
        toast.error('Ocurrió un error al cargar el barrio', {
          toastId: 'neigborhood-error',
          autoClose: 600
        })
      }
    }
    if (id) {
      fetchNeighborhood()
    }
  }, [id])

  const updateStepOne = (values) => {
    setStepOne(values)
  }

  const updateStepTwo = (values) => {
    setStepTwo(values)
  }

  const updateStepThree = (values) => {
    setStepThree(values)
  }

  const updateStepFour = (values) => {
    setStepFour(values)
  }

  const sendForm = async () => {
    setLoading(true)
    try {
      await sendNeighborhoodForm({
        stepOne, stepTwo, stepThree, stepFour
      })
      toast.success('Barrio creado exitosamente', {
        autoClose: 600,
        toastId: 'neigborhood-success'
      })
      router.push(ROUTES.neighborhoodList)
    } catch (error) {
      console.log(error)
      toast.error('Ha ocurrido un error al crear el barrio', {
        autoClose: 600,
        toastId: 'neigborhood-failed'
      })
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <nav>
        <div className="nav nav-tabs location-form" id="nav-tab2" role="tablist">
          <button
            className="nav-link active fw600 ms-3"
            id="nav-item1-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item1"
            type="button"
            role="tab"
            aria-controls="nav-item1"
            aria-selected="true"
          >
            1. Descripción
          </button>
          <button
            className="nav-link fw600"
            id="nav-item2-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item2"
            type="button"
            role="tab"
            aria-controls="nav-item2"
            aria-selected="false"
          >
            2. Localización
          </button>
          <button
            className="nav-link fw600"
            id="nav-item3-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item3"
            type="button"
            role="tab"
            aria-controls="nav-item3"
            aria-selected="false"
          >
            3. Detalle, Amenidades y Servicios
          </button>
          <button
            className="nav-link fw600"
            id="nav-item4-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item4"
            type="button"
            role="tab"
            aria-controls="nav-item4"
            aria-selected="false"
          >
            4. Medios
          </button>
        </div>
      </nav>
      {/* End nav tabs */}

      <div className="tab-content" id="nav-tabContent">

        <div
          className="tab-pane fade show active"
          id="nav-item1"
          role="tabpanel"
          aria-labelledby="nav-item1-tab"
        >
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <TabDescription stepOne={stepOne} updateStepOne={updateStepOne}/>
          </div>
        </div>
        {/* End tab for neighborhood Description */}

        <div
          className="tab-pane fade"
          id="nav-item2"
          role="tabpanel"
          aria-labelledby="nav-item2-tab"
        >
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <TabLocalization stepTwo={stepTwo} updateStepTwo={updateStepTwo} />
          </div>
        </div>
        {/* End tab for neighborhood localization */}

        <div
          className="tab-pane fade"
          id="nav-item3"
          role="tabpanel"
          aria-labelledby="nav-item3-tab"
        >
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <TabDetails stepThree={stepThree} updateStepThree={updateStepThree}/>
          </div>
        </div>
        {/* End tab for details neighborhood */}
        <div
          className="tab-pane fade"
          id="nav-item4"
          role="tabpanel"
          aria-labelledby="nav-item4-tab"
        >
          <div className="ps-widget bgc-white bdrs12 p30 position-relative">
            <TabMedia stepFour={stepFour} updateStepFour={updateStepFour} sendForm={sendForm} loading={loading} />
          </div>
        </div>
        {/* End tab for media neighborhood */}
      </div>
    </>
  )
}
