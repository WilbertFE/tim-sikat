import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="flex justify-center mt-12 -z-50">
      <Image
        priority
        alt="Wilbert dan Jacob"
        src="/img/hero.jpeg"
        width={500}
        height={500}
      />
    </div>
  );
}
