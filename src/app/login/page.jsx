import Login from "@/components/Login";
import Btn from "@/components/Btn";
export default function page() {
  return (
    <main className="flex items-center justify-center h-[70vh] flex-col">
      <div className="w-[370px] ">
        <Login />
        <div className="pt-[2rem] flex items-center justify-center mb-[1rem]">
          <hr className="w-[5rem] border-tertiary-red" />
          <p className="text-[1rem] text-quaternary-blue mx-[0.5rem]">
            ¿Eres nuevo en happy travel?
          </p>
          <hr className="w-[5rem] border-tertiary-red" />
        </div>
        <Btn
          text="Crea tu cuenta"
          color="bg-secondary-green"
          href="/register"
          type="Link"
          className="w-28 h-10 "
          padding={"px-[8.4rem] py-[0.1rem]  mt-[2rem] text-center "}
        />
      </div>
    </main>
  );
}
