import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center -translate-y-14 -z-50">
        <Image
          src="/hero.png"
          width={600}
          height={600}
          alt="hero"
          className="-z-10"
        />
      </div>
    </main>
  );
}
