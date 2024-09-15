"use client";

import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import manWIthRobot from "@/public/images/2.jpg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              Tanımı
            </span>
            <p className="pb-6 font-medium">
            &quot;Felsefe, &apos;bilgelik sevgisi&apos;  anlamına gelir ve insanın evreni, varoluşu ve hayatı anlamaya yönelik derin düşünme ve sorgulama faaliyetidir. Kesin cevaplardan çok sorular sormak felsefenin doğasında vardır.&quot;
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
