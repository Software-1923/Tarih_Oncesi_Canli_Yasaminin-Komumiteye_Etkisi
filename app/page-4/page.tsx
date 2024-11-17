"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import pageA4 from "@/public/images/grm.jpeg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[40px] font-bold text-black dark:text-white`}
            >
              Görme Bozuklukları
            </span>
            <p className="pb-6 font-medium">
            - &quot;Astigmatizm: Kornea veya mercek yüzeyindeki eğriliklerden kaynaklanan bulanık görme.&quot;
            </p>
            <p className="pb-6 font-medium">
            - &quot;Miyopi: Gözün ön kısmının aşırı uzun olması nedeniyle uzak nesneleri net görememe.&quot;
            </p>
            <p className="pb-6 font-medium">
            - &quot;Hipermetropi: Gözün kısa olması nedeniyle yakın nesneleri net görememe.&quot;
            </p>
            <p className="pb-6 font-medium">
            - &quot;Renk Körlüğü: Bazı renklerin algılanamaması veya karıştırılması, genellikle genetik kaynaklıdır.&quot;
            </p>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#ffefd6] p-9">
        <Image src={pageA4} alt="Boy and girl playing with robot" />
      </section>
    </section>
  );
}
