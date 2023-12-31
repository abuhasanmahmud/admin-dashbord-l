"use client";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import { useMyContext } from "../context/myContext";
import { deleteCategory } from "@/app/controllers/category.controller";
import { deleteProduct } from "@/app/controllers/product.controller";
import { useRouter } from "next/navigation";
import { deleteCoupon } from "@/app/controllers/coupon.controller";
import { deleteStaff } from "@/app/controllers/staff.controller";

const DeleteModal2 = ({ productId, categoryId, staffId, couponId }: any) => {
  const router = useRouter();
  const { isDeleteModal, setIsDeleteModal } = useMyContext();
  const cancelButtonRef = useRef(null);

  const handelDelete = async () => {
    //delete categroy
    if (categoryId !== undefined) {
      const res = await deleteCategory(categoryId);
      // console.log("res in delete modal", res);
      if (res?.status === 200) {
        toast.success(`${res?.message}`);
        setIsDeleteModal(false);
        router.refresh();
      } else {
        toast.error(`${res?.error}` || "something error is happend");
      }
    }

    //delete product
    else if (productId !== undefined) {
      const res = await deleteProduct(productId);
      // console.log("res in delete modal", res);
      if (res?.status === 200) {
        toast.success(`${res?.message}`);
        setIsDeleteModal(false);
        router.refresh();
      } else {
        toast.error("errors");
      }
    }

    //delete staff
    else if (staffId !== undefined) {
      const res = await deleteStaff(staffId);
      console.log("res in delete modal", res);
      if (res?.status === 200) {
        toast.success(`${res?.message}`);
        setIsDeleteModal(false);
        router.refresh();
      } else {
        toast.error(`${res?.error?.message}` || "something is error here");
      }
    }

    //Delete coupon
    else if (couponId !== undefined) {
      const res = await deleteCoupon(couponId);
      console.log("res in delete modal", res);
      if (res?.status === 200) {
        toast.success(`${res?.message}` || "Delete");
        setIsDeleteModal(false);
        router.refresh();
      } else {
        toast.error(`${res?.error?.message}` || "Something worng here");
      }
    }
  };

  return (
    <Transition.Root show={isDeleteModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setIsDeleteModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <RiDeleteBin5Fill />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      Delete This Product
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete this product? All of your data will be
                        permanently removed from our servers forever. This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => handelDelete()}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setIsDeleteModal(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DeleteModal2;
