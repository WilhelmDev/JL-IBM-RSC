import React, { useState } from 'react';

const TabsDetails = ({ datos }) => {
    const [selectedTab, setSelectedTab] = useState('espacios');

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const renderTabContent = () => {
        const tabData = datos[selectedTab];
        return tabData.map((item, index) => (
            <div key={index} className="col-lg-3">
                <p className="mb-0">{item.name}</p>
            </div>
        ));
    };

    return (
        <>
            <div className="col-lg-12 mt-3 properties-table mb-5 wow fadeInUp" data-wow-delay="100">
                <div className="container border-section">
                    <div className="btn-group mb-2" role="group" aria-label="Basic checkbox toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={() => handleTabChange('espacios')} defaultChecked={selectedTab === 'espacios'} />
                        <label className={`btn btn-outline-primary ${selectedTab === 'espacios' ? 'active' : ''}`} htmlFor="btnradio1">Espacios</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={() => handleTabChange('servicios')} defaultChecked={selectedTab === 'servicios'} />
                        <label className={`btn btn-outline-primary ${selectedTab === 'servicios' ? 'active' : ''}`} htmlFor="btnradio2">Servicios</label>
                        {/* 
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={() => handleTabChange('adicionales')} defaultChecked={selectedTab === 'adicionales'} />
                        <label className={`btn btn-outline-primary ${selectedTab === 'adicionales' ? 'active' : ''}`} htmlFor="btnradio3">Adicionales</label> */}
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
