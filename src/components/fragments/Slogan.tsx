import { ArrowDown } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const words = [
  {
    text: "Solidaritas,",
  },
  {
    text: "Integritas,",
  },
  {
    text: "Kreatifitas,",
  },
  {
    text: "Akhlak",
  },
  {
    text: "Teknologi",
  },
];

export default function Slogan() {
  return (
    <div className="flex flex-col items-center mt-0">
      <h1 className="font-bold text-3xl">
        VISI{" "}
        <span className="tracking-wide bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent">
          SIKAT
        </span>{" "}
        ITU
      </h1>
      <TypewriterEffect
        className="text-lg"
        words={words}
        cursorClassName="bg-gradient-to-r from-teal-500 to-green-600"
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
