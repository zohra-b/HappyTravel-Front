"use client";
import { useParams, useRouter } from "next/navigation";
import { getTripsById } from "@/services/";
import { useEffect, useState } from "react";
import SkeletonDetails from "@/components/placeholder/SkeletonDetail";
import Btn from "@/components/Btn";
import ModalDelete from "@/components/ModalDelete";
import { deleteTrip } from "@/services/";
import Modal from "@/components/Modal.jsx";

export default function TripDetails() {
  const params = useParams();
  const router = useRouter();
  const [trip, setTrip] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [error, setError] = useState(null);
  if (!localStorage.getItem("token")) router.push("/login");
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
    router.push("/");
  };

  useEffect(() => {
    const fecthTripId = async () => {
      try {
        const tripData = await getTripsById(params.id);
        setTrip(tripData);
        setIsLoading(false);
      } catch (error) {
        console.error("no hay viajes para el id", error);
      }
    };
    fecthTripId();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonDetails />
      ) : (
        <section className="absolute top-0 lg:static lg:max-w-[65%] lg:mx-auto lg:mt-[6rem]">
          <div className="lg:flex lg:gap-[2.5rem]">
            <div
              className="relative w-full h-[50vh] bg-no-repeat bg-center bg-[length:200%] rounded-b-3xl flex justify-center items-end lg:static lg:bg-cover lg:basis-[85%] lg:h-[28rem] lg:rounded-3xl"
              style={{
                backgroundImage: `url(http://localhost:8000/${trip.image_path})`,
              }}
            >
              <div className="lg:hidden absolute bg-tertiary-red  w-[70%]  rounded-2xl p-[1rem] text-center bottom-[-1rem]">
                <h1 className="text-[1.3rem] text-primary-yellow font-bold">
                  {trip.title}
                </h1>
                <p className="text-[1rem] text-primary-yellow">
                  {trip.location}
                </p>
              </div>
            </div>
            <div className="w-[90%] mx-auto mt-[2.4rem] lg:mt-0">
              <div className="hidden h-[8rem] lg:flex lg:h-auto lg:mt-[2rem] lg:justify-between">
                <div className="basis-[80%]">
                  <h1 className="text-[1.5rem] text-tertiary-red font-bold leading-6">
                    {trip.title}
                  </h1>
                  <p className="text-[1.3rem] text-tertiary-red">
                    {trip.location}
                  </p>
                </div>
                <div className="lg:basis-[20%] gap-[1rem] flex justify-endlg:items-center items-start">
                  {trip.user_id ===
                    parseInt(localStorage.getItem("userId")) && (
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
              </div>
              <p className="text-[1rem] text-quaternary-blue lg:text-[1.1rem] lg:mt-[1rem]">
                {trip.description}
              </p>

              <div className="flex gap-[0.5rem] items-start justify-end mt-[1rem] lg:hidden">
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
                <Btn
                  sourceIcon={"/image/Edit-icon.svg"}
                  color={"bg-transparent"}
                  classIcon="w-[2rem] lg:w-[1.8rem]"
                  type="Link"
                  href={"/"}
                />
                <Btn
                  sourceIcon={"/image/Delete-icon.svg"}
                  classIcon="w-[1.5rem] lg:w-[1.4rem]"
                  color={"bg-transparent"}
                  onClick={handleOpenModal}
                />
              </div>
            </div>
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
        </section>
      )}
    </>
  );
}
