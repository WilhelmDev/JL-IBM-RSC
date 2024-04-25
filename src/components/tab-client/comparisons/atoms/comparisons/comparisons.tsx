import React, { useState } from "react";
import Props from "./props.js"
import BTN from "./action-btn.js"

export default function Comparisons({element}) {  

    return(
        <>  
          <div className='locality-container'>
            <div className='section-one'>{element?.expensas?.referenceDate || 'XX-XX-XXX'}</div>
            <div className='section-two'>
              {element?.classification.map((item) => {
                  item.id === element.id ?
                    <span> {item?.title} </span>
                    : '';
                })
              }
            </div>
            <div className='section-three'>
              <Props 
                PBTimes={element?.price_by_times} 
                gallery={element?.media?.gallery}
              />
            </div>
            <BTN/>
          </div>
        </>
    )
}