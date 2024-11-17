"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import pag from "@/public/images/ibn-i-heysem.jpg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[44px] font-bold text-black dark:text-white`}
            >
              İbn Heysem ve Optiğe Katkıları
            </span>
            <p className="pb-6 font-medium">
            &quot;İbn Heysem, ışığın doğrusal yayılımını ve yansıma kurallarını keşfetmiştir. Kitab el-Menazir adlı eseri, modern optiğin temelini oluşturur ve gözün ışık algılama sürecine dair açıklamalar içerir.&quot;
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
