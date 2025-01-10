import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import "./App.css";

import HeaderLayout from "./layouts/HeaderLayout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Wishlist from "./pages/Wishlist";

import { ThemeContext } from "./context/ThemeProvider/index";
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      
      <h1>Context and Dark mode</h1>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
