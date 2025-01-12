import React from "react";
import {
  useDeleteProductByIdMutation,
  useGetProductsQuery,
  useGetProductByIdQuery,
} from "../../../redux/services/productsApi";
import Swal from "sweetalert2";

const AdminProducts = () => {
  const { data, isLoading, isError, refetch } = useGetProductsQuery();

  const [ deleteProductById, deleteResponse ] = useDeleteProductByIdMutation();
  const handleDelete =  (productId) => {
    
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
           deleteProductById(productId);
      console.log(deleteResponse);
      refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
      
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Product List</h2> 
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Explaination</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data.map((product) => (
              <tr key={product._id}>
                <td>
                  <img
                    src={product.imgURL}
                    alt={product.title}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.explaination}</td>

                <td>
                  <button
                    onClick={() => {
                      handleDelete(product._id);
                    }}
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
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
