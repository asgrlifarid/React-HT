import { FaInfoCircle } from "react-icons/fa";
import styles from "./index.module.scss";

const ProductCard = ({ product }) => {
  const {
    title,
    description,
    price,
    image: thumbnail,
    rating,
  } = product;

  return (
    <div className={styles.card}>
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
            <span className={styles.ratingCount}>({rating.count} reviews)</span>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <span>
          <FaInfoCircle />
        </span>
 
      </div>
      <button className={styles.button}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
