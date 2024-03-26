import GraphTabAgent from "@/components/tab-agent/Graph";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Tablero de agente || Homez - Real Estate NextJS Template",
};

const AgentTabHome = ({params}) => {
  return (
    <>
      {/* Agent Tab Section Area */}
      <section className="main-content" id="agent-tab-home">
        <div className="info-user-cont">
          <p className="welcome-user">Hola, &#123; nombre de usuario &#125;</p>
          <span>Que bueno verte nuevamente por aquí</span>
        </div>
        <div className="general-info-cont">
          <div className="info-item">
            <div className="item-data">
              <span>Total de propiedades</span>
              <h2>583</h2>
            </div>
            <div className="item-icon">
              <Image src="/images/tab-agent/property.svg" alt="icon" height={20} width={20} className='img bg-custom' />
            </div>
          </div>
          <div className="info-item">
            <div className="item-data">
              <span>Total de acciones</span>
              <h2>192</h2>
            </div>
            <div className="item-icon">
              <Image src="/images/tab-agent/stock.svg" alt="icon" height={20} width={20} className='img bg-custom' />
            </div>
          </div>
          <div className="info-item">
            <div className="item-data">
              <span>Total de reviews</span>
              <h2>192</h2>
            </div>
            <div className="item-icon">
              <Image src="/images/tab-agent/review.svg" alt="icon" height={20} width={20} className='img bg-custom' />
            </div>
          </div>
          <div className="info-item">
            <div className="item-data">
              <span>Favoritos guardados</span>
              <h2>67</h2>
            </div>
            <div className="item-icon">
              <Image src="/images/tab-agent/fav.svg" alt="icon" height={20} width={20} className='img bg-custom' />
            </div>
          </div>
        </div>
        <div className="details-cont">
          <main className="graph-cont">
            <div className="title-graph">
              <span>Property Views</span>
              <div className="links">
                <span><a href="#">Hours</a></span>
                <span><a href="#">Weekly</a></span>
                <span><a href="#">Monthly</a></span>
              </div>
            </div>
            <div className="graph">
              <GraphTabAgent />
            </div>
          </main>
          <div className="activity-cont">
            <span>Últimas actividades</span>
          </div>
        </div>
      </section>
      {/* End Agent Tab Section Area */}
    </>
  );
};

export default AgentTabHome;
