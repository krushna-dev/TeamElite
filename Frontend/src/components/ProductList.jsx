import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch list of products when component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      // After deletion, fetch products again to update the list
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <ul>
        {products.map((product) => (
          <li
            key={product._id}
            className="bg-gray-100 rounded-md p-4 mb-4 flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-semibold">{product.name}</p>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-gray-600">Price: ${product.price}</p>
            </div>
            <button
              onClick={() => deleteProduct(product._id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
