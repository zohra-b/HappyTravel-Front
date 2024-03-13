import Image from "next/image";
import Link from "next/link";
export default function Card({ trip }) {
  return (
    <div className="bg-primary-yellow w-[70%] rounded-lg mb-[1rem] lg:basis-[18rem] min-[1600px]:basis-[21rem]">
      <Link href={`/trip/${trip.id}`}>
        <div className="w-full h-[15rem] bg-[url('/image/IslaEjemplo.jpg')] bg-no-repeat bg-center bg-cover rounded-lg flex justify-end">
          <div className="mt-[0.5rem] mr-[0.5rem]">
            <Image
              src={"/image/info-icon.svg"}
              alt="icono info"
              width={35}
              height={35}
            />
          </div>
        </div>
        <div className="pl-[0.8rem] pb-[1rem] ">
          <h1 className="text-quaternary-blue font-bold text-[1.1rem] mt-[0.5rem]">
            {trip.title}
          </h1>
          <p className="text-quaternary-blue text-[1rem] leading-[0.8rem]">
            {trip.location}
          </p>
        </div>
      </Link>
    </div>
  );
}
