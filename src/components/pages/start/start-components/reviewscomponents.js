import Image from 'next/image';
import React from 'react';

const ControlReviews = () => {
    return (
        <div className='control-reviews'>
            <div className='control'>
                <button className='control-arrow active'><Image width={14} height={8.75} src={'/images/image-start/arrow-reviews-left.svg'} alt='arrow reviews left' /></button>
                <div className='container-bullet'>
                    <div className='pagination-bullet'><Image className='active' width={6.4} height={6.4} src={'/images/image-start/pagination-bullet-reviews.svg'} alt='pagination bullet' /></div>
                    <div className='pagination-bullet'><Image className='' width={6.4} height={6.4} src={'/images/image-start/pagination-bullet-reviews.svg'} alt='pagination bullet' /></div>
                </div>
                <button className='control-arrow'><Image width={14} height={8.75} src={'/images/image-start/arrow-reviews-right.svg'} alt='arrow reviews right' /></button>
            </div>
            <span className='text-control'>VER EN GOOGLE</span>
        </div>
    );
}

const ElementReview = () => {
    return (
        <div className='review'>
            <span className='title-review'>Great Work</span>
            <p className='text-review'>Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.</p>
            <ul className='stars-container'>
                <li className='star'>⭐</li>
                <li className='star'>⭐</li>
                <li className='star'>⭐</li>
                <li className='star'>⭐</li>
                <li className='star'>⭐</li>
            </ul>
            <div className='user-review'>
                <Image className='user-image' width={30} height={30} src={"/images/image-start/owner-review1.png"} alt={"user image"} />
                <div className='info-user'>
                    <span className='name-user'>Nombre de usuario<br />Apellido de usuario</span>
                    <span className='user-job'>Trabajo de usuario</span>
                </div>
            </div>
        </div>
    );
}

export { ControlReviews, ElementReview }