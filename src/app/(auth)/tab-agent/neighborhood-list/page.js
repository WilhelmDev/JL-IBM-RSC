import React from "react";
import dynamic from "next/dynamic";

const Neighborhoods = dynamic(() => import('@/components/tab-agent/all-neighborhoods/Neighborhoods'))

export const metadata = {
  title: "Todos los barrios || Homez - Real Estate NextJS Template",
};

const AgentTabNeighborhoods = ({ params }) => {
  return (
    <main id="agent-tab-neighborhoods">
      <div className="all-neighborhoods-info">
        <h1 className="all-neighborhoods-title">Todos los Barrios</h1>
        <p>Estás viendo una lista con todos los barrios de la plataforma.</p>
      </div>
      <Neighborhoods />
    </main>
  );
};

export default AgentTabNeighborhoods;