import {useState,useContext} from 'react';
import { CartContext } from "../../../../project 11/src/App";

function Product({item}){
    const [addTocart,setAddToCart] = useState(false);
    const {cartItems, setCartItems} = useContext(CartContext);
    return(
        <>
   <div>
 
    <h1>NAME:{item.name}</h1>
    <p>Price: ${item.price}</p>
    {
        addTocart ? <button onClick={()=>{setAddToCart(false),setCartItems(cartItems=>cartItems-1)}}>Remove</button> : <button onClick={()=>{setAddToCart(true),setCartItems(cartItems=>cartItems+1)}}>Add</button>
    }
   </div>
        </>
    )
}
export default Product;