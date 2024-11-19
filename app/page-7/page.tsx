"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";
import Spline from "@splinetool/react-spline/next";
import pag from "@/public/images/eyes-end.png";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[44px] font-bold text-black dark:text-white`}
            >
              Merkezi Sinir Sistemi ve Göz
            </span>
            <p className="pb-6 font-medium">
            &quot;Göz hareketleri, beyincik tarafından koordine edilir. Görme bilgileri, optik sinirler aracılığıyla beyne iletilir ve burada işlenir. Örneğin, görme korteksi renk, şekil ve hareketleri analiz eder.&quot;
            </p>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#ffefd6] p-9">
        <Image src={pag} alt="Boy and girl playing with robot" />
      </section>
    </section>
  );
}
