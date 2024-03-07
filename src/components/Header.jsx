import Image from 'next/image';
import NavBar from './NavBar';
import Search from './Search';


export default function Header() {
  return (
  
    <header className='mt-[2rem]'>
      <div className='flex flex-col items-center gap-[2rem]'>
      <Image src="/image/Logo.svg" alt="Logo" width={110} height={80} />
      <Search />
      </div>
      <NavBar />
    </header>
  )
}
