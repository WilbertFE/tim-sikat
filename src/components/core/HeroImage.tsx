import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="flex justify-center ">
      <Image
        src="/hero.png"
        width={600}
        height={600}
        alt="hero"
        className="-z-10"
      />
    </div>
  );
}
