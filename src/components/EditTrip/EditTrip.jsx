import React from "react";
import InputForm from "../InputForm";
import Btn from "../Btn";
import styles from "./editTrip.module.css";
import Image from "next/image";

export default function EditTrip() {
  return (
    <div className="flex flex-col justify-center w-[700px] gap-6 rounded-2xl border-4 border-primary-yellow lg:mt-[2rem] mb-30 mx-auto px-[1rem] py-[1rem]">
      <h2 className="text-xl text-tertiary-red font-bold  inline-block text-center">
        Editar destino
      </h2>
      <form className="border-t-2 border-tertiary-red flex flex-col lg:flex-row gap-[2rem] lg:mx-[1rem]">
        <div className="flex flex-col basis-[50%]">
          <label
            htmlFor="title"
            className="text-quaternary-blue text-[1.1rem] lg:text-xl font-bold pb-1 pt-6"
          >
            Título
          </label>
          <InputForm type="text" placeholder="Escribe el título..." />

          <label
            htmlFor="location"
            className="text-quaternary-blue text-[1.1rem] lg:text-xl font-bold pb-1 pt-6"
          >
            Ubicación
          </label>
          <InputForm type="text" placeholder="Escribe el destino..." />

          <label
            htmlFor="image"
            className="text-quaternary-blue text-[1.1rem] lg:text-xl font-bold pb-1 pt-6"
          >
            Imagen
          </label>
          <div className={` ${styles.fileButton}`}>
            <label
              for="custom-upload-btn"
              id="custom-upload-label"
              className={`lg:mb-[2.5rem] h-[2rem] bg-primary-yellow text-quaternary-blue inset-0 flex items-center ${styles.customFileUpload}`}
            >
              <div className="bg-quaternary-blue h-[2rem]  flex justify-center rounded-l-2xl w-[20%] mr-[0.5rem]">
                <Image
                  src="/image/file-icon.svg"
                  width={20}
                  height={20}
                  alt="Subir archivo"
                  id="custom-upload-img"
                />
              </div>
              Sube una imagen ...
            </label>
            <input
              type="file"
              id="custom-upload-btn"
              name="image"
              accept="image/*"
              className={`pl-8  rounded-2xl shadow-inner-top px-[1rem] placeholder:text-quaternary-blue py-[0.3rem] w-full text-[0.9rem] focus:outline-none ${styles.customFileUpload}`}
            />
          </div>
          <div className=" gap-4 my-3 hidden lg:flex">
            <Btn text="Aceptar" color="bg-secondary-green" />
            <Btn text="Cancelar" color="bg-tertiary-red" />
          </div>
        </div>

        <div className="flex flex-col basis-[50%]">
          <label
            htmlFor="description"
            className="text-quaternary-blue text-[1.1rem] lg:text-xl font-bold pb-1 lg:pt-6"
          >
            ¿Por qué quieres viajar allí?
          </label>

          <textarea
            className="h-[20rem] resize-none w-full lg:h-full bg-primary-yellow rounded-2xl shadow-inner-top px-[1rem] placeholder:text-quaternary-blue py-[auto] text-[0.9rem] focus:outline-none overflow-auto"
            style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
            placeholder="Aquí estará la explicación del porque quieres viajar allí y no debe pasarse de más de 500 caracteres. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae."
          />
        </div>
        <div className="flex justify-center gap-4  lg:hidden mb-[4rem] lg:mb-0">
          <Btn text="Aceptar" color="bg-secondary-green" />
          <Btn text="Cancelar" color="bg-tertiary-red" />
        </div>
      </form>
    </div>
  );
}
