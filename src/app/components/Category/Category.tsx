import React from "react";
import CategoryTable from "./CategoryTable";
import { getAllCategory } from "@/app/controllers/category.controller";

const Category = async () => {
  const allCategory = await getAllCategory();
  // console.log("all Category", allCategory);
  return (
    <div>
      <CategoryTable categorys={allCategory} />
    </div>
  );
};

export default Category;
