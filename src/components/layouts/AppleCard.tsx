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

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="/img/wilbert.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Misi 01 - Solidaritas",
    title: "Menjaga Solidaritas",
    src: "/img/solidaritas.png",
    content: <DummyContent title={this?.title} />,
  },
  {
    category: "Misi 02 - Integritas",
    title: "Menjaga Integritas",
    src: "/img/integritas.png",
    content: <DummyContent />,
  },
  {
    category: "Misi 03 - Kreatifitas",
    title: "Launching the new Apple Vision Pro.",
    src: "/img/kreatifitas.png",
    content: <DummyContent />,
  },

  {
    category: "Misi 04 - Akhlak",
    title: "Meningkatkan Kreatifitas",
    src: "/img/akhlak.png",
    content: <DummyContent />,
  },
  {
    category: "Misi 05 - Teknologi",
    title: "Mengintegrasikan Teknologi",
    src: "/img/teknologi.png",
    content: <DummyContent />,
  },
];
