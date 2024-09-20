import { HeroImage } from "@/components/core";
import { FlipWords } from "@/components/ui/flip-words";

const words = [
  "Solidaritas",
  "Integritas",
  "Kreatifitas",
  "Akhlak",
  "Teknologi",
];

export default function Home() {
  return (
    <main>
      <HeroImage />
      <div className="flex flex-col items-center mt-12">
        <h1 className="font-bold text-3xl">
          Apa Itu <span className="tracking-wider">SIKAT</span>?
        </h1>

        <FlipWords
          duration={2000}
          words={words}
          className="font-bold text-2xl text-blue-600 tracking-wide -z-10"
        />
      </div>
    </main>
  );
}
