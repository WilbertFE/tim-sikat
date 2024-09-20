"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CircleChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

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
    title: "Kenali Wilbert",
  },
  {
    title: "Kenali Jacob",
  },
  {
    title: "Program Kerja",
  },
  {
    title: "Dukung SIKAT",
  },
  {
    title: "TIM SIKAT",
  },

  {
    title: "Kawal SIKAT",
  },
  {
    title: "SIKAT-kan Instagram",
  },
  {
    title: "SIKAT-kan Whatsapp",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 px-4 py-2 shadow-md lg:shadow-sm z-10 bg-white">
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
        <div className="lg:hidden flex items-center p-4">
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
          <h1 className="text-xl font-bold flex-1 text-center -ml-4">SIKAT</h1>
        </div>
      </nav>
      {isOpen && (
        <ul className="absolute pt-20 lg:hidden bg-slate-50 px-4 flex flex-col justify-around min-h-screen left-0 right-0 top-0 bottom-0">
          {hamburgerContent.map((content, i) => (
            <li
              className="text-xl p-2 font-medium flex items-center gap-x-1 tracking-wide"
              key={i}
            >
              {content.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
