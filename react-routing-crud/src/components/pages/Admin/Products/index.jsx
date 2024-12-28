import React, { useEffect, useState } from 'react';
import { endpoints } from '../../../services/constant';
import controller from '../../../services';
import Swal from 'sweetalert2';  

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    controller.getAllData(endpoints.products)
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  const handleDelete = (product) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete the product: ${product.title}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
       
        controller.deleteDataById(endpoints.products, product.id) 
          .then(() => {
           
            setProducts(products.filter((item) => item.id !== product.id));
            Swal.fire('Deleted!', 'The product has been deleted.', 'success');
          })
          .catch((err) => {
            console.error('Error deleting product:', err);
            Swal.fire('Error!', 'There was an issue deleting the product.', 'error');
          });
      }
    });
  };


  const handleEdit = (product) => {
    Swal.fire({
      title: 'Edit Product',
      text: `You are about to edit the product: ${product.title}`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Proceed to Edit',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Proceeding to edit:', product);
        
      }
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Product List</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '100px', height: '100px' }}
                />
              </td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>
                <button
                  onClick={() => handleDelete(product)} 
                  style={{
                    backgroundColor: '#ff4d4d',
                    color: 'white',
                    padding: '10px 15px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginRight: '10px',
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(product)} 
                  style={{
                    backgroundColor: '#4d94ff',
                    color: 'white',
                    padding: '10px 15px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
