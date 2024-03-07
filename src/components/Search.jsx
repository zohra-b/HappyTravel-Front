import React from "react";
import Image from "next/image";

export default function Search() {
  return (
    <form className="relative flex items-center w-[50%] mb-[1.5rem]  lg:w-[15%] lg:mb-0">
      <input
        type="search"
        name="search"
        placeholder="Search..."
        className="bg-primary-yellow rounded-2xl shadow-inner-top px-[1rem] placeholder:text-quaternary-blue py-[0.3rem] w-full text-[0.9rem] focus:outline-none"
      ></input>
      <Image
        src="/image/Glass-icon.svg"
        alt="Icono buscar"
        width={15}
        height={15}
        className="absolute right-[1rem]"
      />
    </form>
  );
}
