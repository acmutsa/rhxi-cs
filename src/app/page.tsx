import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen relative night flex flex-col justify-end">
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
      <Image
        className="w-full absolute left-0 top-1/2 -translate-y-2/3"
        src={"/rh-xi-hero-title.svg"}
        alt={"Rh Xi Hero Title"}
        width={1000}
        height={1000}
        unoptimized={true}
      ></Image>
    </div>
  );
}
