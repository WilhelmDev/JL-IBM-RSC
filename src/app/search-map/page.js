'use client'
import React, { useState } from 'react';
import HeaderV2 from '@/components/common/HeaderV2'
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Filters from "@/components/search-map/atoms/filter";
import ModalFilter from '@/components/search-map/atoms/modal-filter';
import MapList from "@/components/search-map/map-list";

const MapSearch = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div id="search-map">
      {/* Main Header Nav */}
      <HeaderV2 />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}


    <div className="filter-page">
      <ModalFilter 
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <div className="title">
        Filtros:
      </div>
      <button className="btn-drop" onClick={() => setOpenModal(!openModal)}> 
        <i class="fa-solid fa-sliders"></i>Avanzado
      </button>
      <Filters content="Operación: Venta, Alquiler, Alquiler temporal"/>
      <Filters content="Tipo: Casas, Departamentos, Quintas"/>
      <Filters content="Precio Entre 150.000 y 500.000 - USD"/>
      <Filters content="Partido: Todos"/>
      <Filters content="Localidad: Todas"/>
      <Filters content="Barrio"/>
    </div>

    <div>
      <MapList 
        search="Palabras claves seleccionadas por las personas"
        />
    </div>

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </div>
  );
};

export default MapSearch;
