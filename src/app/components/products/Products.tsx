import React from "react";
import ProductTable from "./ProductTable";
import { getAllProducts } from "@/app/controllers/product.controller";

const Products = async () => {
  const products = await getAllProducts();
  return (
    <>
      <ProductTable products={products} />
    </>
  );
};

export default Products;
