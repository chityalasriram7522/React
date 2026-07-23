import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Products from "./assets/component/Products";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/products"
          element={<Products />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;