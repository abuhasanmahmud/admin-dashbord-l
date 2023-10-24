import Coupon from "@/app/backend/model/coupon.model";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server";
interface Params {
  params: {
    couponId: string;
  };
}

//===== Delete single Coupon by id =========
export const DELETE = async (req: NextRequest, { params }: Params) => {
  connectDB();
  try {
    const { couponId } = params;
    const deletedCoupon = await Coupon.findByIdAndDelete(couponId);
    if (!deletedCoupon) {
      return NextResponse.json({ error: "Coupon not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Coupon deleted successfully", status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(`Deleting Error: ${error.message}`));
  }
};

// ======== update single Coupon  ============
export const PATCH = async (req: NextRequest, { params }: Params) => {
  connectDB();

  const updateCouponData = await req.json();
  const { couponId } = params;
  // console.log(couponId, updateCouponData);

  try {
    // Find the existing Coupon
    const existingCoupon = await Coupon.findById(couponId);
    if (!existingCoupon) {
      return new Response("blog not found", { status: 404 });
    }
    existingCoupon.name = updateCouponData.name;
    existingCoupon.Coupon = updateCouponData.Coupon;
    existingCoupon.des = updateCouponData.des;
    existingCoupon.price = updateCouponData.price;
    await existingCoupon.save();
    return NextResponse.json({ message: "Coupon Update successfully", status: 200 });
  } catch (error: any) {
    return new Response(`Updating Error: ${error.message}`);
  }
};

//======== single Coupon details =========
export const GET = async (req: NextRequest, { params }: Params) => {
  console.log("hit get in signle blog details");

  connectDB();
  try {
    const { couponId } = params;
    const CouponDetails = await Coupon.findOne({ _id: couponId });
    if (!CouponDetails) {
      return NextResponse.json({ error: "CouponDetails not found" }, { status: 404 });
    }
    return NextResponse.json({ CouponDetails: CouponDetails }, { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(`CouponDetails Error: ${error.message}`));
  }
};
