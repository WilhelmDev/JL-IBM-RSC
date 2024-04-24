
import React from "react";
import BodyComparisons from "./comparisons.tsx"


export default function Comparisons({comparisons}) {  
    
    return(
        <>  
            <BodyComparisons key={comparisons?.real_state_1.id} element={comparisons?.real_state_1} />
            {
                comparisons?.real_state_2 ? () => {
                        <BodyComparisons key={comparisons?.real_state_2?.id} element={comparisons?.real_state_2} />
                    comparisons?.real_state_3 ?
                            <BodyComparisons key={comparisons?.real_state_3?.id} element={comparisons?.real_state_3} />
                    : ''
                }
                : ''
            }
        </>
    )
}

