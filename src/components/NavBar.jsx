import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const isAuthenticated = localStorage.getItem("token") !== null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };


  return (
    <nav className="flex justify-between fixed bottom-[1rem] rounded-3xl w-[90%] mx-[1rem] py-[0.5rem] shadow-s-green px-[1.5rem] bg-primary-yellow lg:static lg:basis-[10%] lg:bg-white-transparent lg:shadow-sh-transparent lg:py-0 z-[1]">
      <Link href={"/"}>
        <Image
          src="/image/Home-icon.svg"
          alt="Icono home"
          width={30}
          height={30}
        />
      </Link>
      {isAuthenticated && (
        <>
          <Link href={"/create"}>
            <Image
              src="/image/Create-icon.svg"
              alt="Icono create"
              width={30}
              height={30}
            />
          </Link>
          <button onClick={handleLogout}>
            <Image
              src="/image/Logout-icon.svg"
              alt="Icono logout"
              width={30}
              height={30}
            />
          </button>
        </>
      )}
      {!isAuthenticated && (
        <Link href={"/login"}>
          <Image
            src="/image/Avatar-icon.svg"
            alt="Icono avatar"
            width={30}
            height={30}
          />
        </Link>
      )}
    </nav>
  );
}
