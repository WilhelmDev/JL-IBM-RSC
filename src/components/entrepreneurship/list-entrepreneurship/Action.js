import React from 'react'
import ActtionBtn from '../../location/atom-components/action-btn'

export default function Action({itemId, action}) {
  return (
    <td>
        <div className="actions">
          <div className='actions-container'>
            <ActtionBtn variant={'delete'} itemId={itemId} action={action}/>
            <ActtionBtn variant={'edit'}/>
            <ActtionBtn variant={'share'}/>
          </div>
        </div>
    </td>
  )
}
