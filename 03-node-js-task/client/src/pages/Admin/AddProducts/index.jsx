import React from "react";
import { useFormik } from "formik";
import styles from "./index.module.scss"; 
import { AddProdSchema } from "../../../validation/productValidation";
import {  usePostNewProductsMutation } from "../../../redux/services/productsApi";
import Swal from "sweetalert2";

export const AddProducts = () => {
    const [ addProd ] = usePostNewProductsMutation();
    
  const formik = useFormik({
    initialValues: {
      title: "",
      Explaination: "",
      imgURL: "",
    },
    validationSchema:AddProdSchema,
    onSubmit: async (values) => {
      
        
     try {
        await addProd(values)
      Swal.fire({
        title: " Product added successfully!",
        icon: "success",
        draggable: true,
      });
    formik.resetForm();
    
     } catch (error) {
        console.log(error);
        
     }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label htmlFor="title" className={styles.label}>
        Title
      </label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        className={styles.input}
      />
      {formik.errors.title && formik.touched.title && (
        <p className={styles.error} style={{ color: "red", marginBottom: 15 }}>
          {formik.errors.title}
        </p>
      )}
      <label htmlFor="Explaination" className={styles.label}>
        Explaination
      </label>
      <input
        id="Explaination"
        name="Explaination"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Explaination}
        className={styles.input}
      />
      {formik.errors.Explaination && formik.touched.Explaination && (
        <p className={styles.error} style={{ color: "red", marginBottom: 15 }}>
          {formik.errors.Explaination}{" "}
        </p>
      )}
      <label htmlFor="imgURL" className={styles.label}>
        imgURL
      </label>
      <input
        id="imgURL"
        name="imgURL"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.imgURL}
        className={styles.input}
      />
      {formik.errors.imgURL && formik.touched.imgURL && (
        <p className={styles.error} style={{ color: "red", marginBottom: 15 }}>
          {formik.errors.imgURL}
        </p>
      )}
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};
