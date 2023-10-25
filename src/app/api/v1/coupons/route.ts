import Coupon from "@/app/backend/model/coupon.model";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server";

// get all coupons
export const GET = async (req: NextRequest) => {
  connectDB();
  try {
    // get blogs from the server
    const coupons = await Coupon.find();
    if (coupons.length <= 0) return NextResponse.json({ error: "blog not found" });

    return NextResponse.json({ message: "successfully get all blogs", coupons }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "testing backend", error }, { status: 404 });
  }
};

// post request for coupons post | save a coupons in database
export const POST = async (req: NextRequest) => {
  connectDB();
  const data = await req.json();
  try {
    const newCoupon = new Coupon({
      // set every value individually
      title: data.title,
      couponCode: data.couponCode,
      discountPercentage: data.discountPercentage,
    });
    const coupon = await newCoupon.save();
    return NextResponse.json({ message: "New coupon create success",status:200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
};
