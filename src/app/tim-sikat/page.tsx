import { AppleCard, DummyCardContent } from "@/components/fragments";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function TimSikatPage() {
  return (
    <div className="flex flex-wrap mt-24 gap-y-12">
      <div className="w-full">
        <h1 className="text-center font-bold text-xl tracking-wider">
          Tim{" "}
          <span className="tracking-wide bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent">
            SIKAT
          </span>
        </h1>
        <AppleCard data={dataAnggota} />
      </div>
      <div className="w-full pb-32 px-4">
        <h1 className="text-center font-bold text-xl tracking-wider mb-4">
          Akun Instagram
        </h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Nama</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Link</TableHead>
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

const deskripsiAnggota = [
  {
    content: `Seorang pelajar ambisius dan sangat akrab dengan teknologi. Hobi nge-gym, lari, baca buku, public speaking, dll.`,
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

const dataAnggota = [
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
