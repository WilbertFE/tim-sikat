"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CircleChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import LogoSikat from "/public/img/logo.png";
import Link from "next/link";

const navbarContent = [
  {
    title: "Kenali Kandidat",
    icon: <CircleChevronDown strokeWidth={1.5} />,
  },
  {
    title: "Kawal SIKAT",
  },
  {
    title: "Kontak",
  },
  {
    title: "Tim SIKAT",
  },
  {
    title: "Program Kerja",
    icon: <CircleChevronDown strokeWidth={1.5} />,
  },
  {
    title: "Dukung SIKAT",
  },
];

const hamburgerContent = [
  {
    title: "Home",
    ref: "/",
  },
  {
    title: "Kenali Wilbert",
    ref: "/#wilbert",
  },
  {
    title: "Kenali Jacob",
    ref: "/#jacob",
  },
  {
    title: "Visi & Misi",
    ref: "/#visi-misi",
  },
  {
    title: "Program Unggulan",
    ref: "/#program-unggulan",
  },
  {
    title: "TIM SIKAT",
    ref: "/tim-sikat",
  },
  {
    title: "Tim Anti-Korupsi",
    ref: "/awasi-sikat",
  },
  {
    title: "Dukung SIKAT",
    ref: "/#footer",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 px-4 py-1 shadow-md lg:shadow-sm z-[60] bg-white">
        <ul className="hidden lg:flex lg:justify-around lg:p-4">
          {navbarContent.map((content, i) => (
            <li key={i}>
              <HoverCard>
                <HoverCardTrigger className="text-xl flex items-center gap-x-1 tracking-wide">
                  {content.title}
                  {content.icon ? content.icon : null}
                </HoverCardTrigger>
                <HoverCardContent>
                  The React Framework – created and maintained by @vercel.
                </HoverCardContent>
              </HoverCard>
            </li>
          ))}
        </ul>
        <div className="lg:hidden relative flex items-center p-4">
          {(isOpen && (
            <X
              size={32}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          )) || (
            <Menu
              size={32}
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
          <Image
            src={LogoSikat}
            alt="Logo"
            width={128}
            height={128}
            className="absolute right-1/2 translate-x-1/2"
          />
        </div>
      </nav>
      {isOpen && (
        <ul className="fixed pt-20 lg:hidden bg-slate-50 px-4 flex flex-col justify-around min-h-screen left-0 right-0 top-0 bottom-0 z-50">
          {hamburgerContent.map((content, i) => (
            <li
              className="text-xl p-2 font-medium flex items-center gap-x-1 tracking-wide"
              key={i}
              onClick={() => setIsOpen(false)}
            >
              <Link href={content.ref ? content.ref : "/"}>
                {content.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
