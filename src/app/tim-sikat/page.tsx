import KartuAntiKorupsi from "@/components/layouts/KartuAntiKorupsi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const data = [
  {
    name: "Wilbert Bernardi",
    username: "wilbertbernardi_fe",
    link: "https://www.instagram.com/wilbertbernardi_fe/",
  },
  {
    name: "Jacob Simorangkir",
    username: "jacob_simorangkir",
    link: "https://www.instagram.com/jacob_simorangkir/",
  },
  {
    name: "Hasian Tambunan",
    username: "hsn.tbn768",
    link: "https://www.instagram.com/hsn.tbn768/",
  },
  {
    name: "Anggi Tambunan",
    username: "anggiiitbn_",
    link: "https://www.instagram.com/anggiiitbn_/",
  },
  {
    name: "David Bonaventura",
    username: "mahiroo_26",
    link: "https://www.instagram.com/mahiroo_26/",
  },
  {
    name: "Olivia Sitanggang",
    username: "akuiniolip",
    link: "https://www.instagram.com/akuiniolip/",
  },
  {
    name: "Tia Sitompul",
    username: "tiaastmpl",
    link: "https://www.instagram.com/tiaastmpl/",
  },
  {
    name: "Nesya Uli",
    username: "nssya_uli",
    link: "https://www.instagram.com/nssya_uli/",
  },
  {
    name: "Andre Panjaitan",
    username: "andre.j0nath4n",
    link: "https://www.instagram.com/andre.j0nath4n/",
  },
  {
    name: "Kezia Laura",
    username: "kezialrra",
    link: "https://www.instagram.com/kezialrra/",
  },
];

export default function page() {
  return (
    <div className="flex flex-wrap mt-24 gap-y-12">
      <div className="w-full">
        <h1 className="text-center font-bold text-xl tracking-wider">
          Tim{" "}
          <span className="tracking-wide bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent">
            SIKAT
          </span>
        </h1>
        <KartuAntiKorupsi />
      </div>
      <div className="w-full pb-32 px-4">
        <h1 className="text-center font-bold text-xl tracking-wider mb-4">
          Akun Instagram
        </h1>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Nama</TableHead>
              <TableHead>Username</TableHead>
              <TableHead className="text-center">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell>
                  <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                    <Link href={item.link}>SIKAT</Link>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
