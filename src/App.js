import Navbar from './components/Navbar/Navbar';
import Home from './page/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Billing from './page/Billing/Billing';
import AddBuyer from './page/AddNewBuyer/AddBuyer';
import Addproduct from './page/AddNewProduct/Addproduct';
import ProductDetail from './page/ProductDetail/ProductDetail';
import BuyerDetail from './page/BuyerDetail/BuyerDetail';
import UpdateProduct from './page/UpdateProduct/UpdateProduct';
import DeleteProduct from './page/DeleteProduct/DeleteProduct';
import UpdateBuyer from './page/updateBuyer/UpdateBuyer';
import Navbar2 from './components/Navbar2/Navbar2';
import '../src/page/Home/Home.css';
import Login from './page/login/Login';
import Register from './page/register/Register';
import NavbarFront from './components/navbarfront/NavbarFront';

function App() {
  return (
    <>
    {window.localStorage.getItem('shopid')?<Navbar />:<NavbarFront/>}
      <div className="homepage">
        <Routes>
          <Route path="/" element={<Billing />} />
          <Route path="/navbar2" element={<Navbar2 />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/addbuyer" element={<AddBuyer />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/buyer" element={<BuyerDetail />} />
          <Route path="/update/product" element={<UpdateProduct />} />
          <Route path="/delete/product" element={<DeleteProduct />} />
          <Route path="/update/buyer" element={<UpdateBuyer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
