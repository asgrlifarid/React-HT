import React from "react";
import { NavLink } from "react-router";
import styles from "./index.module.scss";

const AdminHeader = () => {
  return (
    <header>
      <div>
        <div className={styles.header}>
          <div>
            <h2>Shopping Center</h2>
          </div>
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/admin"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/products"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/addproduct"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Add Product
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="/favorites"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Favorites
                  </NavLink>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
