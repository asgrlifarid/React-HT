import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { FavoritesContext } from "../../context/WishlistProvider/index";

import styles from "./index.module.css"
import ChangeTheme from '../../components/ChangeTheme/index'

const Header = () => {
    const { favorites } = useContext(FavoritesContext);
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/catalog">
                            Catalog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/wishlist" className={styles.navLink}>
                            Favorites <sup className={styles.favoriteCount}>{favorites.length}</sup>
                        </NavLink>
                    </li>
                    
                    <li>
                        <ChangeTheme />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;