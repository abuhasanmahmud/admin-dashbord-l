"use client";
import { useMyContext } from "../context/myContext";
import { RiDeleteBin5Fill } from "react-icons/ri";

const CategoryTable = ({ categorys, handelCategoryUpdate, setCategoryId }: any) => {
  const { isDeleteModal, setIsDeleteModal } = useMyContext();

  return (
    <>
      <tbody className="divide-y divide-gray-200 bg-white">
        {categorys?.map((item) => (
          <tr key={item.name}>
            <td className="whitespace-nowrap text-center py-4">
              <div className="text-sm text-center text-gray-900 ">
                {item?._id.toString().slice(5, 10)}
              </div>
            </td>
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
              <div className="text-sm text-center text-gray-900 ">{item?.des}</div>
            </td>
            <td className="whitespace-nowrap text-center  py-4">
              <div className="text-sm text-gray-900 ">{item?.type}</div>
            </td>
            <td className="whitespace-nowrap  py-4">
              <div className="text-sm text-gray-900 text-center ">{item?.status}</div>
            </td>

            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right flex justify-center  items-center gap-2 text-sm font-medium sm:pr-0 mt-2">
              <a
                onClick={() => handelCategoryUpdate(item)}
                className="text-indigo-600 hover:text-indigo-900 cursor-pointer "
              >
                Edit<span className="sr-only"> {item.name}</span>
              </a>

              <a
                onClick={() => {
                  setIsDeleteModal(true), setCategoryId(item._id.toString());
                }}
                className="text-indigo-600 hover:text-indigo-900"
              >
                <RiDeleteBin5Fill className=" cursor-pointer " />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default CategoryTable;
