import Loader from '../common/Loader'
import EntrepreneurshipTtem from './list-entrepreneurship/Entrepreneurship-item'
import ListHeader from './list-entrepreneurship/ListHeader'
import React from 'react'


export default function TableEntrepreneurship({entrepreneurship , loading}) {
    return (
      <div id='entrepreneurship-table'>
          <div className='list-container'>
              <table className='list-table'>
                  <ListHeader />
                  <tbody>
                  { 
                  entrepreneurship
                  ?
                    entrepreneurship.map((item, index) => (
                    <EntrepreneurshipTtem key={index} ItemsData={item} />
                    )) 
                  : 
                  <tr>
                      <td>No hay datos disponibles</td>
                  </tr>
                  }
                  </tbody>
              </table>
              {
                loading 
                &&
                <div className="d-flex align-items-center justify-content-center">
                    <Loader size={100}/>
                </div>
              }
          </div>
      </div>
    )
  }
