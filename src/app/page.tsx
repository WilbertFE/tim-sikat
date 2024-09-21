"use client";

import { HeroImage } from "@/components/core";
import { Slogan } from "@/components/fragments";
import { LayoutPrestasi, AppleCard } from "@/components/layouts";

export default function Home() {
  return (
    <main className="pb-32">
      <div className="flex flex-col gap-y-4">
        <HeroImage />
        <Slogan />
        <LayoutPrestasi />
        <div className="flex flex-col overflow-x-hidden bg-slate-100 mt-12 rounded-xl mx-2 p-4">
          <div className="w-full space-y-2">
            <h1 className="text-center font-bold text-3xl tracking-wider">
              Visi & Misi
            </h1>
            <p className="text-center">
              Paslon Tiga Memiliki Visi Untuk Menerapkan Sistem{" "}
              <span>SIKAT</span> Pada Sekolah
            </p>
          </div>
          <div className="w-full">
            <AppleCard />
          </div>
        </div>
      </div>
    </main>
  );
}
