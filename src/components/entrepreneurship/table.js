import EntrepreneurshipTtem from './list-entrepreneurship/Entrepreneurship-item'
import ListHeader from './list-entrepreneurship/ListHeader'
import React from 'react'


export default function TableEntrepreneurship({entrepreneurship, handleChangeDelete}) {
    return (
      <div id='entrepreneurship-table'>
          <div className='list-container'>
              <table className='list-table'>
                  <ListHeader />
                  <tbody>
                  {entrepreneurship && entrepreneurship.length > 0 ?
                      entrepreneurship.map((item, index) => (
                      <EntrepreneurshipTtem key={index} ItemsData={item} handleChangeDelete = {handleChangeDelete} />
                  )) : 
                  <tr>
                      <td>No hay datos disponibles</td>
                  </tr>
                  }
                  </tbody>
              </table>
          </div>
      </div>
    )
  }
