import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
// import {Switch, Route} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import NewArrivals from "./component/NewArrivals";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/products/:id" element={<Product />} />
      <Route exact path="/newarr" element={<NewArrivals />} />

      </Routes>
    </>
  );
}

export default App;
