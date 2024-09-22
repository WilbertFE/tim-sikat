import Image from "next/image";
import GambarUtama from "/public/img/hero.jpeg";

export default function HeroImage() {
  return (
    <div className="flex justify-center mt-12 -z-50">
      <Image
        priority
        alt="Wilbert dan Jacob"
        src={GambarUtama}
        width={500}
        height={500}
      />
    </div>
  );
}
