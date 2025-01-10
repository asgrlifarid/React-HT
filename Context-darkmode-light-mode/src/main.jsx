
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import FavoritesProvider from './context/WishlistProvider/index.jsx'
import ThemeProvider from './context/ThemeProvider'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <FavoritesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesProvider>
  </ThemeProvider>
)
