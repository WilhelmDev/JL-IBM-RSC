'use client'
import React, { useState } from 'react'
import MediaTab from './tabs/media'
import ServicesTab from './tabs/services'
import SurfaceTab from './tabs/surface'
import LocalizationTab from './tabs/localization'
import DescriptionTab from './tabs/description'
import { sendPropertyForm } from '@/core/infrastructure/services/tab-agent.service'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/utilis/routes'

export default function PropertyForm() {

  const [stepOne, setStepOne] = useState({})
  const [stepTwo, setStepTwo] = useState({})
  const [stepThree, setStepThree] = useState({})
  const [stepFour, setStepFour] = useState({})
  const [stepFive, setStepFive] = useState({})
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

  const updateStepFive = (values) => {
    setStepFive(values)
  }

  const sendForm = async () => {
    setLoading(true)
    try {
      await sendPropertyForm({
        stepOne, stepTwo, stepThree, stepFour, stepFive
      })
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
      router.push(ROUTES.propertyList)
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
            3. Superficie y Espacios
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
            4. Servicios y adicionales
          </button>
          <button
            className="nav-link fw600"
            id="nav-item5-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item5"
            type="button"
            role="tab"
            aria-controls="nav-item5"
            aria-selected="false"
          >
            5. Archivos / Medios
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
          <div className="ps-widget bgc-white bdrs12 p30 position-relative">
            <DescriptionTab updateStepOne={updateStepOne} />
          </div>
        </div>
        {/* End tab for neighborhood Description */}

        <div
          className="tab-pane fade"
          id="nav-item2"
          role="tabpanel"
          aria-labelledby="nav-item2-tab"
        >
          <div className="ps-widget bgc-white bdrs12 p30 ">
            <LocalizationTab updateStepTwo={updateStepTwo} />
          </div>
        </div>
        {/* End tab for neighborhood localization */}

        <div
          className="tab-pane fade"
          id="nav-item3"
          role="tabpanel"
          aria-labelledby="nav-item3-tab"
        >
          <div className="ps-widget bgc-white bdrs12 p30 ">
            <SurfaceTab updateStepThree={updateStepThree} />
          </div>
        </div>
        {/* End tab for details neighborhood */}
        <div
          className="tab-pane fade"
          id="nav-item4"
          role="tabpanel"
          aria-labelledby="nav-item4-tab"
        >
          <div className="ps-widget bgc-white bdrs12 p30 ">
            <ServicesTab updateStepFour={updateStepFour} />
          </div>
        </div>
        {/* End tab for media neighborhood */}
        <div
          className="tab-pane fade"
          id="nav-item5"
          role="tabpanel"
          aria-labelledby="nav-item5-tab"
        >
          <div className="ps-widget bgc-white bdrs12 p30 ">
            <MediaTab updateStepFive={updateStepFive} sendForm={sendForm} loading={loading} />
          </div>
        </div>
        {/* End tab for media propertys */}
      </div>
    </>
  )
}
