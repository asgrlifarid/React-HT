import React from 'react'
import { NavLink } from "react-router";
import styles from "./index.module.scss";

const AdminHeader = () => {
  return (
    <header>
      <div>
        <div className={styles.header}>
          <div className={styles.texxt}>
            <h2>Shopping Center</h2>
          </div>
          <div className={styles.links}>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/basket"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Basket
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/favorites"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Favorites
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
