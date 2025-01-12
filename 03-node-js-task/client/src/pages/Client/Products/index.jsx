import React from 'react'
import { useGetProductsQuery } from '../../../redux/services/productsApi'
import styles from "./index.module.scss"
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";

const Products = () => {

const {data ,isLoading ,isError ,refetch} = useGetProductsQuery();
console.log(data);


  return (
    <div style={{ paddingTop: 200 }} className={styles.firstDiv}>
      {isLoading && <h1>Loading ...</h1>}
      {isError && <h1> Error Taken</h1>}
      {data &&
        data.data.map((p) => (
          <div className={styles.card} key={p._id}>
            <div>
              <img src={p.imgURL} alt="" className={styles.image} />
            </div>
            <div>
              <h2 className={styles.heading}>{p.title} </h2>
              <p className={styles.text}>{p.explaination}</p>
            </div>
            <div className={styles.buttons}>
              <button className={styles.button}>
                <FaHeart />
              </button>
              <button className={styles.button}>
                <CiHeart />
              </button>
              <button className={styles.button}>
                <FaShoppingBasket />
              </button>
              <button className={styles.button}>
                <FaInfo />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Products
