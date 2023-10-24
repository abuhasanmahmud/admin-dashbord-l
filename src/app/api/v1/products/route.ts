import Product from "@/app/backend/model/product.model";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server";

// get all products
export const GET = async (req: NextRequest) => {
  connectDB();
  try {
    // get blogs from the server
    const products = await Product.find();
    if (products.length <= 0) return NextResponse.json({ error: "blog not found" });

    return NextResponse.json({ message: "successfully get all blogs", products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "testing backend", error }, { status: 404 });
  }
};

// post request for products post | save a products in database
export const POST = async (req: NextRequest) => {
  connectDB();
  const data = await req.json();
  try {
    const newProduct = new Product({
      // set every value individually
      name: data.name,
      price: data.price,
      des: data.des,
      category: data.category,
    });
    const product = await newProduct.save();
    return NextResponse.json({ message: "success", product });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
};
