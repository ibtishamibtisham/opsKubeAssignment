import "./App.css";
import { Books } from "./component/home";
import { Cart } from "./component/cart";
import { Route, Routes } from "react-router-dom";
import { Details } from "./component/details";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Books />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/details" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
