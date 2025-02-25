import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen relative night flex flex-col justify-end">
      <div className="w-screen z-10 relative">
        <Image
          className="w-full"
          src={"/sands.png"}
          alt="Sands"
          width={1000}
          height={1000}
          unoptimized={true}
        />
        <Image
          className="w-[100px] absolute left-[20%] bottom-[20%] z-20"
          src={"/tumbleweed.svg"}
          alt="Tumbleweed"
          width={100}
          height={100}
          unoptimized={true}
        />
        <Image
          className="w-[80px] absolute left-[60%] bottom-[15%] z-20"
          src={"/tumbleweed.svg"}
          alt="Tumbleweed"
          width={80}
          height={80}
          unoptimized={true}
        />
      </div>
      <Image
        className="w-[120px] absolute right-[10%] top-[10%] z-20"
        src={"/cow.svg"}
        alt="Floating Cow"
        width={120}
        height={120}
        unoptimized={true}
      />
      <Image
        className="w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3 max-w-[1200px]"
        src={"/hero-title.svg"}
        alt={"Rh Xi Hero Title"}
        width={1000}
        height={1000}
        unoptimized={true}
      ></Image>
    </div>
  );
}
