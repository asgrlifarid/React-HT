import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../../services/constant";
import controller from "../../../services";
import styles from "./index.module.scss";
import { FaInfoCircle, FaHeart, FaRegHeart } from "react-icons/fa";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import { useFavorites } from "../../../context/FavoritesContext"; 
import { Helmet } from 'react-helmet-async';


const ClientProducts = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorites } = useFavorites();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("default"); 

  const getProducts = async () => {
    try {
      const data = await controller.getAllData(endpoints.products);
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleInfoClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  useEffect(() => {
    let sortedProducts = [...products];
    if (searchQuery) {
      sortedProducts = sortedProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  }, [searchQuery, products, sortOrder]);

  const isFavorite = (productId) => {
    return favorites.some((fav) => fav.id === productId);
  };

  return (
    <div>
      <Helmet>
        <title>Ferid</title>
        <link rel="canonical" href="https://www.tacobell.com/" /> 
      </Helmet>
      <Box sx={{ flexGrow: 1 }}>
        <TextField
          label="Search Products"
          variant="outlined"
          fullWidth
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          sx={{
            marginBottom: 3,
            width: "60%",
            marginTop: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
        />

        
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <label htmlFor="sortOrder">Sort By Price: </label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={handleSortChange}
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            <option value="default">Default</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        <Grid container spacing={2}>
          {filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            filteredProducts.map((product) => {
              const {
                title,
                description,
                price,
                image: thumbnail,
                rating = { rate: 0, count: 0 },
              } = product;

              return (
                <Grid
                  size={3}
                  key={product.id}
                  display={"flex"}
                  justifyContent={"center"}
                  marginTop={"50px"}
                >
                  <div className={styles.card}>
                    <div className={styles.imageContainer}>
                      <img
                        src={thumbnail}
                        alt={title}
                        className={styles.image}
                      />
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
                          <span className={styles.ratingCount}>
                            ({rating.count} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.footer}>
                      <span onClick={() => handleInfoClick(product.id)}>
                        <FaInfoCircle />
                      </span>
                      <span
                        onClick={() => toggleFavorites(product)} 
                        className={styles.favoriteIcon}
                      >
                        {isFavorite(product.id) ? (
                          <FaHeart color="red" />
                        ) : (
                          <FaRegHeart />
                        )}
                      </span>
                    </div>
                    <button className={styles.button}>Add to Cart</button>
                  </div>
                </Grid>
              );
            })
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default ClientProducts;
