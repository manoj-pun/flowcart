"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !imageRef.current) return;

    gsap.fromTo(
      contentRef.current,
      {
        y: 150,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
      }
    );

    gsap.fromTo(
      imageRef.current,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
      }
    );
  }, []);

  return (
    <section className="bg-neutral-100 px-6 py-12 md:py-20">
      <div className="mx-auto grid min-h-[40vh] max-w-7xl items-center gap-7 md:grid-cols-2">
        <div ref={contentRef} className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Curated essentials
          </p>

          <h1 className="mt-6 text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            Everyday objects,
            <br />
            thoughtfully chosen.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-neutral-500">
            Discover a collection of simple, functional pieces
            designed to bring quality and character to everyday life.
          </p>

          <Link href="/products"
            className="mt-8 inline-block bg-neutral-950 px-7 py-4 text-sm text-white transition-opacity hover:opacity-80">
            Shop collection
          </Link>
        </div>

        <div ref={imageRef} className="relative h-[500px] overflow-hidden bg-neutral-200 md:h-[650px]">
          <Image
            src="/shirt-front.webp"
            alt="Minimal linen shirt"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute bottom-6 left-6 bg-white px-5 py-4">
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              Featured
            </p>

            <p className="mt-1 text-sm font-medium">
              Minimal Linen Shirt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}