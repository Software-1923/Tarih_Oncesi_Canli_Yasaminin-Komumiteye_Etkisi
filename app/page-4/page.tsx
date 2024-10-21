"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import pageA4 from "@/public/images/4.jpg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[40px] font-bold text-black dark:text-white`}
            >
              Toplumsal Birlik
            </span>
            <p className="pb-6 font-medium">
            - &quot;Bağlılık, bilgelik ve içtenlik, ideal bir toplumun temel erdemleri arasında yer alır. Bu erdemler, bireysel davranışların toplumun geneline etkisini açıklar.&quot;
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
