import Image from 'next/image'

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

export function DetailOperation({operation, price}) {
  return (
    <div className="detail-container">
      <span>{price}</span>
      <small>{operation}</small>
    </div>
  )
}

export function InfoBrick({ quantity, type }) {
  return (
    <div className="detail-container info-variant">
      <span> {quantity} {type}</span>
    </div>
  )
}

export const LastAction = ({ action }) => {
  return (
    <div className="action-container">
      <span>{action}</span>
    </div>
  )
}

export const LastSolicitude = ({date}) => {
  return (
    <div className="detail-container date-variant">
      <span>{date}</span>
      <small>(Ultima solicitud)</small>
    </div>
  )
}

export const FavoriteBtn = ({ quantity, variant, type }) => {
  return (
    <div className='detail-container fav-variant'>
      <Image alt='heart' height={25} width={25} src={`/images/tab-agent/list-actions/${variant}.svg`}/>
      <span>{quantity} {type}</span>
    </div>
  )
}

