import React from 'react'
import Image from 'next/image'

export default function Search() {
  return (
    <form className='relative flex items-center'>
    <input type='search' name='search' placeholder='Search...' className='bg-primary-yellow rounded-2xl shadow-inner-top px-[1rem] placeholder:text-quaternary-blue py-[0.2rem]'></input>
    <Image src="/image/Glass-icon.svg" alt="Icono buscar" width={15} height={15} className='absolute right-[1rem]'/>

    </form>
  )
}
