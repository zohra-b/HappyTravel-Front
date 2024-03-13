'use client';
import React, { useState } from 'react';
import InputForm from './InputForm';
import Btn from './Btn';
import { registerUser } from "@/services/";



export default function FormRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      console.log('Usuario registrado exitosamente: ', response);
      alert('Usuario registrado exitosamente')
   
    } catch (error) {
      console.error('Error al registrar usuario: ', error);
    }
  };

 

  return (
    <div className="flex flex-col w-[370px] min-h-[487px] gap-6 rounded-2xl border-4 items-center border-primary-yellow pb-14">
    <h2 className="text-xl text-tertiary-red font-bold pt-3">Registro de usuario</h2>
    <form onSubmit={handleSubmit} className="border-t-2 border-tertiary-red flex flex-col">
      <label htmlFor="name" className="text-quaternary-blue text-xl font-bold pb-1 pt-6">
        Nombre
      </label>
      <InputForm type="text" placeholder="Escribe tu nombre..." name="name" value={formData.name} onChange={handleChange}/>
      <label htmlFor="email" className="text-quaternary-blue text-xl font-bold pb-1 pt-6">
        Email
      </label>
      <InputForm type="email" placeholder="Escribe tu correo electrónico..." name="email" value={formData.email} onChange={handleChange}/>
      <label htmlFor="password" className="text-quaternary-blue text-xl font-bold pb-1 pt-6">
        Contraseña
      </label>
      <InputForm type="password" placeholder="Escribe tu contraseña..." value={formData.password} name="password" onChange={handleChange}/>
      <div className="flex gap-4 justify-center pt-8">
      </div>
      <div className='flex gap-4 my-3'>
        <Btn
            text="Aceptar"
            color="bg-secondary-green"
            onSubmit={handleSubmit}
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
