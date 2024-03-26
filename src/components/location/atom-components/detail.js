import React from 'react'

export default function Detail({quantity, title}) {
  return (
    <div className="detail-container">
      <span>{quantity || 0}</span>
      <small>{title || 'titulo'}</small>
    </div>
  )
}

export function MoreDetails() {
  return (
    <button className="detail-container btn-variant" type='button'>
      Ver Lista
    </button>
  )
}

