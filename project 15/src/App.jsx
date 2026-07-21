import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import About from "./component/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login/:id" element={<Login />} /> */}
              <Route path="/about" element={<About />} />
              <Route path="/login/:id" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;