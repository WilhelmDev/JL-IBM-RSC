import React from "react";

export default function InfElement({ list_title, item1, item2, item3, desc_btn }) {
    return (
        <div className='container-info'>
            <span className='title-info'>{list_title}</span>
            <ul className='container-list-info'>
                <li className=''>{item1}</li>
                <li className=''>{item2}</li>
                <li className=''>{item3}</li>
            </ul>
            <button>{desc_btn}</button>
        </div>
    );
}