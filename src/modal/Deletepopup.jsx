import React from "react";
import { AiOutlineClose } from "react-icons/ai";
//import Delete from "../../assets/images/svg/delete.svg";
const Deletepopup = ({ visible, onClose, onDelete }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-xs flex justify-center items-center z-50">
      <div className="flex border-0 rounded-2xl shadow-lg bg-white outline-none flex-col ">
        <button className="ml-auto px-4 py-3" onClick={onClose}>
          <AiOutlineClose />
        </button>
        <div className="flex justify-start items-center w-full lg:w-[500px] mb-3 lg:mb-0 h-full lg:h-[300px] px-4 lg:px-2 flex-col">
          <img alt="delete"  className="h-20 w-20 mx-auto  p-0" />
          <h2 className="font-semibold text-2xl text-center mt-2 text-gray-700">
            Do you want to delete Phone Number?
          </h2>
          <h2 className="font-normal text-center mt-2">
            If removed, you will no longer receive Text SMS of any routes.
          </h2>

          <div className="flex space-x-7 mt-4 lg:mt-12 flex-row">
            <button
              className="bg-dodger-blue border border-dodger-blue rounded-full text-white py-3 font-semibold uppercase w-[140px] lg:w-[198px]"
              onClick={onDelete}
            >
              Yes
            </button>
            <button
              className="text-dodger-blue border border-dodger-blue rounded-full py-3 font-semibold uppercase w-[140px] lg:w-[198px]"
              onClick={onClose}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deletepopup;