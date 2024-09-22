"use client";

import { HeroImage } from "@/components/core";
import { Slogan } from "@/components/fragments";
import { LayoutPrestasi, VisiMisi } from "@/components/layouts";
import { ExpandableCardDemo } from "@/components/layouts";

export default function Home() {
  return (
    <main className="pb-32">
      <div className="flex flex-col gap-y-4">
        <HeroImage />
        <Slogan />
        <LayoutPrestasi />
        <VisiMisi />
        <div className="flex flex-col gap-y-8 mt-12 rounded-xl mx-2 p-4 bg-slate-100">
          <div>
            <h1 className="text-center font-bold text-3xl">Program Unggulan</h1>
            <p className="text-muted-foreground text-center">
              Program Spesifik yang Akan Kami Realisasikan.{" "}
              <strong>Tekan</strong> Untuk Informasi Lebih Lanjut.
            </p>
          </div>
          <ExpandableCardDemo />
        </div>
      </div>
    </main>
  );
}
