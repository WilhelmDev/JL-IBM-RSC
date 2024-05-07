import HeaderV2 from '@/components/common/HeaderV2'
import MobileMenu from '@/components/common/mobile-menu'
import FooterTabAgent from '@/components/tab-agent/Footer'
import SidebarTabClient from '@/components/tab-client/Sidebar'
import React from 'react'

export default function LayoutTabClient({children}) {
  return (
    <>
      {/* Begin Header */}
      <HeaderV2 />
      {/* End Header */}

      <main className='row' id='tab-client'>
        {/* Begin SideBar */}
        <div className='col-2 p-0' id='sidebar-tab-client'>
          <SidebarTabClient />
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
