"use client";

import { HeroImage } from "@/components/core";
import { Slogan } from "@/components/fragments";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { CircleChevronDown } from "lucide-react";

export default function Home() {
  return (
    <main className="pb-32">
      <div className="flex flex-col gap-y-12">
        <HeroImage />
        <Slogan />
        <div className="flex flex-col">
          <Card className="mx-1 rounded-xl overflow-hidden p-0">
            <AuroraBackground className="relative w-full h-full bg-slate-700">
              <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
              >
                <CardHeader className="text-center">
                  <CardTitle className="font-bold text-3xl text-white">
                    Calon Ketua Osis
                  </CardTitle>
                  <CardDescription className="text-slate-200 text-xl">
                    Wilbert Bernardi
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center py-0">
                  <Image
                    src="/img/wilbert.png"
                    alt="Wilbert Bernardi"
                    width={400}
                    height={400}
                    className="-mt-32"
                  />
                </CardContent>
                <CardFooter className="absolute bottom-0 flex flex-col">
                  <blockquote className="text-center text-white font-medium tracking-wide">
                    &quot;Mewujudkan Komunikasi yang Transparan Untuk Seluruh
                    Siswa Methonam&quot;
                  </blockquote>
                  <CircleChevronDown
                    color="#ffffff"
                    size={32}
                    className="mt-3 animate-bounce"
                  />
                </CardFooter>
              </motion.div>
            </AuroraBackground>
          </Card>
        </div>
      </div>
    </main>
  );
}
