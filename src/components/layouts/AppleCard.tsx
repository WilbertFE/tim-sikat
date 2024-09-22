"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCard() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ content, src }: { content: string; src: string }) => {
  return (
    <>
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          {content}
        </p>
        <Image
          src={src}
          alt="dummy-content"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-12 rounded-lg"
        />
      </div>
    </>
  );
};

const penjelasanMisi = [
  {
    content:
      "Mempertahankan dan Mengembangkan Kontribusi Secara Setara dan Adil Dalam Lingkungan Sekolah",
    src: "/img/solidaritas.png",
  },
  {
    content:
      "Menjadi Jembatan Komunikasi yang Transparan Antara Siswa dan Pihak Sekolah, Untuk Menyampaikan Kebutuhan dan Aspirasi Siswa",
    src: "/img/integritas.png",
  },
  {
    content:
      "Mempertahankan dan Mengembangkan Ekstrakulikuler yang Diminati Ekskul Akademik Maupun Non-Akademik Melalui Berbagai Metode Seperti Menggencarkan Kompetisi dan Perlombaan",
    src: "/img/kreatifitas.png",
  },
  {
    content:
      "Ikut Andil Dalam Mengajak dan Memotivasi Siswa Untuk Menjadi Siswa yang Berakhlak Mulia Sesuai Dengan Nilai-Nilai Agama dan Moral",
    src: "/img/akhlak.png",
  },
  {
    content:
      "Mengintegrasikan Teknologi Untuk Menunjang Kreatifitas dan Mempersiapkan Untuk Tantangan Di Dunia yang Semakin Digital",
    src: "/img/teknologi.png",
  },
];

const data = [
  {
    category: "Misi 01 - Solidaritas",
    title: "Menjaga Solidaritas",
    src: "/img/solidaritas.png",
    content: (
      <DummyContent
        content={penjelasanMisi[0].content}
        src={penjelasanMisi[0].src}
      />
    ),
  },
  {
    category: "Misi 02 - Integritas",
    title: "Menjaga Integritas",
    src: "/img/integritas.png",
    content: (
      <DummyContent
        content={penjelasanMisi[1].content}
        src={penjelasanMisi[1].src}
      />
    ),
  },
  {
    category: "Misi 03 - Kreatifitas",
    title: "Meningkatkan Kreatifitas",
    src: "/img/kreatifitas.png",
    content: (
      <DummyContent
        content={penjelasanMisi[2].content}
        src={penjelasanMisi[2].src}
      />
    ),
  },

  {
    category: "Misi 04 - Akhlak",
    title: "Mengembangkan Akhlak Mulia",
    src: "/img/akhlak.png",
    content: (
      <DummyContent
        content={penjelasanMisi[3].content}
        src={penjelasanMisi[3].src}
      />
    ),
  },
  {
    category: "Misi 05 - Teknologi",
    title: "Mengintegrasikan Teknologi",
    src: "/img/teknologi.png",
    content: (
      <DummyContent
        content={penjelasanMisi[4].content}
        src={penjelasanMisi[4].src}
      />
    ),
  },
];
