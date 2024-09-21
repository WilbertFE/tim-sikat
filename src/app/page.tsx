import { HeroImage } from "@/components/core";
import { Slogan } from "@/components/fragments";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <HeroImage />
        <Slogan />
      </div>
    </main>
  );
}
