'use client';
import { Types } from '@/data/selects';
import React, { useEffect, useState } from 'react'

export default function Tabs({ items }) {
  const tabs = [
    { id: "locals", label: "Establecimiento" },
    { id: "transports", label: "Transporte y accesos" },
    { id: "stores", label: "Recomendaciones" },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeItem, setActiveItem] = useState([]);
  const locals = Types.flatMap(type => {
    if (type.label === 'Establecimientos') 
      return type.options.map(option => option.label)
    }).filter(Boolean)
  const transports = Types.flatMap(type => {
    if (type.label === 'Transporte y accesos')
      return type.options.map(option => option.label)
    }).filter(Boolean)
  const stores = Types.flatMap(type => {
    if (type.label === 'Comercios Amigos') 
      return type.options.map(option => option.label)
    }).filter(Boolean)

  useEffect(() => {
    setActiveItem(items.filter(item => {
      if (activeTab === 'locals') {
        return locals.includes(item.type);
      }
      if (activeTab === 'transports') {
        return transports.includes(item.type);
      }
      if (activeTab === 'stores') {
        return stores.includes(item.type);
      }
    }));
  }, [activeTab, items]);
  
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
              {tab.label}{activeTab === tab.id ? ` (${activeItem.length})` : ""}
            </button>
          </li>
        ))}
      </ul>
      {
        activeItem.map((item) => (
          <div key={item.id} className='item-container'>
            <div className='img'><span><strong>IMG</strong></span></div>
            <div className='info-container'>
              <span><strong>{item.name}</strong></span>
              <span>Ubicación: ({item.map_address})</span>
            </div>
            <p className='more-info'>Más info</p>
          </div>
        ))
      }
    </div>
  )
}