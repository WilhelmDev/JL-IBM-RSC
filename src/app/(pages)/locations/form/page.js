import React from 'react'
import dynamic from 'next/dynamic'
const HeaderV2 = dynamic(() => import('@/components/common/HeaderV2'), { ssr: false })
const Footer = dynamic(() => import('@/components/common/default-footer'), { ssr: false })
const FormLocation = dynamic(() => import('@/components/location/form'), { ssr: false })

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
