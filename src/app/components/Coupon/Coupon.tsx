"use client"
import React from "react";
import CouponTable from "./CouponTable";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { useMyContext } from "../context/myContext";
import DeleteModal2 from "../modal/DeleteModal2";
import CouponDrawer from "../drawer/CouponDrawer";
const Coupon =  ({ coupons }) => {
  const [isOpenCouponDrawer, setIsOpenCouponDrawer] = useState(false);
  const [couponDetails, setCouponDetails] = useState({});
  const [couponId, setCouponId] = useState("");

  // console.log("product", products);
  const { isDeleteModal, setIsDeleteModal } = useMyContext();

  // console.log("delete modal", isDeleteModal);

  const handelCouponUpdate = (item: any) => {
    setCouponDetails(item);
    setIsOpenCouponDrawer(true);
  };

  const path = usePathname();
  return (
    <>
      <CouponDrawer
        isOpenCouponDrawer={isOpenCouponDrawer}
        setIsOpenCouponDrawer={setIsOpenCouponDrawer}
        couponDetails={couponDetails}
      />
      <DeleteModal2 couponId={couponId} />
      <CouponTable
        coupons={coupons}
        setIsOpenCouponDrawer={setIsOpenCouponDrawer}
        setCouponId={setCouponId}
        handelCouponUpdate={handelCouponUpdate}
        setIsDeleteModal={setIsDeleteModal}
        setCouponDetails={setCouponDetails}
      />
    </>
  );
};

export default Coupon;
