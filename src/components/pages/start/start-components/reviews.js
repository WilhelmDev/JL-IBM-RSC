import React from 'react';
import { ControlReviews, ElementReview } from './reviewscomponents';

export default function Reviews() {
    return (
        <div className='container-reviews'>
            <div className='header-reviews'>
                <div className='container-text'>
                    <h3 className='big-text'>Las personas hablan por nosotros</h3>
                    <span className='little-text'>Estos son clientes más felices</span>
                </div>
                {
                    /* Begin of Component "ControlReviews" */
                }
                <ControlReviews />
                {
                    /* End of Component "ControlReviews" */
                }
            </div>
            <div className='list-reviews'>
                {
                    /* Begin of Component "ElementReview" */
                }
                <ElementReview />
                <ElementReview />
                <ElementReview />
                {
                    /* End of Component "ElementReview" */
                }
            </div>
        </div>
    );
}