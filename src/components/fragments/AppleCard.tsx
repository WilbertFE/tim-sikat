"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AppleCard({ data }: { data: any[] }) {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <Carousel items={cards} />
    </div>
  );
}
