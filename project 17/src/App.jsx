import { useState } from 'react'
import Studentlist from './assets/component/Studentlist'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Studentlist/>
    </>
  )
}

export default App
