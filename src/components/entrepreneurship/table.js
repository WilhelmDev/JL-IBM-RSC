import EntrepreneurshipTtem from './list-entrepreneurship/Entrepreneurship-item'
import ListHeader from './list-entrepreneurship/ListHeader'
import React from 'react'


export default function TableEntrepreneurship() {
  return (
    <section id='entrepreneurship-table'>
        <div className='list-container'>
            <table className='list-table'>
                <ListHeader />
                <tbody>
                    <EntrepreneurshipTtem />
                </tbody>
            </table>
        </div>
    </section>
  )
}
