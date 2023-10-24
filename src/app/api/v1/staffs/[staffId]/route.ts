import Staff from "@/app/backend/model/staff.model";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server";
interface Params {
  params: {
    staffId: string;
  };
}

//===== Delete single staff by id =========
export const DELETE = async (req: NextRequest, { params }: Params) => {
  connectDB();
  try {
    const { staffId } = params;
    const deletedStaff = await Staff.findByIdAndDelete(staffId);
    if (!deletedStaff) {
      return NextResponse.json({ error: "staff not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "staff deleted successfully", status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(`Deleting Error: ${error.message}`));
  }
};

// ======== update single staff  ============
export const PATCH = async (req: NextRequest, { params }: Params) => {
  connectDB();

  const updateStaffData = await req.json();
  const { staffId } = params;
  // console.log(staffId, updateStaffData);

  try {
    // Find the existing staff
    const existingStaff = await Staff.findById(staffId);
    if (!existingStaff) {
      return new Response("blog not found", { status: 404 });
    }
    existingStaff.name = updateStaffData.name;
    existingStaff.staff = updateStaffData.staff;
    existingStaff.des = updateStaffData.des;
    existingStaff.price = updateStaffData.price;
    await existingStaff.save();
    return NextResponse.json({ message: "staff Update successfully", status: 200 });
  } catch (error: any) {
    return new Response(`Updating Error: ${error.message}`);
  }
};

//======== single staff details =========
export const GET = async (req: NextRequest, { params }: Params) => {
  console.log("hit get in signle blog details");

  connectDB();
  try {
    const { staffId } = params;
    const staffDetails = await Staff.findOne({ _id: staffId });
    if (!staffDetails) {
      return NextResponse.json({ error: "staffDetails not found" }, { status: 404 });
    }
    return NextResponse.json({ staffDetails: staffDetails }, { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify(`staffDetails Error: ${error.message}`));
  }
};
