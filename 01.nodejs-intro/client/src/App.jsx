import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./App.css"; // CSS dosyasını içe aktarıyoruz

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const BASE_URL = "http://localhost:8080/api";

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios(`${BASE_URL}/products`);
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (pId) => {
    try {
      const res = await axios.delete(`${BASE_URL}/products/${pId}`);

      if (res.status === 200) {
        setProducts(products.filter((p) => p.id !== pId));
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "The product has been deleted.",
        });
      } else {
        throw new Error("failed to delete");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="all">
      <div className="app-container">
        <h1>Product List</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="product-list">
            {products.length > 0 &&
              products.map((p) => (
                <li key={p.id} className="product-item">
                  <span className="product-title">{p.title}</span>
                  <button
                    className="delete-button"
                    onClick={() => {
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
                          handleDelete(p.id);
                        }
                      });
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
