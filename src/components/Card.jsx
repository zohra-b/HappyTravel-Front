export default function Card({ trip }) {
  return (
    <div className="bg-primary-yellow w-[70%] mx-auto rounded-lg mb-[1rem] lg:basis-[21%]">
      <div className="w-full h-[15rem] bg-[url('/image/IslaEjemplo.jpg')] bg-no-repeat bg-center bg-cover rounded-lg"></div>
      <div className="pl-[0.8rem] pb-[1rem] ">
        <h1 className="text-quaternary-blue font-bold text-[1.1rem] mt-[0.5rem]">
          {trip.title}
        </h1>
        <p className="text-quaternary-blue text-[1rem] leading-[0.8rem]">
          {trip.location}
        </p>
      </div>
    </div>
  );
}
