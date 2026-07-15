 import {useState}from "react";
 function App(){
  let count=0;

  //using useState hook 
  // const [count,setCount]=useState(0);


  //manual way of incrementing the count in the dom using event listener
  // function incrementnumber(){
  //   count++;
  //   // console.log(count);
  //   const para=document.querySelector("p");
  //   para.textContent=`Count: ${count}`;
     
  //   const button=document.querySelector("button");
  //   button.textContent=`increment:${count}`;
  // }

  // function incrementnumber(){
  //   setCount(count+1);
  // }
  
  return(
    <>
    <p>Count: {count}</p>
    <button onClick={incrementnumber}>Increment {count}</button>
    </>
  )
 }
 export default App;