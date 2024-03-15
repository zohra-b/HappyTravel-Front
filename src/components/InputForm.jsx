import React from "react";

export default function InputForm({
  type,
  placeholder,
  name,
  onChange,
  value,
}) {
  return (
    <input
      className="bg-primary-yellow rounded-2xl shadow-inner-top px-[1rem] placeholder:text-quaternary-blue py-[0.3rem] w-full text-[0.9rem] focus:outline-none text-quaternary-blue"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
