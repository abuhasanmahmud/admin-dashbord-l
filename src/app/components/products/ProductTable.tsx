"use client";
import { usePathname } from "next/navigation";
import { RiDeleteBin5Fill } from "react-icons/ri";
const ProductTable = ({
  products,
  handelProductUpdata,
  setIsDeleteModal,
  setProductId,
  setProductDrawer,
  setProductDetails,
}: any) => {
  const path = usePathname();
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Products</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all Products. You can add new products, edit or delete existing ones.
            </p>
          </div>

          {path === "/products" && (
            <>
              <div>
                <button
                  onClick={(e) => {
                    setProductDrawer(true), setProductDetails({});
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
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className=" py-3.5 mx-2 text-sm font-normal text-gray-700">
                        <span>Image</span>
                      </th>
                      <th scope="col" className=" py-3.5 text-center text-sm font-normal text-gray-700">
                        <span>Name</span>
                      </th>
                      <th scope="col" className=" py-3.5 text-left text-sm font-normal text-gray-700">
                        Category
                      </th>
                      <th scope="col" className=" py-3.5 text-center text-sm font-normal text-gray-700">
                        Price
                      </th>

                      <th scope="col" className=" py-3.5 text-center text-sm font-normal text-gray-700">
                        Status
                      </th>

                      {path === "/products" ? (
                        <>
                          {" "}
                          <th
                            scope="col"
                            className=" py-3.5 text-center text-sm font-normal text-gray-700"
                          >
                            Action
                          </th>{" "}
                        </>
                      ) : (
                        <>
                          {" "}
                          <th
                            scope="col"
                            className=" py-3.5 text-center text-sm font-normal text-gray-700"
                          >
                            Quantity
                          </th>
                        </>
                      )}
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {products?.map((item) => (
                      <tr key={item.name}>
                        <td className="whitespace-nowrap text-center mx-2  py-4">
                          <div className="text-sm text-gray-900 flex justify-center">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src="https://i.ibb.co/g9sxg8L/lorem-ipsum-dolor-sit-amet-1.png"
                              alt=""
                            />
                          </div>
                        </td>
                        <td className="whitespace-nowrap text-center py-4">
                          <div className="text-sm text-center text-gray-900 ">{item?.name}</div>
                        </td>
                        <td className="whitespace-nowrap  py-4">
                          <div className="text-sm text-gray-900 ">{item?.category}</div>
                        </td>
                        <td className="whitespace-nowrap  py-4">
                          <div className="text-sm text-gray-900 text-center ">{item?.price}</div>
                        </td>
                        <td className="whitespace-nowrap text-center py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {item?.status}
                          </span>
                        </td>

                        {path === "/products" ? (
                          <>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right flex justify-center  items-center gap-2 text-sm font-medium sm:pr-0 mt-5">
                              <a
                                onClick={() => handelProductUpdata(item)}
                                className="text-indigo-600 hover:text-indigo-900 cursor-pointer "
                              >
                                Edit<span className="sr-only"> {item.name}</span>
                              </a>

                              <a
                                onClick={() => {
                                  setIsDeleteModal(true), setProductId(item._id.toString());
                                }}
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                <RiDeleteBin5Fill className=" cursor-pointer " />
                              </a>
                            </td>
                          </>
                        ) : (
                          <>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center ">
                              {item.quantity} 00
                            </td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
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

export default ProductTable;
