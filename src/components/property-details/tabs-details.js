'use client';

import React, { useState } from 'react';

const data = {
    espacios: [
        ["Altillo", "Balcon", "Biblioteca", "Cocina", "Cocina Comedor"],
        ["Cocina Living Comedor", "Comedor Diario", "Cochera", "Dependencia de servicio", "Entrada de coche"],
        ["Galeria", "Hall", "Lavadero", "Living", "Living Comedor"],
        ["Oficina", "Playroom", "Patio", "Quincho", "Sotano"]
    ],
    servicios: [
        ["Servicio 1", "Servicio 2", "Servicio 3", "Servicio 4", "Servicio 5"],
        ["Servicio 6", "Servicio 7", "Servicio 8", "Servicio 9", "Servicio 10"],
        ["Servicio 11", "Servicio 12", "Servicio 13", "Servicio 14", "Servicio 15"],
        ["Servicio 16", "Servicio 17", "Servicio 18", "Servicio 19", "Servicio 20"]
    ],
    adicionales: [
        ["Adicional 1", "Adicional 2", "Adicional 3", "Adicional 4", "Adicional 5"],
        ["Adicional 6", "Adicional 7", "Adicional 8", "Adicional 9", "Adicional 10"],
        ["Adicional 11", "Adicional 12", "Adicional 13", "Adicional 14", "Adicional 15"],
        ["Adicional 16", "Adicional 17", "Adicional 18", "Adicional 19", "Adicional 10"]
    ],
};

const TabsDetails = () => {
    const [selectedTab, setSelectedTab] = useState('espacios');

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const renderTabContent = () => {
        const tabData = data[selectedTab];
        return tabData.map((column, columnIndex) => (
            <div key={columnIndex} className="col-lg-3">
                {column.map((item, itemIndex) => (
                    <p key={itemIndex} className="mb-0">{item}</p>
                ))}
            </div>
        ));
    };

    return (
        <>
            <div className="col-lg-12 mt-3 properties-table mb-5 wow fadeInUp" data-wow-delay="100">
                <div className="container border-section">
                    <div className="btn-group mb-2" role="group" aria-label="Basic checkbox toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={() => handleTabChange('espacios')} />
                        <label className="btn btn-outline-primary" htmlFor="btnradio1">Espacios</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={() => handleTabChange('servicios')} />
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">Servicios</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={() => handleTabChange('adicionales')} />
                        <label className="btn btn-outline-primary" htmlFor="btnradio3">Adicionales</label>
                    </div>
                    <div className="row ms-3">
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TabsDetails;
