
import { Routes , Route } from "react-router";
import './App.css'
import Home from './pages/Client/Home'
import ClientLayout from './layout/ClientLayout';
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Products from "./pages/Client/Products";
import ProductsDetail from "./pages/Client/ProductDetail";
import AdminProducts from "./pages/Admin/ProductTable";
import { AddProducts } from "./pages/Admin/AddProducts";
import NotFound from "./components/NotFound";

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductsDetail />} />
          </Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/products">
            <Route index element={<AdminProducts />} />
          </Route>
          <Route path="/admin/addproduct" element={<AddProducts />} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App
