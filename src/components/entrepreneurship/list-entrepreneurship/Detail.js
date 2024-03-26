import React from 'react'
import Image from "next/image";

export default function Detail({name, code, locality}) {
  return (
    <td className='d-flex gap-3'>
        <Image
            src='/images/home/font-home.jpeg'
            alt='Entrepreneurship'
            width={110}
            height={143} 
        />
        <div className="d-flex flex-column details">
            <h3>Nombre del emprendimiento</h3>
            <span>codigo</span>
            <span>localidad</span>
        </div>
    </td>
  )
}
