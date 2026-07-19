import { useState } from 'react'  

// function App() {
     
//   const showmessage = (name) => {
//     alert(`Hello, ${name}!`);
//   }

//   return (
//     <>
//     {/* <button onClick={showMessage("Ram")}></button> */}  
//     {/* passing a argument to the function is wrong way because it will call the function immediately when the component renders. Instead, we should use an arrow function to pass the argument when the button is clicked.  */}
//       <button onClick={() => showmessage("ram")}>Show Message</button>
//     </>
//   )
// }

// function App() {

//   const handleClick = (event) => {
//     console.log(event);
//   };

//   return (
//     <button onClick={handleClick}>
//       Click
//     </button>
//   );
// }

// export default App;


//  use of preventdefault in react  also used for onSubmit event in form tag

// function App() {
//   const [count, setCount] = useState(0);

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Comment this line first

//     alert("Submitted");
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase Count
//       </button>

//       <form onSubmit={handleSubmit}>
//         <input type="text" />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;


//onClick
// function App() {
//   const handleclick=()=>{
//     alert("button clicked");
//   }
//   return(
//     <>
//       <button onClick={handleclick}>Click Me</button>

//     </>
//   )
// }
// export default App;


//onChnages
// function App() {
//  const [name, setName] = useState("");
//   return(
//     <>
//     <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
//     <h1>{name}</h1>
//     </>
//   )
// }
// export default App;


//without value={name} 
// function App() {
//   const [name, setName] = useState("");

//   return (
//     <>
//       <input 
//         onChange={(e) => setName(e.target.value)}/>
        
//         {/* //without value={name} when we type in the input field it will not show the value in the input field  */}
//         {/* // because we are not binding the value of the input field to the state variable name.  */}
//         {/* // so we need to bind the value of the input field to the state variable name by using value={name} */}
//         {/* //example i click something it show in h1 tag and i cleared the form after that the input filed is not cleared from input filed and h1 tag is clered but not cleared in input filed so for that we use that  */}
//      <h1>{name}</h1>
//       <button onClick={() => setName("")}>
//         Clear
//       </button>
//     </>
//   );
// }
// export default App;


// without value={name}s

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <>
//       <input value={name}
//         onChange={(e) => setName(e.target.value)}/>   //acces s the value of the input field by using e.target.value and set the value of the state variable name by using setName(e.target.value)

//      <h1>{name}</h1>
//       <button onClick={() => setName("")}>
//         Clear
//       </button>
//     </>
//   );
// }
// export default App;

//onMouseOver
// function App() {

//   return (
//   <h1 onMouseOver={() => console.log("Entered")}>
//   Hover Me
// </h1>
          // <h1 onMouseMove={() => alert("Moving")}>
          //       Hover Me
          //        </h1>


// <h1
//   onMouseOver={() => console.log("Entered")}  //run once when mouse enter the h1 tag
//   onMouseMove={() => console.log("Moving")}  //run continuously when mouse move inside the h1 tag
//   onMouseOut={() => console.log("Left")}  //run once when mouse leave the h1 tag
// >
//   Hover Me
// </h1>
//   );
// }


//onKeyDown
// function App() {

//   const handleKeyDown = (e) => {
//     console.log(e.key);
//   };

//   return (
//     <input
//       onKeyDown={handleKeyDown}
//     />
//   );
// }
// export default App;

// function App() {

//   const handleKeyDown = (e) => {
//     console.log(e.key);
//     if (e.key === "Enter") {
//       alert("Search Started");
//     }
//   };

//   return (
//     <input
//       placeholder="Search"
//       onKeyDown={handleKeyDown}
//     />
//   );
// }
// export default App;


// function App() {

//   const handleKeyUp = (e) => {
//     console.log(e.key);
//   };

//   return (
//     <input
//       onKeyUp={handleKeyUp}
//     />
//   );
// }
// export default App;