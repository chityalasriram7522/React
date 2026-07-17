import { useState,useContext} from 'react'
import Header from './assets/component/Header'
import Body from './assets/component/Body'
import Footer from './assets/component/Footer'
import { createContext } from 'react'

export const CartContext = createContext();
function App() {
  // const [count, setCount] = useState(0)
  const [cartItems, setCartItems]= useState(0);
  return (
    <>
    {/* <CountContext value={{ count, setCount }}> */}
    <CartContext value={{cartItems,setCartItems}}>
      <Header />
      <Body />
      <Footer />
    </CartContext>
    {/* </CountContext> */}
    </>
  )
}

export default App
