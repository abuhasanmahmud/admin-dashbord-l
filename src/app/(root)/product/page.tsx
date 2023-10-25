import Products from "@/app/components/products/Products";
import Sidebar from "@/app/components/shared/Sidebar";
import React from "react";
import { getAllProducts } from "@/app/controllers/product.controller";

const page = async () => {
  const allProducts = await getAllProducts();
  return (
    <>
      <Sidebar component={<Products allProducts={allProducts} />} />
    </>
  );
};

export default page;
