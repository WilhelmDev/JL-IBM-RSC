import Image from "next/image";

const MaintanceForm = ({ image }) => {
  return (
    <div className="row">
      <div 
        className="position-relative col-7"
      >
        <Image
          className="col-7"
          src={image}
          alt="side-img"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="col-4 border m-0 p-4">
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

const LastMaintanceForm = ({ image }) => {
  return (
    <div className="row">
      <div 
        className="position-relative col-7"
      >
        <Image
          className="col-7"
          src={image}
          alt="side-img"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="col-4 border m-0 p-4">
        <div className="mb-4">Estamos para ayudarte, responde este formulario y te responderemos con brevedad.</div>
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
            placeholder="¿Tienes terreno donde construir?"
          />
          <input
            type="text"
            className="form-control"
            placeholder="¿Cuándo te gustaría empezar tu obra?"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Tipo de construcción"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Localidad donde vas a construir"
          />
          <textarea placeholder="Contanos más..." />
          <button>ENVIAR SOLICITUD</button>
        </div>
      </div>
    </div>
  );
}

export { MaintanceForm, LastMaintanceForm };