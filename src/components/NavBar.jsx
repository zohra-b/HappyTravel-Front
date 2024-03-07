import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className='flex justify-center fixed bottom-0 bg-primary-yellow rounded-3xl w-[90%] mx-[1rem] py-[0.5rem] shadow-sgreen'>
      <Image src="/image/Avatar-icon.svg" alt="Icono avatar" width={25} height={25} />
      <Image src="/image/Home-icon.svg" alt="Icono home" width={25} height={25} />
    </nav>
  )
}
