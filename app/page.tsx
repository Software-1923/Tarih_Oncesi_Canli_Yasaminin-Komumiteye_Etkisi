"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import FlickeringGrid from "@/components/magicui/flickering-grid";
import robotImage from "@/public/robot.png"; // robot görselini doğru bir dosya yolu ile değiştirin.

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      {/* Sol kısım: Metin içeriği */}
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span className="-mt-14 inline-block text-[40px] font-bold text-black dark:text-white">
              Tarih Öncesi Canlıların Kömiteye Etkisi
            </span>
            <p className="pb-6 font-medium">
              🔹 Genetik mühendislik yoluyla geçmişe yolculuk: Bilim, soyu tükenmiş türleri geri getirmeye çalışıyor&quot;
            </p>
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
                <p className="pb-6 font-medium"> </p>
                <p className="pb-6 font-medium">- Tarih Öncesine Kısa Bakış</p>
                <p className="pb-6 font-medium">- Genetik Mühendislikle Tür Diriltimi</p>
                <p className="pb-6 font-medium">- Colossal Biosciences Örneği</p>
                <p className="pb-6 font-medium">- Komüniteye ve Ekosisteme Etki</p>
                <p className="pb-6 font-medium">- Türler Gerçekten "Aynı" mı?</p>
                <p className="pb-6 font-medium">- Geçmişi Geri Getirmek Ne Kadar Doğru?</p>
                <p className="pb-6 font-medium">
                  - Yapımcı ve Kaynakçalar
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
      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#e0f5ff] p-9">
        <Image
          src={robotImage} // Görsel kaynağı
          alt="Man sitting in wheelchair"
          width={400} // Örnek boyut
          height={400} // Örnek boyut
          className="object-contain"
        />
      </section>
    </section>
  );
}
