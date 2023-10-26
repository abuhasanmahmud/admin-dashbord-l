"use client";
import React from "react";
import CategoryTable from "./CategoryTable";
import { useEffect, useState } from "react";
import CategoryDrawer from "../drawer/CategoryDrawer";

import DeleteModal2 from "../modal/DeleteModal2";
const Category = ({ categorys }) => {
  const [isOpenCategoryDrawer, setIsOpenCategoryDrawer] = useState(false);
  const [categoryDetails, setCategoryDetails] = useState({});
  const [categoryId, setCategoryId] = useState("");

  console.log("categoryDetails", categoryDetails);

  const handelCategoryUpdate = (item: any) => {
    setCategoryDetails(item);
    setIsOpenCategoryDrawer(true);
  };
  return (
    <>
      <CategoryDrawer
        isOpenCategoryDrawer={isOpenCategoryDrawer}
        setIsOpenCategoryDrawer={setIsOpenCategoryDrawer}
        categoryDetails={categoryDetails}
      />
      <DeleteModal2 categoryId={categoryId} />

      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Products</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all Products. You can add new products, edit or delete existing ones.
            </p>
          </div>

          <div>
            <button
              onClick={(e) => {
                setIsOpenCategoryDrawer(true), setCategoryDetails({});
              }}
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new Category
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className=" py-3.5 mx-2 text-sm font-normal text-gray-700">
                        <span>ID</span>
                      </th>
                      <th scope="col" className=" py-3.5 text-center text-sm font-normal text-gray-700">
                        <span>Icon</span>
                      </th>
                      <th scope="col" className=" py-3.5 text-center text-sm font-normal text-gray-700">
                        Description
                      </th>
                      <th scope="col" className=" py-3.5 text-center text-sm font-normal text-gray-700">
                        Type
                      </th>

                      <th scope="col" className=" py-3.5 text-center text-sm font-normal text-gray-700">
                        Published
                      </th>

                      <th scope="col" className=" py-3.5 text-center text-sm font-normal text-gray-700">
                        Action
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <CategoryTable
                    categorys={categorys}
                    setIsOpenCategoryDrawer={setIsOpenCategoryDrawer}
                    handelCategoryUpdate={handelCategoryUpdate}
                    setCategoryId={setCategoryId}
                  />
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-6">
          <a href="#" className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">&larr; Previous</span>
            <span className="block lg:hidden">&larr;</span>
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            1
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            2
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            3
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            4
          </a>
          <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">Next &rarr;</span>
            <span className="block lg:hidden">&rarr;</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Category;
