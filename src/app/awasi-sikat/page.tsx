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
        <KartuAntiKorupsi />
      </div>
      <div className="w-full flex justify-center flex-col pt-24">
        <h1 className="text-center font-bold">Program SIKAT</h1>
        <ExpandableCardDemo />
      </div>
      <div className="w-full flex justify-center flex-col pt-24 pb-36">
        <h1 className="text-center font-bold">Kas SIKAT</h1>
        <Table>
          <TableCaption>Data kas tim SIKAT</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Tanggal</TableHead>
              <TableHead>Projek</TableHead>
              <TableHead className="text-right">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
