'use client'
import React, { useState } from "react";
import Image from "next/image";

export default function InfElement(props) {
    const [data, setData] = useState(props.items)
    if (data.length === 0) {
        return <div>No hay datos para mostrar</div>;
    }
    return (
        <>
            <h4 className='title-service'>{props.title}</h4>
            {data.map((item, index) => (
                <div key={index} className="repeat">
                    <div className='container-info'>
                        {item.image !== '' ? 
                            <div key={index} className="image-icon">
                                <Image width={30} height={30} src={item.image} alt="si"/>
                            </div>
                        : ''
                        }
                        <div className="content">
                            <span className='title-info'><strong>{item.title_info}</strong></span>
                            <ul className='container-list-info'>
                                {item.content.map((contentItem, i) => (
                                    <li key={i} className=''>{contentItem}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {item.button !== '' ?
                        <button>{item.button}</button>
                    :
                        ''
                    }
                </div>
            ))}
        </>
    );
}
