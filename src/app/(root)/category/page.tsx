import Category from "@/app/components/Category/Category";
import Sidebar from "@/app/components/shared/Sidebar";
import { getAllCategory } from "@/app/controllers/category.controller";
import React from "react";

const Page = async () => {
  const categorys = await getAllCategory();
  return (
    <div>
      <Sidebar component={<Category categorys={categorys} />} />
    </div>
  );
};

export default Page;
