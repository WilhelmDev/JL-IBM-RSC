import React from 'react'
import Hero from './tabs/hero'
import Diagnosis from './tabs/diagnostico'
import Maintenance from './tabs/Maintenance'
import Buildings from './tabs/buildings'

export default function ServiceForm() {
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
            2. Diagnostico
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
            3. Mantenimiento
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
            4. Construcciones
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
            <Hero />
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
            <Diagnosis />
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
            <Maintenance />
          </div>
        </div>
        {/* End tab for details Maintenance */}
        <div
          className="tab-pane fade"
          id="nav-item4"
          role="tabpanel"
          aria-labelledby="nav-item4-tab"
        >
          <div className="ps-widget bgc-white p30 ">
            <Buildings />
          </div>
        </div>
        {/* End tab for media Buildings */}
      </div>
    </>
  )
}
