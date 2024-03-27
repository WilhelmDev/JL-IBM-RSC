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
            <h3>{name}</h3>
            <span>{code}</span>
            <span>{locality.locality.province} - {locality.locality.partido.name}</span>
        </div>
    </td>
  )
}
