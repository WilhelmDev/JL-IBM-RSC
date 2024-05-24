'use client'
import React, { useState } from 'react'
import TabDescription from './tabs/description'
import TabLocalization from './tabs/localization'
import TabDetails from './tabs/details'
import TabMedia from './tabs/media'
import { sendNeighborhoodForm } from '@/core/infrastructure/services/tab-agent.service'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/utilis/routes'
import { toast } from 'react-toastify'

export default function FormNeighborhood() {

  const [stepOne, setStepOne] = useState({})
  const [stepTwo, setStepTwo] = useState({})
  const [stepThree, setStepThree] = useState({})
  const [stepFour, setStepFour] = useState({})
  const [loading, setLoading] = useState(false)

  const router = useRouter()

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
            <TabDescription updateStepOne={updateStepOne}/>
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
            <TabLocalization updateStepTwo={updateStepTwo} />
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
            <TabDetails updateStepThree={updateStepThree}/>
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
            <TabMedia updateStepFour={updateStepFour} sendForm={sendForm} loading={loading} />
          </div>
        </div>
        {/* End tab for media neighborhood */}
      </div>
    </>
  )
}
