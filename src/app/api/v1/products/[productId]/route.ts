import Product from "@/app/backend/model/product.model";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server";
interface Params {
  params: {
    productId: string;
  };
}

//===== Delete single post by id =========
export const DELETE = async (req: NextRequest, { params }: Params) => {
  connectDB();
  try {
    const { productId } = params;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(`Deleting Error: ${error.message}`));
  }
};

// ======== update single product  ============
export const PATCH = async (req: NextRequest, { params }: Params) => {
  connectDB();

  const updateProductData = await req.json();
  const { productId } = params;
  // console.log(productId, updateProductData);

  try {
    // Find the existing post
    const existingProduct = await Product.findById(productId);
    if (!existingProduct) {
      return new Response("blog not found", { status: 404 });
    }
    existingProduct.name = updateProductData.name;
    existingProduct.category = updateProductData.category;
    existingProduct.des = updateProductData.des;
    existingProduct.price = updateProductData.price;
    await existingProduct.save();
    return NextResponse.json({ message: "Product Update successfully", status: 200 });
  } catch (error: any) {
    return new Response(`Updating Error: ${error.message}`);
  }
};

//======== single blog details =========
export const GET = async (req: NextRequest, { params }: Params) => {
  console.log("hit get in signle blog details");

  connectDB();
  try {
    const { productId } = params;
    const ProductDetails = await Product.findOne({ _id: productId });
    if (!ProductDetails) {
      return NextResponse.json({ error: "ProductDetails not found" }, { status: 404 });
    }
    return NextResponse.json({ ProductDetails: ProductDetails }, { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(`ProductDetails Error: ${error.message}`));
  }
};
