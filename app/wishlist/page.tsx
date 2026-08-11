"use client";

import Link from "next/link";
import ProductCard from "@/components/home/ProductCard";
import { useStore } from "@/store/useStore";

export default function WishlistPage() {
    const wishlist = useStore((state) => state.wishlist);

    return (
        <main className="mx-auto max-w-7xl px-6 py-20">
            <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                    Your collection
                </p>

                <h1 className="mt-3 text-4xl font-medium">
                    Wishlist
                </h1>
            </div>

            {wishlist.length === 0 ? (
                <div className="mt-16">
                    <p className="text-neutral-500">
                        Your wishlist is empty.
                    </p>

                    <Link href="/" className="mt-6 inline-block bg-neutral-950 px-6 py-3 text-sm text-white">
                        Discover products
                    </Link>
                </div>
            ) : (
                <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-6">
                    {wishlist.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            )}
        </main>
    );
}