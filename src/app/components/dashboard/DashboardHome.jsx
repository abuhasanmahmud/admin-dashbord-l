"use client";

import CardItemTwo from "./CardItemTwo";
import { ImStack, ImCreditCard } from "react-icons/im";
import { FiShoppingCart, FiTruck, FiRefreshCw, FiCheck } from "react-icons/fi";
import ProductTable from "./../products/ProductTable";

const DashboardHome = ({ allProducts }) => {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <CardItemTwo title="Total Order" Icon={FiShoppingCart} amount="22345.00" />
        <CardItemTwo title="Order Pending" Icon={FiRefreshCw} amount="1234.00" />
        <CardItemTwo title="Order Processing" Icon={FiTruck} quantity="34" />
        <CardItemTwo title="Order Delivered" Icon={FiCheck} quantity="234" />
      </div>
      <div className="py-6">
        <ProductTable products={allProducts} />
      </div>
    </>
  );
};

export default DashboardHome;
