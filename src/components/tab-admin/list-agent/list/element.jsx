import Image from "next/image";

const Element = (props) =>(
    <ul className="col-12 content-container container-generic element-list">
        <li>{props.nombre}</li>
        <li>{props.email}</li>
        <li className="d-flex justify-content-center"><div className="action-container">{props.action}</div></li>
        <li className="container-generic">
            <div className="container-localities">
                <div>{props.acc.property}</div>
                <div>{props.acc.enterpreneur}</div>
                <div>{props.acc.neighborhood}</div>
            </div>
        </li>
        <li className="btn-action">
            <button><Image width={15} height={15} src={"/images/tab-admin/pencil.svg"} alt={""}/></button>
            <button><Image width={15} height={15} src={"/images/tab-admin/trash-white.svg"} alt={""}/></button>
            <button><Image width={15} height={15} src={"/images/tab-admin/social.svg"} alt={""}/></button>
        </li>
    </ul>
)

export default Element;