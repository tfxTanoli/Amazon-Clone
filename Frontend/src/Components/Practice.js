// function Practice(){

//     const handleChange = (event) =>{
//         console.log(event.target.value);

//     }

//     return(
//         <div>
//             <input name="firstName" onChange={handleChange}/>
            
//         </div>
//     )
// }
// export default Practice;
















import { useContext } from "react";
import { practiceState } from "../Context/PracticeState";
import { useRef } from "react";

function Practice(){


    const {counter,setCounter} = useContext(practiceState);
    
    const inputRef = useRef(null);

    function focusInput(){
        inputRef.current.focus();
    }

    const handleSubmit = (event) => {

         
        // Action 1: Prevent the default form submission behavior
        // event.preventDefault();
        // alert("Custom action prevented default form submission.");

        // Action 2: Default behavior (form submission)
        alert("Default form submission behavior will not occur.");
    }

   

    const handleCounterChange = () =>{
        const updatedCounter = setCounter(counter+1);
        localStorage.setItem('counter',updatedCounter);
    }

    return(
        <div>
            <button onClick={handleCounterChange}>Increment</button>
            <h1>{counter}</h1>

            <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>

     This is <strong>strong</strong> and this is <em>emphasized</em>.
     <p>Hello World</p>

        <form onSubmit={handleSubmit}>
                {/* Form inputs here */}
                <button type="submit">Submit Form</button>
            </form>
        </div>
    )
}
export default Practice;








// import React from 'react';
// import { useState } from 'react';
// function Practice() {
  
//     const initialItems = [
//         'Apple',
//         'Banana',
//         'Cherry',
//         'Date',
//         'Fig',
//         'Grapes',
//         'Kiwi',
//         'Lemon',
//         'Mango',
//         'Orange',
//       ];
//     const [items,setItems] = useState(initialItems);
//     const[filter,setFilter] = useState('');
//       const handleFilterChange = (event)=>{

//        setFilter(event.target.value);

//  const filteredItems = initialItems.filter((item) => item.toLowerCase()
//  .includes(event.target.value.toLowerCase()));
//         setItems(filteredItems);
//       }
      

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search for an item"
//         value={filter}
//         onChange={handleFilterChange}
//       />
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Practice;