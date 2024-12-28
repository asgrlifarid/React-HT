import { useState } from 'react';
import Swal from 'sweetalert2'; 


import styles from './index.module.scss';

export default function BananaForm() {

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    img: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await controller.addNewData(endpoints.products, formData);
      if (response && response.status === 201) {
      
        Swal.fire({
          icon: 'success',
          title: 'Product Added',
          text: 'The product has been added successfully!',
        });

      
        setFormData({
          title: '',
          price: '',
          description: '',
          img: '',
        });
      } else {
        
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      console.error('Failed to add product:', error);

     
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'There was an error adding the product. Please try again later.',
      });
    }
  };

  return (
    <form className={styles.bananaForm} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Add a Product</h2>
      
      <div className={styles.inputGroup}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="0"
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="img">Img</label>
        <input
          type="url"
          id="img"
          name="img"
          value={formData.img}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className={styles.submitButton}>Add Product</button>
    </form>
  );
}
