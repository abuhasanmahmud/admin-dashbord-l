import Staff from "@/app/backend/model/staff.model";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server";

// get all staffs
export const GET = async (req: NextRequest) => {
  connectDB();
  try {
    // get staffs from the server
    const staffs = await Staff.find();
    if (staffs.length <= 0) return NextResponse.json({ error: "staff not found" });

    return NextResponse.json({ message: "successfully get all staffs", staffs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "testing backend", error }, { status: 404 });
  }
};

// post request for staffs post | save a staffs in database
export const POST = async (req: NextRequest) => {
  connectDB();
  const data = await req.json();
  try {
    const newOrder = new Staff({
      // set every value individually
      name: data.name,
      price: data.price,
      des: data.des,
      Staff: data.Staff,
    });
    const staff = await newOrder.save();
    return NextResponse.json({ message: "success", staff });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
};
