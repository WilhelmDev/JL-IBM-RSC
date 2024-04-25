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