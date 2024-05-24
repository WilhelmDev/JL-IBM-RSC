import HeaderV2 from '@/components/common/HeaderV2'
import MobileMenu from '@/components/common/mobile-menu'
import SidebarTabAdmin from '@/components/tab-admin/Sidebar'
import FooterTabAgent from '@/components/tab-agent/Footer'
import React from 'react'

export default function LayoutTabAdmin({ children }) {
  return (
    <>
      {/* Begin Header */}
      <HeaderV2 />
      {/* End Header */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      <main className='row' id='tab-agent'>
        {/* Begin SideBar */}
        <div className='col-2 p-0' id='sidebar-tab-agent'>
          <SidebarTabAdmin />
        </div>
        {/* End SideBar */}
        {/* Begin Content */}
        <div className='col-10 p-0' id='content'>
          {children}
          <FooterTabAgent />
        </div>
        {/* End Content */}
      </main>
    </>
  )
}
