import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { AppleCard } from "@/components/fragments";
import { DummyCardContent } from "@/components/fragments";

export default function AwasiSikatPage() {
  return (
    <div className="min-h-screen flex flex-wrap px-4 text-center text-xl">
      <div className="w-full flex justify-center flex-col pt-24">
        <h1 className="text-center font-bold">
          Tim Anti-Korupsi{" "}
          <span className="tracking-wide bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent">
            SIKAT
          </span>
        </h1>
        <Image
          src="/img/logo.png"
          alt="logo"
          width={128}
          height={128}
          className="mx-auto mt-2"
        />
        <AppleCard data={data} />
      </div>
      <div className="w-full flex justify-center flex-col pt-24">
        <h1 className="text-center font-bold">Program SIKAT</h1>
        <ExpandableCardDemo />
      </div>
      <div className="w-full flex justify-center flex-col pt-24 pb-36">
        <h1 className="text-center font-bold mb-4">Kas SIKAT</h1>
        <Table>
          <TableCaption>Data kas tim SIKAT</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">Tanggal</TableHead>
              <TableHead className="text-center">Projek</TableHead>
              <TableHead className="text-right">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">....</TableCell>
              <TableCell>....</TableCell>
              <TableCell className="text-right">....</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

const deskripsiAnggota = [
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
    content: "Can't stop listening to The Night We Met",
    src: "/img/anggi.jpeg",
  },
  {
    content: "Menjadi lebih baik dari hari ke hari",
    src: "/img/david.jpeg",
  },
  {
    content:
      "Merupakan peminat olahraga Formula 1 terutama pendukung dari tim scuderia Ferrari dan memiliki ketrampilan dalam menggambar, baik tradisional ataupun digital.",
    src: "/img/oliv.jpeg",
  },
  {
    content: "memiliki ketertarikan dalam mempelajari hal hal baru ✨",
    src: "/img/tia.jpeg",
  },
  {
    content:
      "Seperti bintang yang mencari sinar, penuh rasa ingin tahu tuk menemukan jalannya.",
    src: "/img/nesya.jpeg",
  },
  {
    content: "Berenergi dan semangat",
    src: "/img/andre.jpeg",
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
      <DummyCardContent
        content={deskripsiAnggota[0].content}
        src={deskripsiAnggota[0].src}
      />
    ),
  },
  {
    category: "Wakil Ketua",
    title: "Jacob Simorangkir",
    src: "/img/jacob-2.jpeg",
    content: (
      <DummyCardContent
        content={deskripsiAnggota[1].content}
        src={deskripsiAnggota[1].src}
      />
    ),
  },
  {
    category: "Anggota",
    title: "Hasian Tambunan",
    src: "/img/hasian.jpeg",
    content: (
      <DummyCardContent
        content={deskripsiAnggota[2].content}
        src={deskripsiAnggota[2].src}
      />
    ),
  },

  {
    category: "Anggota",
    title: "Anggi Tambunan",
    src: "/img/anggi.jpeg",
    content: (
      <DummyCardContent
        content={deskripsiAnggota[3].content}
        src={deskripsiAnggota[3].src}
      />
    ),
  },
  {
    category: "Anggota",
    title: "David Bonaventura",
    src: "/img/david.jpeg",
    content: (
      <DummyCardContent
        content={deskripsiAnggota[4].content}
        src={deskripsiAnggota[4].src}
      />
    ),
  },
  {
    category: "Anggota",
    title: "Olivia Sitanggang",
    src: "/img/oliv.jpeg",
    content: (
      <DummyCardContent
        content={deskripsiAnggota[5].content}
        src={deskripsiAnggota[5].src}
      />
    ),
  },
  {
    category: "Anggota",
    title: "Tia Sitompul",
    src: "/img/tia.jpeg",
    content: (
      <DummyCardContent
        content={deskripsiAnggota[6].content}
        src={deskripsiAnggota[6].src}
      />
    ),
  },
  {
    category: "Anggota",
    title: "Nesya Gultom",
    src: "/img/nesya.jpeg",
    content: (
      <DummyCardContent
        content={deskripsiAnggota[7].content}
        src={deskripsiAnggota[7].src}
      />
    ),
  },
  {
    category: "Anggota",
    title: "Andre Panjaitan",
    src: "/img/andre.jpeg",
    content: (
      <DummyCardContent
        content={deskripsiAnggota[8].content}
        src={deskripsiAnggota[8].src}
      />
    ),
  },
  {
    category: "Anggota",
    title: "Kezia Laura",
    src: "/img/kezia-2.jpeg",
    content: (
      <DummyCardContent
        content={deskripsiAnggota[9].content}
        src={deskripsiAnggota[9].src}
      />
    ),
  },
];
