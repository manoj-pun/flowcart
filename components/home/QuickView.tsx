"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import { useStore } from "@/store/useStore";

export default function QuickView() {
  const selectedProduct = useStore(
    (state) => state.selectedProduct
  );

  const closeQuickView = useStore(
    (state) => state.closeQuickView
  );

  const addToCart = useStore(
    (state) => state.addToCart
  );

  const [added, setAdded] = useState(false);

  if (!selectedProduct) {
    return null;
  }

  const handleAddToCart = () => {
    addToCart(selectedProduct);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
      <div className="relative grid w-full max-w-3xl gap-8 bg-white p-6 md:grid-cols-2">
        <button type="button" aria-label="Close quick view" onClick={closeQuickView} className="absolute right-4 top-4">
          <X size={20} />
        </button>

        <div className="relative aspect-square bg-neutral-100">
          <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-cover"/>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="mt-2 text-2xl font-medium">
            {selectedProduct.name}
          </h2>

          <p className="mt-3 text-lg">
            Rs {selectedProduct.price}
          </p>

          <button type="button" onClick={handleAddToCart} className="mt-8 bg-neutral-950 px-6 py-3 text-sm text-white">
            {added ? "Added ✓" : "Add to bag"}
          </button>
        </div>
      </div>
    </div>
  );
}