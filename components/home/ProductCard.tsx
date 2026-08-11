"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { Heart } from "lucide-react";
import { Product } from "@/types/product";
import { useStore } from "@/store/useStore";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const openQuickView = useStore((state) => state.openQuickView);
  const toggleWishlist = useStore((state) => state.toggleWishlist);
  const wishlist = useStore((state) => state.wishlist);

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const cardRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function handleMouseEnter() {
    gsap.to(cardRef.current, {
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      duration: 0.3,
    });

    gsap.to(imageRef.current, {
      scale: 1.05,
      duration: 0.3,
    });

    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.3,
    });

    gsap.to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
    });
  }

  function handleMouseLeave() {
    gsap.to(cardRef.current, {
      boxShadow: "0 0px 0px rgba(0,0,0,0)",
      duration: 0.3,
    });

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.3,
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
    });

    gsap.to(buttonRef.current, {
      opacity: 0,
      y: 8,
      duration: 0.3,
    });
  }

  return (
    <article ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="relative aspect-square overflow-hidden bg-neutral-100">
        <Link href={`/products/${product.id}`}>
          <div ref={imageRef} className="relative h-full w-full">
            <Image src={product.image} alt={product.name} fill className="object-cover"/>
          </div>
        </Link>

        <div ref={overlayRef} className="pointer-events-none absolute inset-0 bg-black/10 opacity-0"/>

        <button type="button" aria-label={`Add ${product.name} to wishlist`} onClick={() => toggleWishlist(product)}
          className="absolute right-4 top-4">
          <Heart size={20} strokeWidth={1.5} fill={isWishlisted ? "currentColor" : "none"}/>
        </button>

        <button ref={buttonRef} type="button" onClick={() => openQuickView(product)} className="absolute bottom-4 left-4 bg-white px-4 py-2 text-sm opacity-0"
          style={{ transform: "translateY(8px)" }}>
          Quick View
        </button>
      </div>

      <div className="mt-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="mt-1 text-sm font-medium">{product.name}</h3>
        </Link>

        <p className="mt-1 text-sm">Rs {product.price}</p>
      </div>
    </article>
  );
}