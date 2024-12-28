import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss"; 
const AdminHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to="/admin/addproduct"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Add Product
                </NavLink>
              </li>
              
              <li className={styles.navItem}>
                <NavLink
                  to="/admin/products"
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
  )
}

export default AdminHeader