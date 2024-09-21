import { FlipWords } from "../ui/flip-words";
import { ArrowDown } from "lucide-react";

const words = [
  "Mengutamakan Rasa Adil",
  "Komunikasinya Transparan",
  "Ekskulnya Maksimal",
  "Siswanya Berakhlak Mulia",
  "Teknologi Diaplikasikan",
];

export default function Slogan() {
  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="font-bold text-3xl">Paslon Tiga itu</h1>
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
  );
}
