import React from 'react'
import InputForm from './InputForm'
import Btn from './Btn'

export default function () {
    return (
        <div className="flex flex-col w-[370px] min-h-[487px] gap-6 rounded-2xl border-4 items-center border-primary-yellow pb-14">
            <h2 className="text-xl text-tertiary-red font-bold pt-3">Editar destino</h2>
            <form className="border-t-2 border-tertiary-red flex">
                <div className="border-t-2 border-tertiary-red flex flex-col">
                    <label htmlFor="title" className="text-quaternary-blue text-xl font-bold pb-1 pt-6">
                        Título
                    </label>
                    <InputForm type="text" placeholder="Escribe el título..." />
                    <label htmlFor="location" className="text-quaternary-blue text-xl font-bold pb-1 pt-6">
                        Ubicación
                    </label>
                    <InputForm type="text" placeholder="Escribe el destino..." />
                    <label htmlFor="image" className="text-quaternary-blue text-xl font-bold pb-1 pt-6">
                        Imagen
                    </label>
                    <InputForm type="file"  id="image" name="image" accept="image/*" placeholder="Sube una imagen..." />

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
                </div>

                <div className="flex flex-col">
                    <label htmlFor="description" className="text-quaternary-blue text-xl font-bold pb-1 pt-6">
                        ¿Por qué quieres viajar allí?
                    </label>
                    {/*          <InputForm className='h-32' type="textarea" placeholder="Aquí estará la explicación del porque quieres viajar allí y no debe pasarse de más de 500 caracteres. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae." /> */}

                    <textarea className="bg-primary-yellow rounded-2xl shadow-inner-top px-[1rem] placeholder:text-quaternary-blue py-[auto] w-full text-[0.9rem] focus:outline-none text-wrap overflow-auto"
                        placeholder="Aquí estará la explicación del porque quieres viajar allí y no debe pasarse de más de 500 caracteres. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae." />
                </div>



            </form>
        </div>
    )
}
