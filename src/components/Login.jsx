"use client"
// Login.jsx
import React, { useState } from 'react';
import InputForm from './InputForm';
import Btn from './Btn';
import { loginUser } from "@/services/";

export default function Login() {
  const [loginInput, setLogin] = useState({
    email: '',
    password: '',
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(loginInput);
      if (response.user) {
        alert('Inicio de sesión OK');
      } else {
        alert('Error: Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error: Ha ocurrido un error durante el inicio de sesión');
    }
  };

  

  return (
    <div className="flex flex-col w-[370px] min-h-[487px] gap-6 rounded-2xl border-4 items-center border-primary-yellow pb-14">
      <h2 className="text-xl text-tertiary-red font-bold pt-3">Login</h2>
      <form className="border-t-2 border-tertiary-red flex flex-col" onSubmit={loginSubmit}>
        <label htmlFor="email" className="text-quaternary-blue text-xl font-bold pb-1 pt-6">
          E-mail
        </label>
        <InputForm
          type="email"
          name="email"
          value={loginInput.email}
          onChange={handleInput}
          placeholder="Escribe tu correo ..."
        />
        <label htmlFor="password" className="text-quaternary-blue text-xl font-bold pb-1 pt-6">
          Contraseña
        </label>
        <InputForm
          type="password"
          name="password"
          value={loginInput.password}
          onChange={handleInput}
          placeholder="Escribe tu contraseña"
        />
        <div className="flex gap-4 justify-center pt-8">
        </div>
        <div className='flex gap-4 my-3'>
          <Btn
            type="submit"
            text="Aceptar"
            color="bg-secondary-green"
          />
          <Btn
            type="button"
            text="Cancelar"
            color="bg-tertiary-red"
            onClick={() => {
           }}
          />
        </div>
      </form>
    </div>
  );
}
