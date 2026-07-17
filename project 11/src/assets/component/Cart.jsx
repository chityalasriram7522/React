

// import { CountContext } from "../../../../project 10/src/App";
import { CartContext } from "../../../../project 11/src/App";
import { useContext } from "react";

function Cart(){
     const {cartItems} = useContext(CartContext);
    return(
        <>
        <h1>total cart items: {cartItems}</h1>
        </>
    )
}
export default Cart;