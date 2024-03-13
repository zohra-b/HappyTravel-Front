"use client";
import Image from "next/image";
export default function Pagination({
  handlePagination,
  currentPage,
  totalPages,
}) {
  const isDisabledIfLowerThan = currentPage === 1;
  const isDisabledIfUpperThan = currentPage === totalPages;
  console.log(typeof totalPages);
  return (
    <div className="lg:flex lg:justify-center gap-[1rem]">
      <button
        className={`transform scale-x-[-1] bg-quaternary-blue px-[0.6rem] py-[0.2rem] rounded-2xl ${
          isDisabledIfLowerThan ? "opacity-40" : "opacity-100"
        }`}
        onClick={() => handlePagination(currentPage - 1)}
        disabled={isDisabledIfLowerThan}
      >
        <Image
          src="/image/Arrows-icon.svg"
          alt="icono previus"
          width={20}
          height={20}
          className=""
        />
      </button>
      <p className="text-[1rem] font-bold text-quaternary-blue">
        {currentPage}
      </p>
      <button
        className={`bg-quaternary-blue px-[0.6rem] py-[0.2rem] rounded-2xl ${
          isDisabledIfUpperThan ? "opacity-40" : "opacity-100"
        }`}
        onClick={() => handlePagination(currentPage + 1)}
        disabled={isDisabledIfUpperThan}
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
