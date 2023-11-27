import { useState } from "react";
import { createContext } from "react";

export const practiceState = createContext();

function PracticeState(props){

   
    const[counter,setCounter] = useState(0);
    return(
        <practiceState.Provider value={{counter,setCounter}}>
           {props.children}
        </practiceState.Provider>
    )
}
export default PracticeState;