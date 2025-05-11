"use client";

import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import manWIthRobot from "@/public/images/gz.png";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[40px] font-bold text-black dark:text-white`}
            >
              Tarih Öncesine Kısa Bakış
            </span>
            <p className="pb-6 font-medium">
              🔹 Dinozorlar (Jurassic Devri), mamutlar (Buz Devri), moa kuşları (Holosen Devri) gibi türler milyonlarca yıl önce yok oldu.
            </p>
            <p className="pb-6 font-medium"> 🔹 Bu türler, dönemin ekosisteminde önemli roller oynadı. 
            </p>

          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#e0f5ff] p-9">
        <Image src={manWIthRobot} alt="Man sitting in wheelchair" />
      </section>
    </section>
  );
}
