import React from 'react'
import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <nav>
            {/* <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/products"}>Products</Link>
              </li>
            </ul> */}
            <ul>
              <li>
                <NavLink
                  to={"/admin"}
                  className={({ isActive }) =>
                    isActive ? "active" : "text-white"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "text-white"
                  }
                  to={"/admin/products"}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "text-white"
                  }
                  to={"/admin/users"}
                >
                  Users
                </NavLink>
              </li>
              <li>
                {/* <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "text-white"
                  }
                  to={"/users"}
                >
                  Users
                </NavLink> */}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader
