import Home from "./pages/home/Home";
import "./App.css";
import Siderbar from "./components/sidebar/Siderbar";
import Topbar from "./components/Topbar/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlist from "./pages/Userlist/Userlist";
import User from "./pages/User/User";
import Newuser from "./pages/newuser/Newuser";
import Productlist from "./pages/productlist/Productlist";
import Product from "./pages/product/Product";
import Newproduct from "./pages/newproduct/Newproduct";

function App() {
  return (
    <BrowserRouter>
      <Topbar></Topbar>
      <div className="container">
        <Siderbar></Siderbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Userlist />} />
          <Route path="/user/:userid" element={<User />} />
          <Route path="/newuser" element={<Newuser />} />
          <Route path="/product" element={<Productlist />} />
          <Route path="/product/:userid" element={<Product />} />
          <Route path="/newproduct" element={<Newproduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
