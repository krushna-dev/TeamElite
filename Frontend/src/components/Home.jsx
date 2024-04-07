import React from "react";
import UserList from "./UserList";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import OrderList from "./Order";
import BuyProduct from "./BuyProduct";

const Home = () => {
  return (
    <div>
      <UserList />
      <ProductList />
      <AddProduct />
      <BuyProduct />
      <OrderList/>
    </div>
  );
};

export default Home;
