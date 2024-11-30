"use client"
import { useState } from "react";

const State = () => {
   
   const  [count  , setCount] = useState(0)
   const handleIncrement = ()=> {
      setCount(count + 1)
   }
   const handleDecrement = () =>{
    setCount(count - 1)
   }
  
    return (
       <div className="flex flex-row justify-around">
         <h1 className="text-7xl">{count}</h1>
          <button className="mx-5 py-4 rounded-md bg-slate-400 p-4 m-4" onClick={handleIncrement}>
            Increment</button>
        <button className="mx-5 py-4 rounded-md bg-slate-400 p-4 m-4" onClick={handleDecrement}>
            Decrement</button>
        </div> 
    )
}
export default State;