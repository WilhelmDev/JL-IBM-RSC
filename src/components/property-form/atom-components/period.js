import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Period({period, editable, deletePeriod}) {
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (editable) {
      setIsEditing(true)
    }
  }, [editable])

  return (
    <tr>
      <td>
      <input type="text" disabled={!isEditing} placeholder='+ Agrege uno nuevo' value={period.name} onChange={(e) => setNewPeriod({...period, name: e.target.value})} />
      </td>
      <td>
        <input type="text" disabled={!isEditing} placeholder='123123' value={period.priceArs} onChange={(e) => setNewPeriod({...period, priceArs: e.target.value})} />
      </td>
      <td>
        <input type="text" disabled={!isEditing} placeholder='123123' value={period.priceUsd} onChange={(e) => setNewPeriod({...period, priceUsd: e.target.value})} />
      </td>
      <td>
        <Image src="/images/tab-agent/table-periods/pencil.svg" className='action-icons' width={10} height={10} alt='icon' />
      </td>
      <td>
        <Image src="/images/tab-agent/table-periods/save.svg" className='action-icons' width={10} height={10} alt='icon' />
      </td>
      <td>
        <Image src="/images/tab-agent/table-periods/delete.svg" className='action-icons' width={10} height={10} alt='icon' onClick={() => deletePeriod(Number(period.id))} />
      </td>
    </tr>
  )
}
