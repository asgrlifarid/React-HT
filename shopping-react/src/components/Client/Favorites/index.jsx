import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { FavoritesContext } from "../../../context/FavoritesContext";

const Favorites = () => {
  const { favorites, toggleFavorites } = useContext(FavoritesContext);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {favorites.length > 0 ? (
          favorites.map((p) => (
            <div className={styles.card} key={p.id}>
              <div className={styles.imageWrapper}>
                <img alt={p.title} src={p.image} className={styles.image} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.title}>
                  <Link to={`${p.id}`} className={styles.link}>
                    {p.title}
                  </Link>
                </h3>
                <p className={styles.price}>Price: ${p.price}</p>
                <p className={styles.description}>
                  {p.description.slice(0, 50)}...
                </p>
                {/* Heart Icon Toggle */}
                <div
                  className={styles.heartIcon}
                  onClick={() => toggleFavorites(p)} // Trigger toggle on click
                >
                  {favorites.some((item) => item.id === p.id) ? (
                    <FaHeart className={styles.filledHeart} />
                  ) : (
                    <FaRegHeart className={styles.regularHeart} />
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noFavorites}>You have no favorites yet!</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
