"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";
import Spline from "@splinetool/react-spline/next";
import pag from "@/public/images/7.png";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[44px] font-bold text-black dark:text-white`}
            >
              Türler Gerçekten "Aynı" mı?
            </span>
            <p className="pb-6 font-medium">
               🔹 Hayır, genetik benzerlik olsa da çevresel ve kültürel bağlam farklı.
            </p>
            <p className="pb-6 font-medium">
               🔹 Davranışları, beslenme alışkanlıkları ve ömürleri değişebilir.
            </p>
            <p className="pb-6 font-medium">
               🔹 Modern doğada “tam bir kopya” üretmek neredeyse imkânsız.
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
