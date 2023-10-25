"use client";

import ProductTable from "./ProductTable";

import { useState } from "react";
import ProductDrawer from "../drawer/productDrawer";
import { usePathname } from "next/navigation";
import { useMyContext } from "../context/myContext";
import DeleteModal2 from "../modal/DeleteModal2";

const Products = ({ allProducts }: any) => {
  const path = usePathname();
  console.log("products", allProducts);
  const [productDrawer, setProductDrawer] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const [productId, setProductId] = useState("");

  const { setIsDeleteModal } = useMyContext();

  const handelProductUpdata = (item: any) => {
    setProductDetails(item);
    setProductDrawer(true);
  };
  return (
    <>
      <ProductDrawer
        productDrawer={productDrawer}
        setProductDrawer={setProductDrawer}
        productDetails={productDetails}
      />
      <DeleteModal2 productId={productId} />
      <ProductTable
        products={allProducts}
        handelProductUpdata={handelProductUpdata}
        setIsDeleteModal={setIsDeleteModal}
        setProductId={setProductId}
        setProductDetails={setProductDetails}
        setProductDrawer={setProductDrawer}
      />
    </>
  );
};

export default Products;
