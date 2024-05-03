import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsDetails = (props) => {
    return (
        <div className="container">
            <div className="element-detail">
                <span className="content">{props.google_points}</span>
                <Image width={100} height={50} src={"/images/aboutus/google-review.png"} alt="google-review" />
                <span className="title">Referencias</span>
            </div>
            <div className="element-detail">
                <span className="content">{props.propertys}</span>
                <span className="title">Propiedades disponibles</span>
            </div>
            <div className="element-detail">
                <span className="content">{props.happy_clients}</span>
                <span className="title">Clientes felices</span>
            </div>
        </div>
    );
}

const AboutUsInf = (props) => {
    return (
        <>
            <div className="side-title-left">
                <h1>{props.title}</h1>
            </div>
            <div className="side-content-right">
                <p>{props.content}</p>
                <Link className="link" href={""}>Leer más</Link>
            </div>
        </>
    );
}

export { AboutUsDetails, AboutUsInf };