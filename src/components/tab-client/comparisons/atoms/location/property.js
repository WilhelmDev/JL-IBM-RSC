import React from "react";
import Image from "next/image";
import Props from "./props.js"


export default function Property({comparisons}) {
    return(
        <>  
          <div className='locality-container'>
            <div className='section-one'>{comparisons.description}</div>
            <div className='section-two'>
              <span>{comparisons.type_comp}</span>
            </div>
            <div className='section-three'>
              <Props _property={comparisons}/>
              <Props _property={comparisons}/>
              <Props _property={comparisons}/>
            </div>
            <div className='section-four'>
                <button className='btn-action'>
                  <Image src="/images/tab-agent/list-actions/delete.svg" width={15} height={15} alt='icon' />
                </button>
                <button className='btn-action'>
                  <Image src="/images/tab-agent/list-actions/share.svg" width={15} height={15} alt='icon' />
                </button>
            </div>
          </div>
        </>
    )
}