import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import axios from "axios";
import { BASE_URL } from "../../../services";
import styles from "./index.module.scss";

const Products = () => {
  const [products, setProducts] = useState(null); 
  const [searchProd, setSearchProd] = useState(""); 
  const [filteredProd, setFilteredProd] = useState([]);


  const getProducts = async () => {
    try {
      const { data } = await axios(`${BASE_URL}products`);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(); 
  }, []);

  useEffect(() => {
    if (products) {
      
      if (searchProd === "") {
        setFilteredProd(products);
      } else {
       
        const filtered = products.filter(
          (product) =>
            product.title.toLowerCase().includes(searchProd.toLowerCase()) ||
            product.description.toLowerCase().includes(searchProd.toLowerCase())
        );
        setFilteredProd(filtered);
      }
    }
  }, [searchProd, products]);

  return (
    <div>
      <div className={styles.first}>
        <input
          type="search"
          placeholder="search products ..."
          onChange={(e) => setSearchProd(e.target.value)} 
          value={searchProd}
        />
        {/* <select name="" id=""></select> */}
      </div>
      <div className={styles.second}>
        {filteredProd && filteredProd.length > 0 ? (
          filteredProd.map((p) => (
            <div className={styles.card} key={p.id}>
              <div>
                <img src={p.image} alt={p.title} className={styles.imagee} />
              </div>
              <div className={styles.textarea}>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.desc}>{p.description}</p>
                <span className={styles.price}>${p.price}</span>
              </div>
              <div className={styles.bottom}>
                <div className={styles.icons}>
                  <FaRegHeart className={styles.emptyHeart} />
                  <FaCircleInfo />
                </div>
                <div className={styles.buttons}>
                  <button className={styles.button}>Add to Basket</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Not products found</p> 
        )}
      </div>
    </div>
  );
};

export default Products;
