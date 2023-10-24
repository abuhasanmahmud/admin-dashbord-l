import Order from "@/app/backend/model/order.model";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server";

// get all orders
export const GET = async (req: NextRequest) => {
  connectDB();
  try {
    // get orders from the server
    const orders = await Order.find();
    if (orders.length <= 0) return NextResponse.json({ error: "order not found" });

    return NextResponse.json({ message: "successfully get all orders", orders }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "testing backend", error }, { status: 404 });
  }
};

// post request for orders post | save a orders in database
export const POST = async (req: NextRequest) => {
  connectDB();
  const data = await req.json();
  try {
    const newOrder = new Order({
      // set every value individually
      name: data.name,
      price: data.price,
      des: data.des,
      Order: data.Order,
    });
    const order = await newOrder.save();
    return NextResponse.json({ message: "success", order });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
};
