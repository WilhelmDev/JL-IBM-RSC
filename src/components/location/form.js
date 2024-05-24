'use client'
import React, { useEffect, useState } from 'react'
import PropertyDescriptionCustom from './propertyDescription'
import ReferencePoint from './referencePoint'
import UploadMediaCustom from './uploadMedia'
import { sendFormLocation } from '@/core/infrastructure/services/tab-agent.service'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/utilis/routes'
import { toast } from 'react-toastify'

export default function FormLocation() {
  const [stepOne, setStepOne] = useState({})
  const [stepTwo, setStepTwo] = useState({})
  const [stepThree, setStepThree] = useState({})
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const updateStepOne = (data) => {
    setStepOne(data)
  }

  const updateStepTwo = (data) => {
    setStepTwo(data)
  }

  const updateStepThree = (data) => {
    setStepThree(data)
  }

  const sendForm = async() => {
    try {
      setLoading(true)
      await sendFormLocation({
        stepOne,
        stepTwo,
        stepThree
      })
      toast('Localidad creada exitosamente', {
        toastId: 'locality-success',
        autoClose: 600
      })
      router.push(ROUTES.locationList)
    } catch (error) {
      console.log(error)
      toast.error('Ocurrió un error al cargar la localidad', {
        toastId: 'locality-error',
        autoClose: 600
      })
    } finally {
      setLoading(false)
    }
  }

  const triggerForm = async () => {
    await sendForm()
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
            1. Título y localización
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
            2. Puntos de referencia
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
            3. Media
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
            <PropertyDescriptionCustom updateStepOne={updateStepOne} />
            {/* <ReferencePoint /> */}
          </div>
        </div>
        {/* End tab for Property Description */}

        <div
          className="tab-pane fade"
          id="nav-item2"
          role="tabpanel"
          aria-labelledby="nav-item2-tab"
        >
          <div className="ps-widget bgc-white bdrs12 p30 position-relative">
            <ReferencePoint updateStepTwo={updateStepTwo} />
            {/* <PropertyDescriptionCustom /> */}
          </div>
        </div>
        {/* End tab for Upload photos of your property */}

        <div
          className="tab-pane fade"
          id="nav-item3"
          role="tabpanel"
          aria-labelledby="nav-item3-tab"
        >
          <div className="ps-widget bgc-white bdrs12 p30 position-relative">
            <UploadMediaCustom updateStepThree={updateStepThree} triggerForm={triggerForm} loading={loading} />
          </div>
        </div>
        {/* End tab for Listing Location */}
      </div>
    </>
  )
}
