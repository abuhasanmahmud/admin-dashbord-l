import Order from "@/app/backend/model/order.model";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server";
interface Params {
  params: {
    orderId: string;
  };
}

//===== Delete single order by id =========
export const DELETE = async (req: NextRequest, { params }: Params) => {
  connectDB();
  try {
    const { orderId } = params;
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return NextResponse.json({ error: "order not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "order deleted successfully", status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(`Deleting Error: ${error.message}`));
  }
};

// ======== update single order  ============
export const PATCH = async (req: NextRequest, { params }: Params) => {
  connectDB();

  const updateOrderData = await req.json();
  const { orderId } = params;
  // console.log(orderId, updateOrderData);

  try {
    // Find the existing order
    const existingOrder = await Order.findById(orderId);
    if (!existingOrder) {
      return new Response("blog not found", { status: 404 });
    }
    existingOrder.name = updateOrderData.name;
    existingOrder.order = updateOrderData.order;
    existingOrder.des = updateOrderData.des;
    existingOrder.price = updateOrderData.price;
    await existingOrder.save();
    return NextResponse.json({ message: "order Update successfully", status: 200 });
  } catch (error: any) {
    return new Response(`Updating Error: ${error.message}`);
  }
};

//======== single order details =========
export const GET = async (req: NextRequest, { params }: Params) => {
  console.log("hit get in signle blog details");

  connectDB();
  try {
    const { orderId } = params;
    const orderDetails = await Order.findOne({ _id: orderId });
    if (!orderDetails) {
      return NextResponse.json({ error: "orderDetails not found" }, { status: 404 });
    }
    return NextResponse.json({ orderDetails: orderDetails }, { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(`orderDetails Error: ${error.message}`));
  }
};
