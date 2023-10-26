"use client";

import ProductTable from "./ProductTable";
import { useState, useEffect } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Combobox } from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";
import { useMyContext } from "../context/myContext";
import DeleteModal2 from "../modal/DeleteModal2";
import ProductDrawer from "./../drawer/ProductDrawer";
const people = [
  { id: 1, name: "Leslie Alexander" },
  { id: 2, name: " Alexander " },
  { id: 3, name: "p Alexander" },
  { id: 4, name: "zz Alexander" },
];
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

  //handel product update
  const handelProductUpdata = (item: any) => {
    setProductDetails(item);
    setIsProductDrawerOpen(true);
  };

  //handle filter by category
  const [query, setQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  //Handel product searching
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

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

  // console.log("allProducts", allProducts, "filter product=", filteredProducts);

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
            <div>
              <div className="mt-2 relative ">
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
                  <p
                    onClick={(e) => setSearchText("")}
                    className="absolute top-3 right-2 cursor-pointerAA"
                  >
                    <GrClose size={15} />
                  </p>
                )}
              </div>
            </div>
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
        <div className="flex gap-4 py-4 mt-2 flex-col sm:flex-row">
          <div className="basis-1/2">
            <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
              <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">
                Filter By Category
              </Combobox.Label>
              <div className="relative mt-2">
                <Combobox.Input
                  className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event) => setQuery(event.target.value)}
                  // displayValue={(person) => people?.name}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Combobox.Button>

                {filteredPeople.length > 0 && (
                  <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredPeople.map((person) => (
                      <Combobox.Option
                        key={person.id}
                        value={person}
                        className={({ active }) =>
                          classNames(
                            "relative cursor-default select-none py-2 pl-3 pr-9",
                            active ? "bg-indigo-600 text-white" : "text-gray-900"
                          )
                        }
                      >
                        {({ active, selected }) => (
                          <>
                            <span className={classNames("block truncate", selected && "font-semibold")}>
                              {person.name}
                            </span>

                            {selected && (
                              <span
                                className={classNames(
                                  "absolute inset-y-0 right-0 flex items-center pr-4",
                                  active ? "text-white" : "text-indigo-600"
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            )}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}
              </div>
            </Combobox>
          </div>

          <div className="basis-1/2">
            <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
              <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">
                Filter By Price
              </Combobox.Label>
              <div className="relative mt-2">
                <Combobox.Input
                  className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event) => setQuery(event.target.value)}
                  // displayValue={(person) => person?.name}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Combobox.Button>

                {filteredPeople.length > 0 && (
                  <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredPeople.map((person) => (
                      <Combobox.Option
                        key={person.id}
                        value={person}
                        className={({ active }) =>
                          classNames(
                            "relative cursor-default select-none py-2 pl-3 pr-9",
                            active ? "bg-indigo-600 text-white" : "text-gray-900"
                          )
                        }
                      >
                        {({ active, selected }) => (
                          <>
                            <span className={classNames("block truncate", selected && "font-semibold")}>
                              {person.name}
                            </span>

                            {selected && (
                              <span
                                className={classNames(
                                  "absolute inset-y-0 right-0 flex items-center pr-4",
                                  active ? "text-white" : "text-indigo-600"
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            )}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}
              </div>
            </Combobox>
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
