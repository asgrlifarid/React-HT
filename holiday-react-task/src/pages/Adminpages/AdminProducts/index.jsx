import React, { useEffect, useState } from "react";
import { endpoints } from "../../../services/constant";
import controller from "../../../services";

import Swal from "sweetalert2";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    controller
      .getAllData(endpoints.products)
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  const handleDelete = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete the product: ${product.title}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        controller
          .deleteDataById(endpoints.products, product.id)
          .then(() => {
            setProducts(products.filter((item) => item.id !== product.id));
            Swal.fire("Deleted!", "The product has been deleted.", "success");
          })
          .catch((err) => {
            console.error("Error deleting product:", err);
            Swal.fire(
              "Error!",
              "There was an issue deleting the product.",
              "error"
            );
          });
      }
    });
  };

  const handleEdit = (product) => {
    Swal.fire({
      title: "Edit Product",
      html: `
        <input id="swal-input-title" class="swal2-input" value="${product.title}" placeholder="Title" />
        <input id="swal-input-description" class="swal2-input" value="${product.description}" placeholder="Description" />
        <input id="swal-input-price" class="swal2-input" type="number" value="${product.price}" placeholder="Price" />
        <input id="swal-input-image" class="swal2-input" value="${product.image}" placeholder="Image URL" />
      `,
      focusConfirm: false,
      preConfirm: () => {
        const title = document.getElementById("swal-input-title").value;
        const description = document.getElementById(
          "swal-input-description"
        ).value;
        const price = parseFloat(
          document.getElementById("swal-input-price").value
        );
        const image = document.getElementById("swal-input-image").value;

        return { title, description, price, image };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedProduct = result.value;

        controller
          .editDataById(endpoints.products, product.id, updatedProduct)
          .then((updatedProductData) => {
            setProducts(
              products.map((p) =>
                p.id === product.id ? { ...p, ...updatedProductData } : p
              )
            );
            Swal.fire("Updated!", "The product has been updated.", "success");
          })
          .catch((err) => {
            console.error("Error updating product:", err);
            Swal.fire(
              "Error!",
              "There was an issue updating the product.",
              "error"
            );
          });
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
            <th>Title</th>
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
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>
                <button
                  onClick={() => handleDelete(product)}
                  style={{
                    backgroundColor: "#ff4d4d",
                    color: "white",
                    padding: "10px 15px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(product)}
                  style={{
                    backgroundColor: "#4d94ff",
                    color: "white",
                    padding: "10px 15px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
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
