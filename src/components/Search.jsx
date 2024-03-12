"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [valueInput, setValueInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setValueInput(e.target.value);
    router.push(`/?search=${valueInput}`);
    // setValueInput("");
  };
  return (
    <form
      className="relative flex items-center w-[50%] mb-[1.5rem]  lg:w-[15%] lg:mb-0"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={valueInput}
        onChange={handleSubmit}
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
