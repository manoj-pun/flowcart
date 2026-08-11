"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import ProductCard from "@/components/home/ProductCard";
import { featured_products } from "@/data/featuredproducts";

export default function FeaturedProducts() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.children;

    gsap.set(cards, {
      y: 50,
      opacity: 0,
    });

    const handleScroll = () => {
      if (!gridRef.current) return;

      const rect = gridRef.current.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.8) {
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
        });

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm text-neutral-500">
              Featured
            </p>

            <h2 className="mt-3 text-3xl font-medium md:text-4xl">
              Selected for you
            </h2>
          </div>

          <Link href="/products" className="hidden text-sm underline underline-offset-4 md:block">
            View all
          </Link>
        </div>

        <div ref={gridRef} className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-6">
          {featured_products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>

        <Link href="/products" className="mt-10 block text-center text-sm underline underline-offset-4 md:hidden">
          View all
        </Link>
      </div>
    </section>
  );
}