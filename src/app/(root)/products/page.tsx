import Products from "@/app/components/products/Products";
import Sidebar from "@/app/components/shared/Sidebar";
import React from "react";

const page = () => {
  return <Sidebar component={<Products />} />;
};

export default page;
