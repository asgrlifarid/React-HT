import { Routes, Route } from "react-router-dom";

import Home from './Pages/Client/Home'
import Favorites from './Pages/Client/Favorites'
import AddProduct from './Pages/Client/AddProduct'

import ClientLayout from "./Layout/ClientLayout/ClientLayout";
import Categories from "./Pages/Client/Products";
import CategoryDetails from "./Pages/Client/ProductDetails";


function App() {

  return (
    <Routes>
     
      <Route path="/" element={<ClientLayout />}>
        
        <Route index element={<Home />} />
        
       
        <Route path="/products" element={<Categories />} />
        
       
        <Route path="/:id" element={<CategoryDetails />} />

        
        <Route path="/favorites" element={<Favorites />} />
        
        
        <Route path="/addproduct" element={<AddProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
