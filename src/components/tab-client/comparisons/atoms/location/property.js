import React from "react";
import Image from "next/image";
import Props from "./props.js"


export default function Property({_property}) {
    return(
        <>  
          <div className='locality-container'>
            <div className='section-one'>{_property.date}</div>
            <div className='section-two'>
              <span>{_property.type_comp}</span>
            </div>
            <div className='section-three'>
              <Props _property={_property}/>
              <Props _property={_property}/>
              <Props _property={_property}/>
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