"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import FlickeringGrid from "@/components/magicui/flickering-grid";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      {/* Sol kısım: Metin içeriği */}
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className="-mt-14 inline-block text-[52px] font-bold text-black dark:text-white"
            >
              Gözün Yapısı
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
                  - Gözün Genel Yapısı
                </p>
                <p className="pb-6 font-medium">
                  - Görme Süreci
                </p>
                <p className="pb-6 font-medium">
                  - Görme Bozuklukları
                </p>
                <p className="pb-6 font-medium">
                  - Yaşa Bağlı Görme Sorunları
                </p>
                <p className="pb-6 font-medium">
                  - Beyin ve Görme
                </p>
                <p className="pb-6 font-medium">
                  - Merkezi Sinir Sistemi ve Göz
                </p>
                <p className="pb-6 font-medium">
                  - İbn Heysem ve Optiğe Katkıları
                </p>
                <p className="pb-6 font-medium">
                  - Sonuç
                </p>
              </div>
              <p className="pb-6 font-medium">
                - Yapımcı{" "}
                <a
                  href="https://blog-98.vercel.app/"
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

      {/* Sağ kısım: 3D önizleme */}
      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#d6ebe9] p-9">
        <Spline
          scene="https://prod.spline.design/7xZqx-OaD31gYMTQ/scene.splinecode"
          className="w-full h-full"
        />
      </section>
    </section>
  );
}
