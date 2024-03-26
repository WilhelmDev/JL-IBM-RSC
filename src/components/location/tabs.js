'use client';
import React, { useState } from 'react'

export default function Tabs({ tabs, items }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className='tabs'>
      <ul className="nav nav-tabs p-0 m-0 mb-3">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link custom-color ${activeTab === tab.id ? "active-custom" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      {
        items.map((item) => (
          <div key={item.id} className='item-container'>
            <div className='img'><span><strong>IMG</strong></span></div>
            <div className='info-container'>
              <span><strong>{item.title}</strong></span>
              <span>Ubicación: (Link a mapa de localidades)</span>
            </div>
            <p className='more-info'>Más info</p>
          </div>
        ))
      }
    </div>
  )
}
