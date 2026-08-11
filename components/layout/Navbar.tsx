"use client";

import Link from "next/link";
import { Heart, ShoppingBag, Menu } from "lucide-react";
import { useStore } from "@/store/useStore";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Navbar() {
  const toggleMobileMenu = useStore(
    (state) => state.toggleMobileMenu
  );

  const cart = useStore((state) => state.cart);
  const wishlist = useStore((state) => state.wishlist);

  return (
    <header className="border-b border-neutral-200">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          FLOWCART
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/products" className="text-sm transition-opacity hover:opacity-60">
            Shop
          </Link>

          <Link href="/about" className="text-sm transition-opacity hover:opacity-60">
            About
          </Link>

          <Link href="/stores" className="text-sm transition-opacity hover:opacity-60">
            Our Stores
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/wishlist" aria-label="Wishlist" className="relative">
            <Heart size={20} strokeWidth={1.5} />

            {wishlist.length > 0 && (
              <span className="absolute -right-2 -top-2 text-xs">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link href="/cart" aria-label="Shopping bag" className="relative">
            <ShoppingBag size={20} strokeWidth={1.5} />

            {cart.length > 0 && (
              <span className="absolute -right-2 -top-2 text-xs">
                {cart.length}
              </span>
            )}
          </Link>

          <button type="button" aria-label="Open menu" onClick={toggleMobileMenu}
            className="transition-opacity hover:opacity-60 md:hidden cursor-pointer">
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      <MobileMenu />
    </header>
  );
}