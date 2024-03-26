import Image from 'next/image'
import React from 'react'

export default function ActtionBtn({variant}) {
  return (
    <button type="button">
      <Image src={`/images/tab-agent/list-actions/${variant}.svg`} height={3} width={3} alt='image'/>
    </button>
  )
}

