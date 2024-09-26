import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid";
import KartuAntiKorupsi from "@/components/layouts/KartuAntiKorupsi";
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

export default function page() {
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
        <KartuAntiKorupsi />
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
