"use client";

import ProductTable from "./ProductTable";
import { useState, useEffect, Fragment } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Combobox } from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";
import { useMyContext } from "../context/myContext";
import DeleteModal2 from "../modal/DeleteModal2";
import ProductDrawer from "../drawer/ProductDrawer";
import { categorys } from "@/app/utils/data";
import { Listbox, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Products = ({ allProducts }: any) => {
  const router = useRouter();
  const path = usePathname();
  // console.log("products", allProducts);
  const [isProductDrawerOpen, setIsProductDrawerOpen] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const [productId, setProductId] = useState("");
  const { setIsDeleteModal } = useMyContext();
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  //handel product update
  const handelProductUpdata = (item: any) => {
    setProductDetails(item);
    setIsProductDrawerOpen(true);
  };

  //handle shorting by category
  const [shotvalue, setShotValue] = useState("");
  const sv = shotvalue?.toString().replaceAll(" ", "").toLowerCase();
  console.log("sv", sv);

  if (shotvalue) {
    if (sv === "popularity") {
      filteredProducts?.sort((a, b) => (a.numOfReviews > b.numOfReviews ? 1 : -1));
    } else if (sv === "a_zorder") {
      filteredProducts?.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (sv === "z_aorder") {
      filteredProducts?.sort((a, b) => (b.name > a.name ? 1 : -1));
    } else if (sv === "low_highprice") {
      filteredProducts?.sort((a, b) => (Number(a.price) > Number(b.price) ? 1 : -1));
    } else if (sv === "high_lowprice") {
      filteredProducts?.sort((a, b) => (Number(b.price) > Number(a.price) ? 1 : -1));
    }
  }

  //Handel product searching
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      const newFilteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(newFilteredProducts);
    }
  };

  useEffect(() => {
    if (searchText.length === 0) {
      console.log("search text empty");
      setFilteredProducts(allProducts);
    }
  }, [searchText, allProducts]);

  console.log("allProducts", allProducts, "filter product=", filteredProducts);

  return (
    <>
      <ProductDrawer
        isProductDrawerOpen={isProductDrawerOpen}
        setIsProductDrawerOpen={setIsProductDrawerOpen}
        productDetails={productDetails}
      />
      <DeleteModal2 productId={productId} />

      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="basis-1/2">
            <h2 className="text-lg font-semibold">Products</h2>
          </div>

          {path === "/product" && (
            <>
              <div>
                <button
                  onClick={(e) => {
                    setIsProductDrawerOpen(true), setProductDetails({});
                  }}
                  type="button"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add new product
                </button>
              </div>
            </>
          )}
        </div>
        <div className="flex gap-4 items-center mt-2 flex-col sm:flex-row py-3">
          <div className="basis-1/2">
            <div className=" relative ">
              <input
                type="text"
                placeholder="Search products"
                value={searchText}
                onKeyPress={handleSearch}
                onChange={(e) => setSearchText(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-7"
              />
              <p className="absolute top-2 left-1">
                <FiSearch size={20} />
              </p>
              {searchText.length !== 0 && (
                <p onClick={(e) => setSearchText("")} className="absolute top-3 right-2 cursor-pointer">
                  <GrClose size={15} />
                </p>
              )}
            </div>
          </div>

          <div className="basis-1/2">
            <div>
              <select
                id="location"
                name="location"
                className=" block w-full rounded-md border-0 py-2  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                onChange={(e) => setShotValue(e.target.value)}
              >
                <option>Popularity</option>
                <option>A _ Z Order</option>
                <option>Z _ A Order</option>
                <option>Average Rating</option>
                <option>Low _ High Price</option>
                <option>High _ Low Price</option>
              </select>
            </div>
          </div>
        </div>
        <ProductTable
          products={filteredProducts}
          handelProductUpdata={handelProductUpdata}
          setIsDeleteModal={setIsDeleteModal}
          setProductId={setProductId}
        />
      </section>
    </>
  );
};

export default Products;
