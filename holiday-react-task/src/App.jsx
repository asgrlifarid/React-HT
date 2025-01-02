import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import ClientLayout from "./layouts/Clientlayout";
import Home from "./pages/Clientpages/Home";
import Products from "./pages/Clientpages/Products";
import Basket from "./pages/Clientpages/Basket";
import Favorites from "./pages/Clientpages/Favorites";
import NotFound from "./components/NotFound404";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Adminpages/Daashboard";
import AddProducts from "./pages/Adminpages/AddProducts";
import AdminProducts from "./pages/Adminpages/AdminProducts";
import ProductDetails from "./pages/Clientpages/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="basket" element={<Basket />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="products">
            <Route index element={<Products />} />
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
  );
}

export default App;
