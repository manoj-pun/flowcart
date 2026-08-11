"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useStore } from "@/store/useStore";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MobileMenu() {
  const isMobileMenuOpen = useStore(
    (state) => state.isMobileMenuOpen
  );

  const closeMobileMenu = useStore(
    (state) => state.closeMobileMenu
  );

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    gsap.set(menuRef.current, {
      x: "100%",
    });
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isMobileMenuOpen) {
      gsap.to(menuRef.current, {
        x: "0%",
        duration: 0.5,
      });
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <div ref={menuRef} className="fixed inset-0 z-50 bg-white text-black md:hidden">
      <div className="flex items-center justify-between px-6 py-6">
        <Link href="/" onClick={closeMobileMenu}>
          FLOWCART
        </Link>

        <button type="button" aria-label="Close menu" onClick={closeMobileMenu} className="cursor-pointer">
          <X size={24} />
        </button>
      </div>

      <nav className="flex flex-col gap-6 px-6 pt-16 text-medium">
        <Link href="/products" onClick={closeMobileMenu}>
          Shop
        </Link>

        <Link href="/about" onClick={closeMobileMenu}>
          About
        </Link>

        <Link href="/stores" onClick={closeMobileMenu}>
          Our Stores
        </Link>
      </nav>
    </div>
  );
}