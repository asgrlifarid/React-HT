import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "../../../context/FavoritesContext"; 
import styles from "./index.module.scss"; 

const Favorites = () => {
  const { favorites, toggleFavorites } = useFavorites();


  const handleToggleFavorite = (product) => {
    toggleFavorites(product);
  };

  return (
    <div>
      <h1>Your Favorite Products</h1>
      <div className={styles.cardsContainer}>
        {favorites.length === 0 ? (
          <p>No products in your favorites list.</p>
        ) : (
          favorites.map((product) => {
            const {
              id,
              title,
              description,
              price,
              image: thumbnail,
              rating = { rate: 0, count: 0 },
            } = product;

            return (
              <div key={id} className={styles.card}>
                <div className={styles.imageContainer}>
                  <img src={thumbnail} alt={title} className={styles.image} />
                </div>
                <div className={styles.content}>
                  <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                  </div>
                  <p className={styles.description}>{description}</p>
                  <div className={styles.priceRating}>
                    <span className={styles.price}>${price}</span>
                    <div className={styles.rating}>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={styles.star}>
                          {i < rating.rate ? "★" : "☆"}
                        </span>
                      ))}
                      <span className={styles.ratingCount}>
                        ({rating.count} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.footer}>
                  <span className={styles.favoriteIcon}>
                    {favorites.some((fav) => fav.id === product.id) ? (
                      <FaHeart
                        color="red"
                        onClick={() => handleToggleFavorite(product)}
                      />
                    ) : (
                      <FaRegHeart
                        onClick={() => handleToggleFavorite(product)}
                      />
                    )}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Favorites;
