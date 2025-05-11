"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import pag from "@/public/images/5.jpg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[40px] font-bold text-black dark:text-white`}
            >
              Komüniteye ve Ekosisteme Etki
            </span>
            <p className="pb-6 font-medium">
              🔹 Yeni türler çevreye nasıl uyum sağlayacak?
            </p>
            <p className="pb-6 font-medium">
              🔹 Mevcut türler için tehdit mi, destek mi?
            </p>
            <p className="pb-6 font-medium">
              🔹 İnsan toplumu ve etik tartışmalar büyüyor.
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
