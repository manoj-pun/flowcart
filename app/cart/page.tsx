"use client";

import Link from "next/link";
import { useStore } from "@/store/useStore";

export default function CartPage() {
  const cart = useStore((state) => state.cart);

  const removeFromCart = useStore(
    (state) => state.removeFromCart);

  const increaseQuantity = useStore(
    (state) => state.increaseQuantity);

  const decreaseQuantity = useStore(
    (state) => state.decreaseQuantity);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,0);

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl font-medium">
        Your Bag
      </h1>

      {cart.length === 0 ? (
        <div className="mt-10">
          <p className="text-neutral-500">
            Your bag is empty.
          </p>

          <Link href="/" className="mt-6 inline-block bg-neutral-950 px-6 py-3 text-sm text-white">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-6 border-b border-neutral-200 pb-6">
                <div className="h-32 w-32 bg-neutral-100">
                  <img src={item.image} className="h-full w-full object-cover"/>
                </div>

                <div className="flex-1">
                  <h2 className="mt-1 font-medium">
                    {item.name}
                  </h2>

                  <p className="mt-2">
                    Rs {item.price}
                  </p>

                  <div className="mt-4 flex items-center gap-4">
                    <button type="button" onClick={() => decreaseQuantity(item.id)} className="border px-3 py-1"> − </button>

                    <span className="text-sm">
                      {item.quantity}
                    </span>

                    <button type="button" onClick={() => increaseQuantity(item.id)} className="border px-3 py-1"> + </button>
                  </div>

                  <button type="button" onClick={() => removeFromCart(item.id)} className="mt-4 text-sm underline">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="h-fit border border-neutral-200 p-6">
            <h2 className="text-lg font-medium">
              Order summary
            </h2>

            <div className="mt-6 flex justify-between">
              <span>Subtotal</span>
              <span>Rs {total}</span>
            </div>

            <Link href="/checkout" className="mt-8 block bg-neutral-950 px-6 py-3 text-center text-sm text-white">
              Checkout
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}