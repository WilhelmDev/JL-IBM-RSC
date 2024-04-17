'use client'
import React, { useState } from 'react'
import DescriptionTab from './tabs/description'
import LocalizationTab from './tabs/localization'
import DetailsTab from './tabs/details'
import ServicesTab from './tabs/services'
import OffertsTab from './tabs/ofert'
import MediaTab from './tabs/media'
import { sendEntrepreneurshipForm } from '@/core/infrastructure/services/tab-agent.service'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/utilis/routes'

export default function EntrepreneurshipForm() {
  const [stepOne, setStepOne] = useState({})
  const [stepTwo, setStepTwo] = useState({})
  const [stepThree, setStepThree] = useState({})
  const [stepFour, setStepFour] = useState({})
  const [stepFive, setStepFive] = useState({})
  const [stepSix, setStepSix] = useState({})
  const [loading, setLoading] = useState(false)

  const [paymentTypes, setPaymentTypes] = useState({})

  const router = useRouter()

  const updatePayments = (value) => {
    setPaymentTypes(value)
  }

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

  const updateStepSix = (values) => {
    setStepSix(values)
  }

  const sendForm = async () => {
    setLoading(true)
    try {
      const data = await sendEntrepreneurshipForm({
        stepOne, stepTwo, stepThree, stepFour, stepFive: { ...stepFive, types: paymentTypes }, stepSix
      })
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
      router.push(ROUTES.entrepreneurshipList)
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
            3. Detalles y Amenidades
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
            5. Ofertas y unidades
          </button>
          <button
            className="nav-link fw600"
            id="nav-item6-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item6"
            type="button"
            role="tab"
            aria-controls="nav-item6"
            aria-selected="false"
          >
            6. Medios
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
            <DescriptionTab  updateStepOne={updateStepOne} />
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
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <DetailsTab updateStepThree={updateStepThree} />
          </div>
        </div>
        {/* End tab for details neighborhood */}
        <div
          className="tab-pane fade"
          id="nav-item4"
          role="tabpanel"
          aria-labelledby="nav-item4-tab"
        >
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
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
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <OffertsTab updatePayments={updatePayments} updateStepFive={updateStepFive} />
          </div>
        </div>
        {/* End tab for media neighborhood */}
        <div
          className="tab-pane fade"
          id="nav-item6"
          role="tabpanel"
          aria-labelledby="nav-item6-tab"
        >
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <MediaTab stepFive={stepFive} updateStepSix={updateStepSix} sendForm={sendForm} loading={loading} />
          </div>
        </div>
        {/* End tab for media neighborhood */}
      </div>
    </>
  )
}
