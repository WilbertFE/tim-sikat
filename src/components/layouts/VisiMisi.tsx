import { AppleCard } from "@/components/fragments";
import { DummyCardContent } from "../fragments";

const penjelasanMisi = [
  {
    content:
      "Mempertahankan dan Mengembangkan Kontribusi Secara Setara dan Adil Dalam Lingkungan Sekolah",
    src: "/img/solidaritas-2.jpeg",
  },
  {
    content:
      "Menjadi Jembatan Komunikasi yang Transparan Antara Siswa dan Pihak Sekolah, Untuk Menyampaikan Kebutuhan dan Aspirasi Siswa",
    src: "/img/integritas-2.jpeg",
  },
  {
    content:
      "Mempertahankan dan Mengembangkan Ekstrakulikuler yang Diminati Ekskul Akademik Maupun Non-Akademik Melalui Berbagai Metode Seperti Menggencarkan Kompetisi dan Perlombaan",
    src: "/img/kreatifitas-2.jpeg",
  },
  {
    content:
      "Ikut Andil Dalam Mengajak dan Memotivasi Siswa Untuk Menjadi Siswa yang Berakhlak Mulia Sesuai Dengan Nilai-Nilai Agama dan Moral",
    src: "/img/akhlak-2.jpeg",
  },
  {
    content:
      "Mengintegrasikan Teknologi Untuk Menunjang Kreatifitas dan Mempersiapkan Untuk Tantangan Di Dunia yang Semakin Digital",
    src: "/img/teknologi-2.jpeg",
  },
];

const data = [
  {
    category: "Misi 01 - Solidaritas",
    title: "Menjaga Solidaritas",
    src: "/img/solidaritas-2.jpeg",
    content: (
      <DummyCardContent
        content={penjelasanMisi[0].content}
        src={penjelasanMisi[0].src}
      />
    ),
  },
  {
    category: "Misi 02 - Integritas",
    title: "Menjaga Integritas",
    src: "/img/integritas-2.jpeg",
    content: (
      <DummyCardContent
        content={penjelasanMisi[1].content}
        src={penjelasanMisi[1].src}
      />
    ),
  },
  {
    category: "Misi 03 - Kreatifitas",
    title: "Meningkatkan Kreatifitas",
    src: "/img/kreatifitas-2.jpeg",
    content: (
      <DummyCardContent
        content={penjelasanMisi[2].content}
        src={penjelasanMisi[2].src}
      />
    ),
  },

  {
    category: "Misi 04 - Akhlak",
    title: "Mengembangkan Akhlak Mulia",
    src: "/img/akhlak-2.jpeg",
    content: (
      <DummyCardContent
        content={penjelasanMisi[3].content}
        src={penjelasanMisi[3].src}
      />
    ),
  },
  {
    category: "Misi 05 - Teknologi",
    title: "Mengintegrasikan Teknologi",
    src: "/img/teknologi-2.jpeg",
    content: (
      <DummyCardContent
        content={penjelasanMisi[4].content}
        src={penjelasanMisi[4].src}
      />
    ),
  },
];

export default function VisiMisi() {
  return (
    <div
      id="visi-misi"
      className="flex flex-col overflow-x-hidden bg-slate-100 mt-12 rounded-xl mx-2 p-4"
    >
      <div className="w-full space-y-2">
        <h1 className="text-center font-bold text-3xl tracking-wider">
          Visi & Misi
        </h1>
        <p className="text-center">
          Paslon Tiga Memiliki Visi Untuk Menerapkan Sistem{" "}
          <span className="tracking-wide bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent">
            SIKAT
          </span>{" "}
          Pada Sekolah. <strong>Tekan</strong> Untuk Melihat Detailnya.
        </p>
      </div>
      <div className="w-full">
        <AppleCard data={data} />
      </div>
    </div>
  );
}
