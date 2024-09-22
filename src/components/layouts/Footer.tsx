import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "/public/img/logo.png";

const sosialMedia = [
  {
    name: "Wilbert Bernardi",
    src: "/img/wilbert.png",
    linkIg: "/",
    linkWa: "/",
  },
  {
    name: "Jacob Martua Haganta Simorangkir",
    src: "/img/jacob.png",
    linkIg: "/",
    linkWa: "/",
  },
];

const hamburgerContent = [
  {
    title: "Kenali Wilbert",
  },
  {
    title: "Kenali Jacob",
  },
  {
    title: "Visi & Misi",
  },
  {
    title: "Program Unggulan",
  },
  {
    title: "TIM SIKAT",
  },
  {
    title: "Dukung SIKAT",
  },
];

const misi = [
  {
    title: "Misi 01 - Solidaritas",
  },
  {
    title: "Misi 02 - Integritas",
  },
  {
    title: "Misi 03 - Kreatifitas",
  },

  {
    title: "Misi 04 - Akhlak",
  },
  {
    title: "Misi 05 - Teknologi",
  },
];

const programUnggulan = [
  {
    title: "Pengembangan Ekskul",
  },
  {
    title: "Pengembangan Produk Digital",
  },
  {
    title: "Pengembangan Sarana Komunikasi",
  },
];

export default function Footer() {
  return (
    <div className="flex flex-col gap-y-6 mt-32 p-4 min-h-96 bg-slate-200 rounded-t-3xl">
      <div className="flex flex-col gap-y-6">
        {sosialMedia.map((info, i) => (
          <div key={i} className="flex">
            <Avatar
              className={`w-20 h-20 ${
                i === 0 ? "bg-teal-500" : "bg-green-500"
              }`}
            >
              <AvatarImage src={info.src} className="object-cover" />
              <AvatarFallback>
                {info.name[0] + info.name.split(" ")[1][0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex ml-4 flex-col">
              <p className="text-muted-foreground">Media Sosial</p>
              <h1 className="text-lg font-medium tracking-wide line-clamp-1">
                {info.name}
              </h1>
              <div className="flex gap-x-2 mt-1">
                <FaInstagram size={24} className="cursor-pointer" />
                <FaWhatsapp size={24} className="cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Separator className="bg-slate-400" />
      <div className="flex flex-col gap-y-4">
        <p className="text-muted-foreground text-xl">Dukung SIKAT</p>
        {hamburgerContent.map((content, i) => (
          <div key={i} className="flex">
            <h1>{content.title}</h1>
          </div>
        ))}
      </div>
      <Separator className="bg-slate-400" />
      <div className="flex flex-col gap-y-4">
        <p className="text-muted-foreground text-xl">Visi & Misi</p>
        {misi.map((content, i) => (
          <div key={i} className="flex">
            <h1>{content.title}</h1>
          </div>
        ))}
      </div>
      <Separator className="bg-slate-400" />
      <div className="flex flex-col gap-y-4">
        <p className="text-muted-foreground text-xl">Program Unggulan</p>
        {programUnggulan.map((content, i) => (
          <div key={i} className="flex">
            <h1>
              Program {i + 1} - {content.title}
            </h1>
          </div>
        ))}
      </div>
      <Separator className="bg-slate-400" />
      <div className="flex">
        <Image src={Logo} alt="Logo SIKAT" width={100} height={100} />
      </div>
    </div>
  );
}
