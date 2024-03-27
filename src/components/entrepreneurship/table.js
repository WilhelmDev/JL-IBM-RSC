import EntrepreneurshipTtem from './list-entrepreneurship/Entrepreneurship-item'
import ListHeader from './list-entrepreneurship/ListHeader'
import React from 'react'


export default function TableEntrepreneurship({entrepreneurship}) {
  return (
    <div id='entrepreneurship-table'>
        <div className='list-container'>
            <table className='list-table'>
                <ListHeader />
                <tbody>
                    {entrepreneurship.map((item, index) => (
                        <EntrepreneurshipTtem key={index} ItemsData={item} />
                    )
                    )}
                </tbody>
            </table>
        </div>
    </div>
  )
}
