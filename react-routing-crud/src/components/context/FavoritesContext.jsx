import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorites = (product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === product.id)) {
        return prevFavorites.filter((fav) => fav.id !== product.id);
      }
      return [...prevFavorites, product];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext };
