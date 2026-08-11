"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { useStore } from "@/store/useStore";

type ProductActionsProps = {
  product: Product;
};

export default function ProductActions({
  product,
}: ProductActionsProps) {
  const addToCart = useStore((state) => state.addToCart);

  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  }

  return (
    <div className="mt-8">
      <button type="button" onClick={handleAddToCart} className="w-full bg-neutral-950 px-6 py-4 text-sm text-white">
        {added ? "Added ✓" : "Add to bag"}
      </button>
    </div>
  );
}