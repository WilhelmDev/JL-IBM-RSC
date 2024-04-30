import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ControlReviews = ({ pagination, callback }) => {
    return (
        <div className='control-reviews'>
            <div className='control'>
                <button className='control-arrow active'><Image width={14} height={8.75} src={'/images/image-start/arrow-reviews-left.svg'} alt='arrow reviews left' onClick={callback()} /></button>
                <div className='container-bullet'>
                    <div className='pagination-bullet'><Image className='active' width={6.4} height={6.4} src={'/images/image-start/pagination-bullet-reviews.svg'} alt='pagination bullet' /></div>
                    <div className='pagination-bullet'><Image className='' width={6.4} height={6.4} src={'/images/image-start/pagination-bullet-reviews.svg'} alt='pagination bullet' /></div>
                </div>
                <button className='control-arrow'><Image width={14} height={8.75} src={'/images/image-start/arrow-reviews-right.svg'} alt='arrow reviews right' onClick={callback()} /></button>
            </div>
            <span className='text-control'>VER EN GOOGLE</span>
        </div>
    );
}

const ElementReview = ({ title_review, review, stars, name, lastname, job, user_image }) => {
    return (
        <div className='review'>
            <span className='title-review'>{title_review}</span>
            <p className='text-review'>{review}</p>
            <ul className='stars-container'>
                <li className='star'>⭐</li>
                <li className='star'>⭐</li>
                <li className='star'>⭐</li>
                <li className='star'>⭐</li>
                <li className='star'>⭐</li>
            </ul>
            <div className='user-review'>
                <Image className='user-image' width={100} height={100} src={user_image} alt={"user image"} />
                <div className='info-user'>
                    <span className='name-user'>{name}<br />{lastname}</span>
                    <span className='user-job'>{job}</span>
                </div>
            </div>
        </div>
    );
}

export { ControlReviews, ElementReview }