import React from "react";
import Image from "next/image";


export default function Props({_property}) {
    return(
        <>  
            <div className='container-repeat'> 
                <Image className="img-comp" width={110} height={69} src={_property.props.imageurl} alt='XXX'/>
                <span>{_property.props.nameproperty}</span>
                <div>{_property.props.amount}</div> 
            </div>
        </>
    )
}