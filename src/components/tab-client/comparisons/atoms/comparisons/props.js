import React from "react";
import Image from "next/image";


export default function Props({PBTimes,gallery}) {
    return(
        <>  
            <div key={PBTimes?.id} className='container-repeat'> 
                <Image key={gallery?.id} className="img-comp" width={110} height={69} src={gallery?.url || ""} alt='ImgLocation'/>
                <span>{PBTimes?.title || "Nombre de la propiedad"}</span>
                <div>{'$' + PBTimes?.price_usd + ' USD' || "0"}</div> 
            </div>
            <div key={PBTimes?.id} className='container-repeat'> 
                <Image key={gallery?.id} className="img-comp" width={110} height={69} src={gallery?.url || ""} alt='ImgLocation'/>
                <span>{PBTimes?.title || "Nombre de la propiedad"}</span>
                <div>{'$' + PBTimes?.price_usd + ' USD' || "0"}</div> 
            </div>
            {
                (PBTimes?.id === 3) !== undefined ?
                    <div key={PBTimes?.id} className='container-repeat'> 
                        <Image key={gallery?.id} className="img-comp" width={110} height={69} src={gallery?.url || ""} alt='ImgLocation'/>
                        <span>{element?.title || "Nombre de la propiedad"}</span>
                        <div>{'$' + PBTimes?.price_usd + ' USD' || "0"}</div> 
                    </div>
                : ''
            }
        </>
    )
}