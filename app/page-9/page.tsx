"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";
import Spline from "@splinetool/react-spline/next";
import pag from "@/public/images/end.jpg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              Sonuç
            </span>
            <p className="pb-6 font-medium">
            &quot;Göz, görme sistemi ve beynin iş birliği sayesinde çevremizi algılamamızı sağlar. Görme bozukluklarının anlaşılması ve tarihsel katkılar, bu mekanizmanın daha iyi kavranmasına yardımcı olur.&quot;
            </p>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#d6ebe9] p-9">
        <Spline
          scene="https://prod.spline.design/pPHrngw7uFBX5VJn/scene.splinecode"
          className="w-full h-full"
        />
      </section>
    </section>
  );
}
