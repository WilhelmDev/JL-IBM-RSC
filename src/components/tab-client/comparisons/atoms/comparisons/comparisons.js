
import React from "react";
import BodyComparisons from "./comparisons.tsx"


export default function Comparisons({comparisons}) {  
    
    return(
        <>  
            <BodyComparisons key={comparisons?.real_state_1.id} element={comparisons?.real_state_1} typecomp={"Venta"} />
            <BodyComparisons key={comparisons?.real_state_2?.id} element={comparisons?.real_state_2} typecomp={"Alquiler"} />
            <BodyComparisons key={comparisons?.real_state_3?.id} element={comparisons?.real_state_3} typecomp={"Alquiler Temporal"}/>
            {/* {
                comparisons?.real_state_2 ? () => {
                    comparisons?.real_state_3 ?
                    : ''
                }
                : ''
            } */}
        </>
    )
}

