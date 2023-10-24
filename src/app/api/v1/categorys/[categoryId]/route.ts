import Category from "@/app/backend/model/category.model";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server";
interface Params {
  params: {
    categoryId: string;
  };
}

//===== Delete single category by id =========
export const DELETE = async (req: NextRequest, { params }: Params) => {
  connectDB();
  try {
    const { categoryId } = params;
    const deletedCategory = await Category.findByIdAndDelete(categoryId);
    if (!deletedCategory) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Category deleted successfully", status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(`Deleting Error: ${error.message}`));
  }
};

// ======== update single Category  ============
export const PATCH = async (req: NextRequest, { params }: Params) => {
  connectDB();

  const updateCategoryData = await req.json();
  const { categoryId } = params;
  console.log(categoryId, updateCategoryData);

  try {
    // Find the existing category
    const existingCategory = await Category.findById(categoryId);
    if (!existingCategory) {
      return new Response("blog not found", { status: 404 });
    }
    existingCategory.title = updateCategoryData.title;
    existingCategory.type = updateCategoryData.type;
    existingCategory.des = updateCategoryData.des;
    existingCategory.status = updateCategoryData.status;
    await existingCategory.save();
    return NextResponse.json({ message: "Category Update successfully", status: 200 });
  } catch (error: any) {
    return new Response(`Updating Error: ${error.message}`);
  }
};

//======== single category details =========
export const GET = async (req: NextRequest, { params }: Params) => {
  console.log("hit get in signle blog details");

  connectDB();
  try {
    const { categoryId } = params;
    const CategoryDetails = await Category.findOne({ _id: categoryId });
    if (!CategoryDetails) {
      return NextResponse.json({ error: "CategoryDetails not found" }, { status: 404 });
    }
    return NextResponse.json({ CategoryDetails: CategoryDetails }, { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(`CategoryDetails Error: ${error.message}`));
  }
};
