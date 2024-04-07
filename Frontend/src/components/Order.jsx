import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const deleteOrder = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/orders/${id}`);
      const response = await axios.get("http://localhost:5000/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Order List</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order) => (
          <li
            key={order._id}
            className="border p-4 rounded-md shadow-md flex flex-col"
          >
            <div className="mb-2">Order ID: {order._id}</div>
            <div className="mb-2">Status: {order.status}</div>
            <div className="mb-2">Total Amount: ${order.totalAmount}</div>
            <button
              onClick={() => deleteOrder(order._id)}
              className="bg-red-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
