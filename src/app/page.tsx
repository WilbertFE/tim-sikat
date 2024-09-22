"use client";

import { HeroImage } from "@/components/core";
import { Slogan } from "@/components/fragments";
import { LayoutPrestasi, VisiMisi } from "@/components/layouts";

export default function Home() {
  return (
    <main className="pb-32">
      <div className="flex flex-col gap-y-4">
        <HeroImage />
        <Slogan />
        <LayoutPrestasi />
        <VisiMisi />
      </div>
    </main>
  );
}
