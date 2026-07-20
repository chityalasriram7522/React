import { useState } from 'react'
 

function App() {
 

     //using if else statement
      // const isLoggedIn = true;
      // if(isLoggedIn){
      //   return <h1>Welcome back!</h1>
      // }
      // return <h1>Please log in.</h1>

      //using the ternary operatot
      // const isLoggedIn = false;
      
      // return (
      //   <>
      //   {
      //     isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>
      //   }
      //   </>
      // )


      // //using the logical && operator
      // const isLoggedIn = true;  // show the welcome message only if the user is logged in, otherwise show nothing
      // return(
      //   <>
      //   {
      //     isLoggedIn && <h1>Welcome back!</h1>
      //   }
      //   </>
      // )

      //using the logical || operator
      // const isLoggedIn = false;  // show the welcome message only if the user is logged in, otherwise show nothing
      // return(
      //   <>
      //   {
      //     isLoggedIn || <h1>Please log in.</h1>
      //   }
      //   </>
      // )
const products = [
  {
    id: 1,
    name: "Laptop"
  },
  {
    id: 2,
    name: "Mobile"
  }
];

//lsit
//  return (
//     <>
//       {products.map((product)=> (
//         <div>
//           <h2>{product.name}</h2>
//         </div>
//       ))}
//     </>
//   );  

  //keys

  //  return (
  //   <>
  //     {products.map((product)=> (
  //       <div key={product.id}>
  //         <h2>{product.id}----{product.name}</h2>
  //       </div>
  //     ))}
  //   </>
  // );



  // const fruits = ["Apple", "Mango", "Orange"];
  // return (
  //   <>
  //     {fruits.map((fruit, index) => (
  //       <h1 key={index}>{index}---{fruit}</h1>
  //     ))}
  //   </>
  // );
 
}

export default App;
