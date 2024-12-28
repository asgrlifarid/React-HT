
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import FavoritesProvider from './components/context/FavoritesContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>


    <FavoritesProvider>
      <App />
    </FavoritesProvider>


  </BrowserRouter>

  ,
)
