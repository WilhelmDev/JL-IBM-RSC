import React from "react";
import Image from "next/image";


export default function Props({comparisons}) {
    return(
        <>  
            <div className='container-repeat'> 
                <Image className="img-comp" width={110} height={69} src={comparisons.props.imageurl} alt='XXX'/>
                <span>{comparisons.props.nameproperty}</span>
                <div>{comparisons.props.amount}</div> 
            </div>
        </>
    )
}