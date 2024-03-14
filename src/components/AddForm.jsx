import React from 'react'
import InputForm from './InputForm'
import Btn from './Btn'

export default function AddForm() {





    return (
        <section className="flex flex-col justify-center w-[750px] min-h-[487px] gap-6 rounded-2xl border-4 border-primary-yellow mt-48 mb-30 mx-auto px-14 py-6">

            <h2 className="text-xl text-tertiary-red font-bold pt-3 inline-block text-center">Crear destino</h2>
            <form className="border-t-2 border-tertiary-red flex justify-between mx-8">
                <div className="flex flex-col ">
                   
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
                    <div  >
                        <label for="custom-upload-btn" id="custom-upload-label" className='absolute inset-0 flex items-center justify-center'>
                            <img src=".\public\image\File-icon.svg" alt="Subir archivo" id="custom-upload-img" class="float-left w-6 h-6"/>
                        </label>
                        <input type="file" id="custom-upload-btn" name="image" accept="image/*" placeholder="Sube una imagen..." className='pl-8 bg-primary-yellow rounded-2xl shadow-inner-top px-[1rem] placeholder:text-quaternary-blue py-[0.3rem] w-full text-[0.9rem] focus:outline-none'/>
                    </div>


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

                    <textarea className="resize-none w-full h-full bg-primary-yellow rounded-2xl shadow-inner-top px-[1rem] placeholder:text-quaternary-blue py-[auto] text-[0.9rem] focus:outline-none overflow-auto" style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
                        placeholder="Aquí estará la explicación del porque quieres viajar allí y no debe pasarse de más de 500 caracteres. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae." />
                </div>



            </form>
        </section >
    )
}