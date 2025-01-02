import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styles from './index.module.scss';
import controller from '../../../services';
import { endpoints } from '../../../services/constant';

export default function BananaForm() {

  const initialFormData = {
    title: '',
    price: '',
    description: '',
    img: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const notify = () => toast("Wow so easy!");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    return formData.title && formData.price && formData.description && formData.img;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await controller.addNewData(endpoints.products, formData);
        if (response && response.status === 201) {
          console.log('Product added successfully:', response.data);
          notify();
          
          // Reset form fields after successful submission
          setFormData(initialFormData);
        } else {
          console.error('Error adding product:', response);
        }
      } catch (error) {
        console.error('Failed to add product:', error);
      }
    } else {
      toast.error("Please fill in all fields!");
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
      <ToastContainer />
    </form>
  );
}
