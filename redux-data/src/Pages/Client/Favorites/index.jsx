import { useDispatch, useSelector } from "react-redux"
import { FaHeart } from "react-icons/fa";
import { toggleFavorites } from "../../../redux/features/wishlistSlice";
import styles from './index.module.scss'; // Import the SCSS module

const Favorites = () => {
    const wishlist = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

    return (
        <div className={styles.favoritesContainer}>
            {wishlist.items.length === 0 ? (
                <h2 className={styles.emptyMessage}>Wishlist is empty!</h2>
            ) : (
                wishlist.items.map((q) => {
                    return (
                        <div key={q.id} className={styles.item}>
                            <span className={styles.itemName}>{q.name}</span>
                            <button
                                className={styles.favoriteButton}
                                onClick={() => { dispatch(toggleFavorites(q)) }}
                            >
                                <FaHeart />
                            </button>
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default Favorites;
