import { useState } from "react";
function Counter({count, setCount}){
 
 
    return(
        <>
        <h1>this is blinkit counter</h1>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count=>count+1)}>Increment</button>
        <button onClick={() => setCount(count=>count-1)}>Decrement</button>
        </>
    )
}
export default Counter;