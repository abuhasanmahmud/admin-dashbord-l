import Category from "@/app/components/Category/Category";
import Sidebar from "@/app/components/shared/Sidebar";
import React from "react";

const Page = () => {
  return (
    <div>
      <Sidebar component={<Category />} />
    </div>
  );
};

export default Page;
