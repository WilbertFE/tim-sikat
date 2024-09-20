import { HeroImage } from "@/components/core";
import { FlipWords } from "@/components/ui/flip-words";
import { ArrowDown } from "lucide-react";

const words = [
  "Terbentuknya Rasa Adil",
  "Komunikasinya Transparan",
  "Ekskulnya Beragam",
  "Siswanya Berakhlak",
  "Teknologi Diaplikasikan",
];

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <HeroImage />
        <div className="flex flex-col items-center mt-12">
          <h1 className="font-bold text-3xl">Perubahan itu</h1>
          <FlipWords
            duration={2000}
            words={words}
            className="text-2xl font-bold text-cyan-600 tracking-wider -z-10"
          />
          <ArrowDown
            color="#ffffff"
            size={40}
            strokeWidth={3}
            className="bg-cyan-600 rounded-full -z-10 animate-bounce p-1.5 mt-12"
          />
        </div>
      </div>
    </main>
  );
}
