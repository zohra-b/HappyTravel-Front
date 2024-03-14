import React from "react";
import Btn from "./Btn";

export default function Modal({ text, onClick }) {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40"></div>
      <section className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
        <div className="relative w-[500px] py-6 bg-primary-yellow border-solid border-2 border-secondary-green rounded-3xl flex flex-col items-center justify-center">
          <button
            onClick={onClick}
            className="absolute top-2 right-2 text-secondary-green font-bold  hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <h3 className="text-xl text-quaternary-blue text-center p-1">
            {text}
          </h3>
        </div>
      </section>
    </>
  );
}
