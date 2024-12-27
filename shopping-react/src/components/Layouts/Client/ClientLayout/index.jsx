import React, { useContext } from "react";
import Header from "../../../Client/Header"; 
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../../../../context/ThemeContext";
import { Form } from "react-bootstrap"; 

const ClientLayout = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); 

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        transition: "all 0.3s ease",
        minHeight: "100vh",
      }}
    >
     
      <Header />

    
      <div style={{ padding: "10px", textAlign: "center" }}>
        <Form>
          <Form.Check
            type="switch"
            id="theme-switch"
            label="Toggle Dark Mode"
            checked={theme === "dark"}k
            onChange={toggleTheme} 
          />
        </Form>
      </div>

    
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ClientLayout;
