import HeaderV2 from '@/components/common/HeaderV2'
import Footer from '@/components/common/default-footer'
import FormLocation from '@/components/location/form'
import React from 'react'

export default function FormLocations() {
  return (
    <>
    {/* // Begin Header V2 */}
    <HeaderV2 />
    {/* // End header V2 */}

    {/* Begin Formulario */}
    <FormLocation />
    {/* End Formulario */}

    {/* Start Our Footer */}
    <section className="footer-style1 pt60 pb-0">
      <Footer />
    </section>
    {/* End Our Footer */}
  </>
  )
}
