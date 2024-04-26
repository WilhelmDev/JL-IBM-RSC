export default function Detail({ title }) {
    return (
      <>
        <p className='data title'>{title}</p>
      </>
    )
  }

export function Date({ date }) {
    return (
      <>
        <p className='data date'>{date}</p>
      </>
    )
  }

export function Location({ location }) {
    return (
      <>
        <p className='data location'>{location}</p>
      </>
    )
  }

export function Operation({ operation }) {
    return (
        <div className='data cell-btn'>
            <button>{operation}</button>
        </div>
    )
}

export function Resuls({ results }) {
    return(
        <div className='data cell-btn'>
            <button>{results}</button>
        </div>
    )
}   
export function MaxPrice({ maxPrice }) {
    return(
        <div className='data cell-btn'>
            <div className='button'>{maxPrice}</div>
        </div>
    )
}
export function MinPrice({ minPrice }) {
    return(
        <div className='data cell-btn'>
            <div className='button'>{minPrice}</div>
        </div>
    )
}