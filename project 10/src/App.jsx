import { useState,useContext} from 'react'
import Header from './assets/component/Header'
import Body from './assets/component/Body'
import Footer from './assets/component/Footer'
import { createContext } from 'react'

export const CountContext = createContext();
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CountContext value={{ count, setCount }}>
      <Header />
      <Body />
      <Footer />
    </CountContext>
    </>
  )
}

export default App
