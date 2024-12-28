
import { Routes, Route } from "react-router-dom";
import './App.css'
import ClientLayout from './components/layouts/ClientLayout';
import Home from "./components/pages/Client/Home";
import Contact from "./components/pages/Client/Contact";
import Favorites from "./components/pages/Client/Favorites";
import ClientProducts from "./components/pages/Client/Products";
import ProductDetails from "./components/pages/Client/ProductDetails";
import NotFound from "./additionals/NotFound";
import Dashboard from "./components/pages/Admin/Dashboard";
import AddProducts from "./components/pages/Admin/AddProducts";
import AdminProducts from "./components/pages/Admin/Products";
import AdminLayout from "./components/layouts/AdminLayout";

function App() {


  return (
    <>
     <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<ClientProducts />} />
          <Route path="products">
            <Route index element={<ClientProducts />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
      
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/addproduct" element={<AddProducts />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          
      
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
