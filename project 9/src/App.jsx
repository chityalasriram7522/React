import { useState } from "react";
import Header from "./assets/component/Header";
import Body from "./assets/component/Body";
import Footer from "./assets/component/Footer";

function App() {
  
    const [count, setCount] = useState(0)
  return (
    <>
      <Header count={count} />
      <Body count={count} setCount={setCount} />
      <Footer />
    </>
  );
}

export default App;