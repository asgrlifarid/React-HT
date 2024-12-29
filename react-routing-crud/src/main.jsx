
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import { FavoritesProvider } from './components/context/FavoritesContext.jsx';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
  <BrowserRouter>


    <FavoritesProvider>
      <App />
    </FavoritesProvider>


  </BrowserRouter>
  </HelmetProvider>
  ,
)
