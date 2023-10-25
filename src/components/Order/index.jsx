import React from "react";

import ItemListContainer from "./ItemListContainer";
import OrderDetails from "./OrderDetails";
import OrderHeading from "./OrderHeading";

const Order = () => {
  return (
    <>
      <OrderHeading />
      <OrderDetails />
      <ItemListContainer />
    </>
  );
};

export default Order;
