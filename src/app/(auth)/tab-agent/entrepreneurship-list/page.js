import TableEntrepreneurship from "@/components/entrepreneurship/table";
import React from "react";

export const metadata = {
  title: "Listado de emprendimientos || Homez - Real Estate NextJS Template",
};

export default function Listentrepreneurship() {
  return (
    <section id="entrepreneurship-list">
      <div className="info-page">
        <p className="title-page">Todos los emprendimientos</p>
        <span>
          Estas viendo una lista con todos los emprendimientos de la plataforma.
        </span>
      </div>
      <div className="content-page">
        <TableEntrepreneurship />
      </div>
    </section>
  );
}
