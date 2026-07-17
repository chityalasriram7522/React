import React, { useState } from "react";
// import Counter from "./Counter";
import Product from "./Product";
function Body( ){
    const [items,setItems]= useState([
         {id:1,name:"apple",price: 100},
         {id:2,name:"banana",price: 200},
         {id:3,name:"grapes",price: 300},
         {id:4,name:"mango",price: 400},
         {id:5,name:"orange",price: 500}
         ]);
 
    return(
        <>
        <h1>this is blinkit body</h1>
       <div>
        {
            items.map((item)=> <Product key={item.id} item={item}></Product>)
        }
       </div>
        </>
    )
}
export default Body;