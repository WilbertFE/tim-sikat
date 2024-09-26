"use client";

import { HeroImage } from "@/components/core";
import { Slogan } from "@/components/fragments";
import { LayoutPrestasi, VisiMisi, ProgramKerja } from "@/components/layouts";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-y-4">
        <HeroImage />
        <Slogan />
        <LayoutPrestasi />
        <VisiMisi />
        <ProgramKerja />
      </div>
    </main>
  );
}
