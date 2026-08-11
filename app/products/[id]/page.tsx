"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ProductActions from "@/components/product/ProductActions";
import { useProducts } from "@/hooks/useProducts";

export default function ProductPage() {
  const params = useParams();
  const id = Number(params.id);

  const {
    data: products = [],
    isLoading,
    isError,
  } = useProducts();

  if (isLoading) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-neutral-500">
          Loading product...
        </p>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-neutral-500">
          Failed to load product.
        </p>
      </main>
    );
  }

  const product = products.find(
    (item) => item.id === id
  );

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-3xl font-medium">
          Product not found
        </h1>

        <Link href="/products" className="mt-6 inline-block underline">
          Back to shop
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="relative aspect-square bg-neutral-100">
          <Image src={product.image} alt={product.name} fill className="object-cover"/>
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="mt-3 text-4xl font-medium">
            {product.name}
          </h1>

          <p className="mt-4 text-lg">
            Rs {product.price}
          </p>

          <p className="mt-8 max-w-lg leading-7 text-neutral-500">
            {product.description}
          </p>

          <ProductActions product={product} />
        </div>
      </div>
    </main>
  );
}