"use client";
import Image from "next/image";
import Link from "next/link";
import Btn from "@/components/Btn.jsx";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ModalDelete from "@/components/ModalDelete";
import { deleteTrip } from "@/services/";
import Modal from "@/components/Modal.jsx";
export default function Card({ trip, setTotalPages }) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [error, setError] = useState(null);
  const handleDelete = async () => {
    try {
      handleCloseModal();
      await deleteTrip(trip.id);
      setShowConfirmationModal(true);
      console.log({ response });
    } catch (error) {
      setError(error.message);
    }
  };
  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
    router.push("/?page=1");
    setTotalPages(1);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };
  return (
    <div className="bg-primary-yellow w-[70%] rounded-lg mb-[1rem] lg:basis-[18rem] min-[1600px]:basis-[21rem]">
      <div
        className="w-full h-[15rem]  bg-no-repeat bg-center bg-cover rounded-lg flex justify-end"
        style={{
          backgroundImage: `url(http://localhost:8000/${trip.image_path})`,
        }}
      >
        {!!localStorage.getItem("token") && (
          <Link href={`/trip/${trip.id}`}>
            <div className="mt-[0.5rem] mr-[0.5rem]">
              <Image
                src={"/image/info-icon.svg"}
                alt="icono info"
                width={35}
                height={35}
              />
            </div>
          </Link>
        )}
      </div>
      <div className="mt-[0.5rem] px-[0.8rem] pb-[1rem] flex justify-between ">
        <div className="lg:basis-[70%] basis-[80%] mr-[1rem] lg:mr-0">
          <h1 className="text-quaternary-blue font-bold text-[1.1rem] lg:leading-5">
            {trip.title}
          </h1>
          <p className="text-quaternary-blue text-[1rem] leading-[0.8rem] lg:mt-[0.2rem]">
            {trip.location}
          </p>
        </div>
        {!!localStorage.getItem("token") && (
          <div className="basis-[30%] lg:basis-[20%] flex gap-[0.5rem] justify-between lg:items-center items-start">
            {trip.user_id === parseInt(localStorage.getItem("userId")) && (
              <>
                <Btn
                  sourceIcon={"/image/Edit-icon.svg"}
                  color={"bg-transparent"}
                  classIcon="w-[2rem] lg:w-[1.8rem]"
                  type="Link"
                  href={`/edit_trip/${trip.id}`}
                />
                <Btn
                  sourceIcon={"/image/Delete-icon.svg"}
                  classIcon="w-[1.5rem] lg:w-[1.4rem]"
                  color={"bg-transparent"}
                  onClick={handleOpenModal}
                />
              </>
            )}
          </div>
        )}
      </div>
      {showModal && (
        <div
          className="absolute top-0 right-0 bottom-0 transform w-full z-40"
          style={{ backgroundColor: "#000000cc" }}
        >
          <ModalDelete
            handleCloseModal={handleCloseModal}
            handleDelete={handleDelete}
          ></ModalDelete>
        </div>
      )}

      {showConfirmationModal && (
        <div
          className="absolute top-0 right-0 bottom-0 transform w-full z-40"
          style={{ backgroundColor: "#000000cc" }}
        >
          <Modal
            text="¡La eliminación se realizó correctamente."
            onClick={handleCloseConfirmationModal}
          />
        </div>
      )}
    </div>
  );
}
