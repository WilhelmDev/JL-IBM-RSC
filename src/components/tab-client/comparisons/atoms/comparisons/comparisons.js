
import React from "react";
import BodyComparisons from "./comparisons.tsx"


export default function Comparisons({comparisons, comp}) {  
    
    return(
        <>  
            <BodyComparisons key={comparisons?.id} element={comparisons} typecomp={comp} />
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

