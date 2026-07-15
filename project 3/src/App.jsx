<<<<<<< HEAD
import { useEffect, useState } from "react";
// [<img>]

function App(){
   
   const [users,setUsers] = useState([]);
  //  const [name,setName] = useState("");
  const [count,setCount] = useState(30);

   
  useEffect(()=>{
     
    async function GithubProfile() {
       
    const response = await fetch(`https://api.github.com/users?per_page=${count}`);
    const data = await response.json();
    setUsers(data);
    console.log("Hello");
   }

   GithubProfile();

  },[count]) 
  
  // function handleChange(e){
  //   setName(e.target.value.toUpperCase());
  // }

  return (
    <>
    <h1>Github User</h1>
    <input type="number" value={count} onChange={(e)=>setCount(e.target.value)}></input>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap" , gap:"10px"}}>
      {
        users.map(user=>(
          <img src={user.avatar_url} height={"100px"} width={"100px"} key={user.login}/>
        ))
      }
    </div>
    </>
  )
}

export default App;
=======
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
>>>>>>> 73c4c1985368db0ca7acc07bc1a7999aa06da1e
