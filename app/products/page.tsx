"use client";

import ProductCard from "@/components/home/ProductCard";
import { useProducts } from "@/hooks/useProducts";

export default function ProductsPage() {
  const {
    data: products = [],
    isLoading,
    isError,
  } = useProducts();

  if (isLoading) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-neutral-500">
          Loading products...
        </p>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-neutral-500">
          Failed to load products.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Collection
        </p>

        <h1 className="mt-3 text-4xl font-medium">
          All Products
        </h1>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </main>
  );
}