import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen night flex flex-col justify-end">
      <div className="w-screen">
        <Image
          className="w-full"
          src={"/sands.png"}
          alt="Sands"
          width={1000}
          height={1000}
          unoptimized={true}
        ></Image>
      </div>
    </div>
  );
}
