import React from 'react'
import ActtionBtn from '../../location/atom-components/action-btn'

export default function Action({itemId, action, handleChangeDelete}) {
  return (
    <td>
        <div className="actions">
          <div className='actions-container'>
            <ActtionBtn variant={'delete'} itemId={itemId} action={action} callback={(newActionDelete) => handleChangeDelete(newActionDelete)}/>
            <ActtionBtn variant={'edit'}/>
            <ActtionBtn variant={'share'}/>
          </div>
        </div>
    </td>
  )
}
