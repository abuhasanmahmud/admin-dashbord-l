import Coupon from "@/app/components/Coupon/Coupon";
import Sidebar from "@/app/components/shared/Sidebar";
import { getAllCoupons } from "@/app/controllers/coupon.controller";
import React from "react";

const page = async () => {
  const coupons = await getAllCoupons();
  return (
    <>
      <Sidebar component={<Coupon coupons={coupons} />} />
    </>
  );
};

export default page;
