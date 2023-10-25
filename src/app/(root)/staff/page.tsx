import Staffs from "@/app/components/Staffs/Staffs";
import Sidebar from "@/app/components/shared/Sidebar";
import { getAllStaffs } from "@/app/controllers/staff.controller";
import React from "react";

const page = async () => {
  const staffs = await getAllStaffs();
  return (
    <>
      <Sidebar component={<Staffs staffs={staffs} />} />
    </>
  );
};

export default page;
