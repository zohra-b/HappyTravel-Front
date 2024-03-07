"use client";
import Image from "next/image";
export default function Pagination({ handlePageChange, currentPage }) {
  console.log({ handlePageChange, currentPage });
  return (
    <div className="lg:flex lg:justify-center gap-[1rem]">
      <button
        className="transform scale-x-[-1] bg-quaternary-blue px-[0.6rem] py-[0.2rem] rounded-2xl"
        onClick={() => console.log("click")}
      >
        <Image
          src="/image/Arrows-icon.svg"
          alt="icono previus"
          width={20}
          height={20}
          className=""
        />
      </button>
      <p className="text-[1rem] font-bold text-quaternary-blue">1</p>
      <button
        className="bg-quaternary-blue px-[0.6rem] py-[0.2rem] rounded-2xl"
        // onClick={() => handlePageChange(currentPage + 1)}
      >
        <Image
          src="/image/Arrows-icon.svg"
          alt="icono next"
          width={20}
          height={20}
          className=""
        />
      </button>
    </div>
  );
}
