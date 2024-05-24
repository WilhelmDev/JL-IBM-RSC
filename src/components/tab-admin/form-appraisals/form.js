'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/utilis/routes'
import Hero from './tabs/hero'
import Title from './tabs/title'
import TypeAppraisal from './tabs/type-appraisal'

export default function ServiceForm() {

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
      await sendPropertyForm({
        stepOne, stepTwo, stepThree, stepFour
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
        <div className="nav nav-tabs services-form" id="nav-tab2" role="tablist">
          <button
            className="nav-link active fw600"
            id="nav-item1-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item1"
            type="button"
            role="tab"
            aria-controls="nav-item1"
            aria-selected="true"
          >
            1. Hero
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
            2. Título y Descripción
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
            3. Tipos de Tasación
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
          <div className="ps-widget bgc-white p30 position-relative">
            <Hero updateStepOne={updateStepOne} />
          </div>
        </div>
        {/* End tab for Hero */}

        <div
          className="tab-pane fade"
          id="nav-item2"
          role="tabpanel"
          aria-labelledby="nav-item2-tab"
        >
          <div className="ps-widget bgc-white p30 ">
            <Title updateStepTwo={updateStepTwo} />
          </div>
        </div>
        {/* End tab for Diagnosis */}

        <div
          className="tab-pane fade"
          id="nav-item3"
          role="tabpanel"
          aria-labelledby="nav-item3-tab"
        >
          <div className="ps-widget bgc-white p30 ">
            <TypeAppraisal updateStepThree={updateStepThree} />
          </div>
        </div>
      </div>
    </>
  )
}
