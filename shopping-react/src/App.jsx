import { Routes, Route } from "react-router-dom";
import "./App.css";
import ClientLayout from "./components/Layouts/Client/ClientLayout";
import Home from "./components/Client/Home";
import Products from "./components/Client/Products";
import ProductDetails from "./components/Client/ProductDetails";
import NotFound from "../../routing-react/src/components/NotFound";
import Favorites from "./components/Client/Favorites";

// Import the ThemeContext provider
import ThemeProvider from "./context/ThemeContext"; // Adjust the path to your ThemeContext file

function App() {
  return (
    // Wrapping the whole app with ThemeProvider
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
