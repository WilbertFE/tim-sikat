"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function KartuAntiKorupsi() {
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
    content: `Seorang pelajar ambisius dan sangat akrab dengan teknologi`,
    src: "/img/gym.jpeg",
  },
  {
    content: "Pelajar yang bertanggugjawab dan mudah beradaptasi",
    src: "/img/jacob-2.jpeg",
  },
  {
    content: "Pemuda paling baik, cerdas, dan kreatif",
    src: "/img/hasian.jpeg",
  },
  {
    content: "",
    src: "/img/akhlak-2.jpeg",
  },
  {
    content: "",
    src: "/img/oliv.jpeg",
  },
  {
    content: "",
    src: "/img/teknologi-2.jpeg",
  },
  {
    content: "",
    src: "/img/teknologi-2.jpeg",
  },
  {
    content: "",
    src: "/img/teknologi-2.jpeg",
  },
  {
    content: "",
    src: "/img/teknologi-2.jpeg",
  },
  {
    content: "little girl who loves music",
    src: "/img/kezia-2.jpeg",
  },
];

const data = [
  {
    category: "Ketua",
    title: "Wilbert Bernardi",
    src: "/img/gym.jpeg",
    content: (
      <DummyContent
        content={penjelasanMisi[0].content}
        src={penjelasanMisi[0].src}
      />
    ),
  },
  {
    category: "Wakil Ketua",
    title: "Jacob Simorangkir",
    src: "/img/jacob-2.jpeg",
    content: (
      <DummyContent
        content={penjelasanMisi[1].content}
        src={penjelasanMisi[1].src}
      />
    ),
  },
  {
    category: "Anggota",
    title: "Hasian Tambunan",
    src: "/img/hasian.jpeg",
    content: (
      <DummyContent
        content={penjelasanMisi[2].content}
        src={penjelasanMisi[2].src}
      />
    ),
  },

  {
    category: "Anggota",
    title: "Anggi Tambunan",
    src: "/img/akhlak-2.jpeg",
    content: (
      <DummyContent
        content={penjelasanMisi[3].content}
        src={penjelasanMisi[3].src}
      />
    ),
  },
  {
    category: "Anggota",
    title: "David Bonaventura",
    src: "/img/teknologi-2.jpeg",
    content: (
      <DummyContent
        content={penjelasanMisi[4].content}
        src={penjelasanMisi[4].src}
      />
    ),
  },
  {
    category: "Anggota",
    title: "Olivia Sitanggang",
    src: "/img/oliv.jpeg",
    content: (
      <DummyContent
        content={penjelasanMisi[4].content}
        src={penjelasanMisi[4].src}
      />
    ),
  },
  {
    category: "Anggota",
    title: "Tia Sitompul",
    src: "/img/teknologi-2.jpeg",
    content: (
      <DummyContent
        content={penjelasanMisi[4].content}
        src={penjelasanMisi[4].src}
      />
    ),
  },
  {
    category: "Anggota",
    title: "Nesya Uli",
    src: "/img/teknologi-2.jpeg",
    content: (
      <DummyContent
        content={penjelasanMisi[4].content}
        src={penjelasanMisi[4].src}
      />
    ),
  },
  {
    category: "Anggota",
    title: "Andre Panjaitan",
    src: "/img/teknologi-2.jpeg",
    content: (
      <DummyContent
        content={penjelasanMisi[4].content}
        src={penjelasanMisi[4].src}
      />
    ),
  },
  {
    category: "Anggota",
    title: "Kezia",
    src: "/img/kezia-2.jpeg",
    content: (
      <DummyContent
        content={penjelasanMisi[9].content}
        src={penjelasanMisi[9].src}
      />
    ),
  },
];
