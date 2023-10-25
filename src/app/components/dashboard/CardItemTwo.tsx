import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
const CardItemTwo = ({ title, Icon, amount, quantity }: any) => {
  return (
    <>
      <div className="max-w-md  bg-gray-100 shadow-lg rounded-lg py-4 flex flex-col">
        <div className="flex gap-4 items-center justify-around	">
          <div>
            <h2 className=" text-lg font-semibold">{title}</h2>
            <p className="text-gray-600">
              <small>(Last 30 Days)</small>{" "}
            </p>
          </div>
          <div>
            <Icon size={26} />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {amount && <p className="text-xl font-medium">{amount}</p>}
          <p className="text-xl font-medium">{quantity}</p>
        </div>
      </div>
    </>
  );
};

export default CardItemTwo;
