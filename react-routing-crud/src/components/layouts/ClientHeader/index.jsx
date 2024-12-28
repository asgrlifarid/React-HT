import { NavLink } from "react-router-dom";
import styles from "./index.module.scss"; 

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Contact
                </NavLink>
              </li>
              
              <li className={styles.navItem}>
                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Favorites
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Products
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
