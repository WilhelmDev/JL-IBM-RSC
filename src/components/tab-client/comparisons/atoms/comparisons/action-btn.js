import React from "react";
import Image from "next/image";

export default function BTN(){
    return(
        <div className='section-four'>
            <button className='btn-action'>
                <Image src="/images/tab-agent/list-actions/delete.svg" width={15} height={15} alt='icon' />
            </button>
            <button className='btn-action'>
                <Image src="/images/tab-agent/list-actions/share.svg" width={15} height={15} alt='icon' />
            </button>
        </div>
    )
}