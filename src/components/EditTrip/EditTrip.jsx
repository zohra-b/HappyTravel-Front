"use client";
import { useEffect, useState } from "react";
import InputForm from "../InputForm";
import Btn from "../Btn";
import styles from "./editTrip.module.css";
import Image from "next/image";
import { getTripsById, updateTrip } from "@/services/";
import { useParams } from "next/navigation";
const INITIAL_VALUES = {
  title: "",
  location: "",
  image_path: "",
  description: "",
};
export default function EditTrip() {
  const [trip, setTrip] = useState(INITIAL_VALUES);
  const params = useParams();

  useEffect(() => {
    const fecthTripId = async () => {
      try {
        const tripData = await getTripsById(params.id);
        setTrip(tripData);
      } catch (error) {
        console.error("no se puede editar el viaje", error);
      }
    };
    fecthTripId();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { image_path, ...formData } = trip;
    try {
      await updateTrip({ id: trip.id, formData });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col justify-center w-[700px] gap-6 rounded-2xl border-4 border-primary-yellow lg:mt-[2rem] mb-30 mx-auto px-[1rem] py-[1rem]">
      <h2 className="text-xl text-tertiary-red font-bold  inline-block text-center">
        Editar destino
      </h2>
      <form
        className="border-t-2 border-tertiary-red flex flex-col lg:flex-row gap-[2rem] lg:mx-[1rem]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col basis-[50%]">
          <label
            htmlFor="title"
            className="text-quaternary-blue text-[1.1rem] lg:text-xl font-bold pb-1 pt-6"
          >
            Título
          </label>
          <InputForm
            type="text"
            placeholder="Escribe el título..."
            value={trip.title}
            onChange={(e) => setTrip({ ...trip, title: e.target.value })}
          />

          <label
            htmlFor="location"
            className="text-quaternary-blue text-[1.1rem] lg:text-xl font-bold pb-1 pt-6"
          >
            Ubicación
          </label>
          <InputForm
            type="text"
            placeholder="Escribe el destino..."
            value={trip.location}
            onChange={(e) => setTrip({ ...trip, location: e.target.value })}
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
              className={`lg:mb-[2.5rem] h-[2rem] bg-primary-yellow text-quaternary-blue inset-0 flex items-center ${styles.customFileUpload}`}
            >
              <div className="bg-quaternary-blue h-[2rem]  flex justify-center rounded-l-2xl w-[20%] mr-[0.5rem]">
                <Image
                  src="/image/file-icon.svg"
                  width={20}
                  height={20}
                  alt="Subir archivo"
                />
              </div>
              {trip?.image?.name ?? trip.image_path}
            </label>
            <input
              type="file"
              id="custom-upload-btn"
              name="image"
              accept="image/*"
              placeholder="Sube una imagen ..."
              //   name="image"
              onChange={(e) => {
                const fileImage = e.target.files[0];
                setTrip({ ...trip, image: fileImage });
              }}
              className={`pl-8  rounded-2xl shadow-inner-top px-[1rem] placeholder:text-quaternary-blue py-[0.3rem] w-full text-[0.9rem] focus:outline-none ${styles.customFileUpload}`}
            />
          </div>
          <div className=" gap-4 my-3 hidden lg:flex">
            <Btn
              text="Aceptar"
              color="bg-secondary-green"
              type="submit"
              padding={"px-[1.2rem] py-[0.1rem]"}
            />
            <Btn
              text="Cancelar"
              color="bg-tertiary-red"
              type="button"
              padding={"px-[1.2rem] py-[0.1rem]"}
            />
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
            style={{ scrollbarWidth: "none" }}
            placeholder={trip.description}
            onChange={(e) => setTrip({ ...trip, description: e.target.value })}
          />
        </div>
        <div className="flex justify-center gap-4  lg:hidden mb-[4rem] lg:mb-0">
          <Btn
            text="Aceptar"
            color="bg-secondary-green"
            padding="px-[1.2rem] py-[0.1rem]"
            type="submit"
          />
          <Btn
            text="Cancelar"
            type="button"
            color="bg-tertiary-red"
            padding={"px-[1.2rem] py-[0.1rem]"}
          />
        </div>
      </form>
    </div>
  );
}
