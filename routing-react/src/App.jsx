// import Footer from "./components/Client/layout/Footer";
import Home from "./components/Client/pages/Home";
import About from "./components/Client/pages/About";
import Contact from "./components/Client/pages/Contact";
import Products from "./components/Client/pages/Products";
import ProductDetails from "./components/Client/pages/ProductDetails";
// import Header from "./components/Client/layouts/Header";
import NotFound from "./components/NotFound"
import Dashboard from "./components/Admin/pages/Dashboard";
import Product from "./components/Admin/pages/Products";
import Users from "./components/Admin/pages/Users";
import { Route, Routes } from "react-router-dom";
import ClientLayout from "./components/Client/layouts/ClientLayout";
import AdminLayout from "./components/Admin/layout/AdminLayout";


function App() {
  return (
    <>
      <Routes>
    
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />

          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Product />} />
          <Route path="admin/products/:id" element={<ProductDetails />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;