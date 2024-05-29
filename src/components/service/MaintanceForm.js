import Image from "next/image";

const MaintanceForm = ({ image }) => {
  return (
    <div className="row">
      <Image
        className="image-side col-6"
        width={1000}
        height={610}
        src={image}
        alt="side-img"
      />
      <div className="col-5 border p-4">
        <div className="mb-4">Pedí tu turno para hacer un diagnóstico de mantenimiento de la propiedad que vas a vender o que vas a comprar.</div>
        <div className="inputsForm">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Email"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Teléfono"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Localidad"
          />
          <textarea placeholder="Contanos más..." />
          <button>ENVIAR SOLICITUD</button>
        </div>
      </div>
    </div>
  );
}

export default MaintanceForm;