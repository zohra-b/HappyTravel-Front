"use client";
import Image from "next/image";
import Link from "next/link";
import Modal from "./Modal";
import InputForm from "./InputForm";
import Btn from "./Btn";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/components/EditTrip/editTrip.module.css";
import { addTrip } from "@/services/";

export default function AddForm() {
  const router = useRouter();
  if (!localStorage.getItem("token")) router.push("/login");
  const [formTrip, setFormTrip] = useState({
    title: "",
    location: "",
    image: "",
    description: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    setFormTrip({ ...formTrip, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTrip(formTrip);
      setModalMessage("¡Viaje añadido correctamente!");
      setShowModal(true);
    } catch (error) {
      setModalMessage("¡Error al añadir viaje!");
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleCancel = () => {
    setFormTrip({
      title: "",
      location: "",
      image: "",
      description: "",
    });
  };

  return (
    <section className="flex flex-col justify-center w-[750px] min-h-[487px] gap-6 rounded-2xl border-4 border-primary-yellow mt-[4rem] mb-30 mx-auto px-14">
      <h2 className="text-xl text-tertiary-red font-bold pt-3 inline-block text-center">
        Crear destino
      </h2>
      <form
        onSubmit={handleSubmit}
        className="border-t-2 border-tertiary-red flex justify-between mx-8"
      >
        <div className="flex flex-col ">
          <label
            htmlFor="title"
            className="text-quaternary-blue text-xl font-bold pb-1 pt-6"
          >
            Título
          </label>
          <InputForm
            name="title"
            value={formTrip.title}
            onChange={handleChange}
            type="text"
            placeholder="Escribe el título..."
          />

          <label
            htmlFor="location"
            className="text-quaternary-blue text-xl font-bold pb-1 pt-6"
          >
            Ubicación
          </label>
          <InputForm
            name="location"
            value={formTrip.location}
            onChange={handleChange}
            type="text"
            placeholder="Escribe el destino..."
          />

          <label
            htmlFor="image"
            className="text-quaternary-blue text-[1.1rem] lg:text-xl font-bold pb-1 pt-6"
          >
            Imagen
          </label>
          <div className={` ${styles.fileButton}`}>
            <label
              htmlFor="custom-upload-btn"
              id="custom-upload-label"
              className={`cursor-pointer lg:mb-[2.5rem] h-[2rem] bg-primary-yellow text-quaternary-blue inset-0 flex items-center ${styles.customFileUpload}`}
            >
              <div className="bg-quaternary-blue h-[2rem]  flex justify-center rounded-l-2xl w-[20%] mr-[0.5rem]">
                <Image
                  src="/image/file-icon.svg"
                  width={20}
                  height={20}
                  alt="Subir archivo"
                />
              </div>
              {formTrip.image.name ?? "Sube una imagen ..."}
            </label>
            <input
              type="file"
              id="custom-upload-btn"
              onChange={(e) => {
                const file = e.target.files[0];
                setFormTrip({ ...formTrip, image: file });
              }}
              name="image"
              accept="image/*"
              placeholder="Sube una imagen..."
              className={` pl-8  rounded-2xl shadow-inner-top px-[1rem] placeholder:text-quaternary-blue py-[0.3rem] w-full text-[0.9rem] focus:outline-none ${styles.customFileUpload}`}
            />
          </div>
          <div className="flex justify-center gap-4 my-3">
            <Btn
              text="Aceptar"
              color="bg-secondary-green"
              onSubmit={handleSubmit}
              className="w-28 h-10 "
              padding={"px-[1.2rem] py-[0.1rem]"}
            />
            <Btn
              type="button"
              text="Cancelar"
              color="bg-tertiary-red"
              onClick={handleCancel}
              className="w-28 h-10"
              padding={"px-[1.2rem] py-[0.1rem]"}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="text-quaternary-blue text-xl font-bold pb-1 pt-6"
          >
            ¿Por qué quieres viajar allí?
          </label>

          <textarea
            name="description"
            value={formTrip.description}
            onChange={handleChange}
            className="resize-none w-full h-full bg-primary-yellow rounded-2xl shadow-inner-top px-[1rem] placeholder:text-quaternary-blue py-[auto] text-[0.9rem] focus:outline-none overflow-auto"
            style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
            placeholder="Aquí estará la explicación del porque quieres viajar allí y no debe pasarse de más de 500 caracteres."
          />
        </div>
      </form>
      {showModal && (
        <div
          className="absolute top-0 right-0 bottom-0 transform w-full z-40"
          style={{ backgroundColor: "#000000cc" }}
        >
          <Link href="/">
            <Modal text={modalMessage} onClick={handleCloseModal} />
          </Link>
        </div>
      )}
    </section>
  );
}
