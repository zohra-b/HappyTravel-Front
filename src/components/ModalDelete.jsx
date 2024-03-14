import React, { useState } from 'react';
import Btn from './Btn';
import { deleteTrip } from "@/services/";
import Link from "next/link";
import Modal from "./Modal";

export default function ModalDelete({ tripId, onCancel }) {
    const [error, setError] = useState(null);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  
    const handleDelete = async () => {
        try {
          await deleteTrip(tripId);
          setShowConfirmationModal(true);
          setShowModal(false); // Ocultar el modal de eliminación
        } catch (error) {
          setError(error.message);
        }
      };
  const handleCancelDelete = () => {
    onCancel();
};

  return (
    <section className=' fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 py-5 bg-primary-yellow rounded-3xl flex flex-col items-center justify-center'>
        <h3 className='text-xl text-quaternary-blue text-center p-4'>¿Quieres eliminar este destino?</h3>
        <div className='flex justify-center gap-4 my-3'>
        <Btn
            text="Aceptar"
            color="bg-secondary-green"
            className="w-28 h-10 "
            padding={"px-[1.2rem] py-[0.1rem]"}
            onClick={handleDelete}
          />
          <Btn
            text="Cancelar"
            color="bg-tertiary-red"
            className="w-28 h-10"
            padding={"px-[1.2rem] py-[0.1rem]"}
            onClick={handleCancelDelete}
          />
        </div>
        {showConfirmationModal && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link href="/">
            <Modal text='¡La eliminación se realizó correctamente.' onClick={onCancel}/>
          </Link>
        </div>
      )}
    </section>
  );
}
