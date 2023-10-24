import Category from "@/app/backend/model/category.model";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server";

// get all categorys
export const GET = async (req: NextRequest) => {
  connectDB();
  try {
    // get blogs from the server
    const categorys = await Category.find();
    if (categorys.length <= 0) return NextResponse.json({ error: "blog not found" });

    return NextResponse.json({ message: "successfully get all blogs", categorys });
  } catch (error) {
    return NextResponse.json({ message: "testing backend", error, status: 400 });
  }
};

// post request for categorys post | save a categorys in database
export const POST = async (req: NextRequest) => {
  connectDB();
  const data = await req.json();
  // console.log('data in category',data)
  try {
    const newCategory = new Category({
      // set every value individually
      title: data.title,
      type: data.type,
      des: data.des,
      status: data.status,
      // icon:data.icon
    });
    const category = await newCategory.save();
    return NextResponse.json({ message: "Category add success", status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
};
