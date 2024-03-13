import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="flex justify-between fixed bottom-[1rem] rounded-3xl w-[90%] mx-[1rem] py-[0.5rem] shadow-s-green px-[1.5rem] bg-primary-yellow lg:static lg:basis-[10%] lg:bg-white-transparent lg:shadow-sh-transparent lg:py-0 z-[1]">
      <Image
        src="/image/Avatar-icon.svg"
        alt="Icono avatar"
        width={25}
        height={25}
      />
      <Link href={"/"}>
        <Image
          src="/image/Home-icon.svg"
          alt="Icono home"
          width={25}
          height={25}
        />
      </Link>
    </nav>
  );
}
