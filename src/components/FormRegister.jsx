import React from 'react'
import InputForm from './InputForm'
import Btn from './Btn'

export default function FormRegister() {
  return (
    <div className="flex flex-col w-[370px] min-h-[487px] gap-6 rounded-2xl border-4 items-center border-primary-yellow pb-14">
    <h2 className="text-xl text-tertiary-red font-bold pt-3">Registro de usuario</h2>
    <form className="border-t-2 border-tertiary-red flex flex-col">
      <label htmlFor="name" className="text-quaternary-blue text-xl font-bold pb-1 pt-6">
        Nombre
      </label>
      <InputForm type="text" placeholder="Escribe tu nombre..."/>
      <label htmlFor="email" className="text-quaternary-blue text-xl font-bold pb-1 pt-6">
        Email
      </label>
      <InputForm ype="text" placeholder="Escribe tu nombre..."/>
      <label htmlFor="password" className="text-quaternary-blue text-xl font-bold pb-1 pt-6">
        Contraseña
      </label>
      <InputForm type="email" placeholder="Escribe tu correo electrónico..."/>
      <div className="flex gap-4 justify-center pt-8">
      </div>
      <div className='flex gap-4 my-3'>
        <Btn
            text="Aceptar"
            color="bg-secondary-green"
        />
        <Btn
            text="Cancelar"
            color="bg-tertiary-red"
        />
      </div>
      <span className="text-quaternary-blue text-center text-xl font-bold">¿Ya tienes cuenta? Accede <a href="/login" className="text-secondary-green">aquí</a></span>
    
    </form>
  </div>
  )
}
