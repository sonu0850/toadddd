import React, { useEffect, useRef, useState } from "react";

import DetailForm from "../Components/Dashboard/Form";
import { useSelector } from "react-redux";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalslice =useSelector((state)=>state.authSlice.modalOpen)
  console.log("modaaall", modalslice);

  const trigger = useRef(null);
  const modal = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

 
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div className="container mx-auto py-20">
        <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className={`rounded-full bg-blue-400 px-6 py-3 text-base font-medium text-black absolute left-5`}
        >
          Click Here For Form
        </button>
        <div
          className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            // ref={modal}
            // onFocus={() => setModalOpen(true)}
            // onBlur={() => setModalOpen(false)}
            className="w-full max-w-[570px] rounded-[20px]  px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
          >
          <div className="form">
          <DetailForm/>
          </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-1/2 px-3 mr-auto">
                <button
                  onClick={() => setModalOpen(false)}
                  className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
                >
                 Close
                </button>
              </div>
              {/* <div className="w-1/2 px-3">
                <button className="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark">
                  <a href={`/#`}> View Details </a>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
