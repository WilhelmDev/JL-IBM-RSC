// 'use client'
import React from 'react';
// import { useState } from 'react';
import { ControlReviews, ElementReview } from './reviewscomponents';

export default function Reviews({ review }) {
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
                <ControlReviews
                    callback={() => { }}
                />
                {
                    /* End of Component "ControlReviews" */
                }
            </div>
            <div className='list-reviews'>
                {
                    /* Begin of Component "ElementReview" */
                }
                <ElementReview
                    title_review={"Great Work"}
                    review={"Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs."}
                    name={"Leslie"}
                    lastname={"Alexander"}
                    job={"Nintendo"}
                    user_image={"/images/image-start/owner-review1.png"}
                />
                <ElementReview
                    title_review={"Great Work"}
                    review={"Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs."}
                    name={"Floyd"}
                    lastname={"Miles"}
                    job={"Bank of America"}
                    user_image={"/images/image-start/owner-review2.png"}
                />
                <ElementReview
                    title_review={"Great Work"}
                    review={"Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs."}
                    name={"Leslie"}
                    lastname={"Alexander"}
                    job={"Nintendo"}
                    user_image={"/images/image-start/owner-review3.png"}
                />
                {
                    /* End of Component "ElementReview" */
                }
            </div>
        </div>
    );
}