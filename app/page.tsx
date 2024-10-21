"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button"; // Button bileşeni kullanılmadığı için kaldırabilirsin eğer gerek yoksa
import Link from "next/link"; // Link bileşeni henüz kullanılmıyor, gerekliyse aşağıda kullanabilirsin.

import robot from "@/public/images/1.jpg";
import FlickeringGrid from "@/components/magicui/flickering-grid";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className="-mt-14 inline-block text-[64px] font-bold text-black dark:text-white"
            >
              Konuşmalar
            </span>
            <div className="relative h-[180px] rounded-lg w-full bg-background overflow-hidden border">  
              <div className="scroll-container relative overflow-y-auto max-h-[200px] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400">
                <FlickeringGrid
                  className="z-0 absolute inset-0 w-full h-full"
                  squareSize={4}
                  gridGap={6}
                  color="#6B7280"
                  maxOpacity={0.5}
                  flickerChance={0.1}
                  height={800}
                  width={900}
                />
                <p className="pb-6 font-medium"></p>
                <p className="pb-6 font-medium">
                  - Giriş
                </p>
                <p className="pb-6 font-medium">
                  - Bağlılık Kavramı
                </p>
                <p className="pb-6 font-medium">
                  - İçtenlik ve Ahlaki Erdem
                </p>
                <p className="pb-6 font-medium">
                  - Toplumsal Birlik
                </p>
                <p className="pb-6 font-medium">
                  - Soru ve Cevaplar
                </p>
                <p className="pb-6 font-medium">
                  - Diğer Filozoflar ve Sözleri
                </p>
                <p className="pb-6 font-medium">
                  - Sonuç
                </p>
              </div>
              <p className="pb-6 font-medium">
                - Yapımcı{" "}
                <a
                  href="https://www.instagram.com/d_mr.softwarx/"
                  target="_blank"
                  rel="noreferrer"
                  className="pb-1 text-zinc-800 dark:text-zinc-100 underline font-medium"
                >
                  Berkay
                </a>{" "}
              </p>

              <div className="flex flex-col items-center">
                {/* Siyah kutucuk */}
                <div className="mt-5 w-full h-1 bg-black"></div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* İkinci kısım */}
      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#d6ebe9] p-9">
        <Image src={robot} alt="Man sitting in wheelchair" />
      </section>
    </section>
  );
}
