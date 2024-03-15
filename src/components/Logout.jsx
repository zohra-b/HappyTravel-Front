'use client'
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter(); 

  const handleLogout = () => {
  
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <button onClick={handleLogout}>
      Logout deslogarse
    </button>
  );
}
