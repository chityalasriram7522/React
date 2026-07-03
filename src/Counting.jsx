import { useState } from "react";

function Counting({name}){

  const [count,setCount] = useState(0);

  return (
    <>
    <div>
    <p>Our first Counter app: {name}</p>
    <h2>Counter: {count}</h2>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
    </>
  )

}

export default Counting;
import { useState } from "react";
import Counting from "./Counting";

function Clock(){

    const [clocks,setClocks] = useState(["A","B","C"]);
    
    function handlChange(){
        setClocks(["D",...clocks]);
    }

    return (
        <>
        <button onClick={handlChange}>Increment Clocks</button>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"20px", flexWrap:"wrap"}}>
            {clocks.map(clock => <Counting key={clock}  name={clock}></Counting> )}
        </div>
        </>
    )
}

export default Clock;