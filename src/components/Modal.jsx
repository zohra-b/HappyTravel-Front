import React from "react";
import Btn from "./Btn";

export default function Modal({ text, onClick }) {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-50"></div>

      {/* Modal */}
      <section className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
        <div
          className="w-[500px] py-6 bg-primary-yellow border-solid border-2 border-secondary-green rounded-3xl flex flex-col items-center justify-center"
          onClick={onClick}
        >
          <h3 className="text-xl text-quaternary-blue text-center p-1">
            {text}
          </h3>
        </div>
      </section>
    </>
  );
}
