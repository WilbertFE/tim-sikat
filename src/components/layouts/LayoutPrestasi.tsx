import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CircleChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import GambarWilbert from "/public/img/wilbert.png";
import GambarJacob from "/public/img/jacob.png";

const paslonTiga = [
  {
    nama: "Wilbert Bernardi",
    jabatan: "Calon Ketua Osis",
    pesan: "Mewujudkan Komunikasi yang Transparan Untuk Seluruh Siswa Methonam",
    prestasi: [
      "Pernah Meraih Penghargaan Akademik Juara 2 Umum Ketika Kelas 10 SMA",
      "Salah satu anggota tim STEM top 10 se-sumut",
      "Menjuarai Lomba Cerdas Cermat, Olimpiade Matematika, dan Olimpiade Bahasa Indonesia",
      "Sekarang Menjabat Sebagai Ketua Ekskul Komputer (Mikroskil)",
      "Memiliki Satu Tahun Pengalaman Dalam Bidang Komputer dan Programming",
    ],
  },
  {
    nama: "Jacob Martua Haganta Simorangkir",
    jabatan: "Calon Wakil Ketua Osis",
    pesan: "Mewujudkan Komunikasi yang Transparan Untuk Seluruh Siswa Methonam",
    prestasi: [
      "Pernah Meraih Penghargaan Akademik Juara 1 Umum Ketika Kelas 10 SMA",
      "Salah satu anggota tim STEM top 10 se-sumut",
      "Memperoleh Posisi 1 dalam TOBK GO se Deli Serdang",
      "Memperoleh Juara 1 dalam OSN-K Deli Serdang",
      "Memperoleh medali Perak dalam POSI",
    ],
  },
];

export default function LayoutPrestasi() {
  return (
    <div className="flex flex-col gap-y-12">
      {paslonTiga.map((paslon, i) => (
        <div key={i} className="flex flex-col">
          <Card
            className={`mx-1 rounded-xl overflow-hidden relative ${
              i === 0 ? "bg-teal-500" : "bg-green-500"
            }`}
          >
            <CardHeader className="text-center flex flex-col items-center justify-center px-4">
              <CardTitle className="font-bold text-3xl text-white">
                {paslon.jabatan}
              </CardTitle>
              <CardDescription className="text-slate-200 text-xl">
                {paslon.nama}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-0 z-10">
              <Image
                src={i === 0 ? GambarWilbert : GambarJacob}
                alt={paslon.nama}
                width={400}
                height={400}
                className="-mt-32"
              />
            </CardContent>
            <CardFooter className="absolute bottom-0 flex z-20 flex-col">
              <blockquote className="text-center text-white font-medium tracking-wide">
                &quot;{paslon.pesan}&quot;
              </blockquote>
              <CircleChevronDown
                color="#ffffff"
                size={32}
                className="mt-3 animate-bounce"
              />
            </CardFooter>
          </Card>
          <div className="px-4 flex-col flex mt-4">
            <div className="flex">
              <Avatar className="w-16 h-16">
                <AvatarImage
                  src={i === 0 ? "/img/wilbert.png" : "/img/jacob.png"}
                  alt={paslon.nama}
                  className={`object-cover ${
                    i === 0 ? "bg-teal-500" : "bg-green-500"
                  }`}
                />
                <AvatarFallback>{paslon.nama}</AvatarFallback>
              </Avatar>
              <div className="flex-1 ml-4">
                <span className="text-muted-foreground text-lg">
                  5 Prestasi dan Pengalaman
                </span>
                <h1 className="font-medium text-2xl tracking-widest">
                  {paslon.nama}
                </h1>
              </div>
            </div>
            <div className="flex flex-col mt-6 px-4 gap-y-2">
              {paslon.prestasi.map((prestasi, i) => (
                <>
                  <div key={i} className="flex gap-x-3">
                    <h1 className="font-bold text-3xl">0{i + 1}</h1>
                    <p>{prestasi}</p>
                  </div>
                  <Separator />
                </>
              ))}
            </div>
          </div>
          <button
            className={`${
              i === 0
                ? "bg-teal-500 hover:border-teal-500"
                : "bg-green-500 hover:border-green-500"
            } px-8 py-2 mx-4 mt-4 rounded-md text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent`}
          >
            Lebih Kenali {paslon.nama.split(" ")[0]}
          </button>
        </div>
      ))}
    </div>
  );
}
