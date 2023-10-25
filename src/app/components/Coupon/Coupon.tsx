import React from "react";
import CouponTable from "./CouponTable";

const Coupon = async ({ coupons }) => {
  return (
    <>
      <CouponTable coupons={coupons} />
    </>
  );
};

export default Coupon;
