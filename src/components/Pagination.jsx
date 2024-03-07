import Image from "next/image";
export default function Pagination() {
  return (
    <div>
      <button>
        <Image
          src="/image/Arrows-icon.svg"
          alt="icono previus"
          width={20}
          height={20}
          className="w-[8rem] lg:pb-[0.5rem]"
        />
      </button>
      <p>1</p>
      <button>
        <Image
          src="/image/Arrows-icon.svg"
          alt="icono next"
          width={20}
          height={20}
          className="w-[8rem] lg:pb-[0.5rem]"
        />
      </button>
    </div>
  );
}
