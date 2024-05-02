'use client'
import React, { useState } from "react";

export default function InfElement(props) {
    const [data, setData] = useState(props.items)
    if (data.length === 0) {
        return <div>No hay datos para mostrar</div>;
    }
    return (
        data.map((item, index) => (
            <div key={index} className='container-info'>
                <span className='title-info'>{item.title_info}</span>
                <ul className='container-list-info'>
                    {item.content.map((contentItem, i) => (
                        <li key={i} className=''>{contentItem}</li>
                    ))}
                </ul>
                {item.button !== '' ?
                    <button>{item.button}</button>
                :
                    ''
                }
            </div>
        ))
    );
}
