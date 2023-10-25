"use client"
import React from "react";
import StaffTable from "./StaffTable";

import { RiDeleteBin5Fill } from "react-icons/ri";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { useMyContext } from "../context/myContext";
import DeleteModal2 from "../modal/DeleteModal2";
import StaffDrawer from "../drawer/StaffDrawer";

const Staffs= ({staffs}) => {
  const [isOpenStaffDrawer, setIsOpenStaffDrawer] = useState(false);
  const [staffDetails, setStaffDetails] = useState({});
  const [staffId, setStaffId] = useState("");

  // console.log("product", products);
 

  // console.log("delete modal", isDeleteModal);

  const handelStaffUpdate = (item: any) => {
    setStaffDetails(item);
    setIsOpenStaffDrawer(true);
  };
  return (
    <div>
      <StaffDrawer
        isOpenStaffDrawer={isOpenStaffDrawer}
        setIsOpenStaffDrawer={setIsOpenStaffDrawer}
        staffDetails={staffDetails}
      />
      <DeleteModal2 staffId={staffId} />
      <StaffTable staffs={staffs} handelStaffUpdate={handelStaffUpdate} setStaffId={setStaffId} setIsOpenStaffDrawer={setIsOpenStaffDrawer} setStaffDetails={setStaffDetails} />
    </div>
  );
};

export default Staffs;
