import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Button } from "antd";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FavoritesContext } from "../../../context/FavoritesContext";
import { BASE_URL } from "../../../services/constant";
import styles from "./index.module.scss"; // Import the CSS Module

const Products = () => {
  const [products, setProducts] = useState(null);

  // FavoritesContext'ten değer alıyoruz
  const { toggleFavorites, favorites = [] } = useContext(FavoritesContext); // defaults to [] if undefined

  // Ürünleri API'den almak için fonksiyon
  const getProducts = async () => {
    try {
      const { data } = await axios(`${BASE_URL}products`);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {products &&
          products.map((p) => {
            return (
              <div className={styles.card} key={p.id}>
                <div className={styles.imageWrapper}>
                  <img alt={p.title} src={p.image} className={styles.image} />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.title}>
                    <a href={`/${p.id}`} className={styles.link}>
                      {p.title}
                    </a>
                  </h3>
                  <p className={styles.price}>${p.price}</p>
                  <p className={styles.description}>
                    {p.description.slice(0, 50)}...
                  </p>
                  <div
                    className={styles.heartIcon}
                    onClick={() => toggleFavorites(p)}
                  >
                    {favorites.find((q) => q.id === p.id) ? (
                      <FaHeart className={styles.filledHeart} />
                    ) : (
                      <FaRegHeart className={styles.regularHeart} />
                    )}
                  </div>
                  <Button className={styles.button}>Add to Cart</Button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
