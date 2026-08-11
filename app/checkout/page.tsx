"use client";

import Link from "next/link";
import { useStore } from "@/store/useStore";
import { useState } from "react";

export default function CheckoutPage() {
  const cart = useStore((state) => state.cart);

  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,0);

  if (orderPlaced) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Order confirmed
        </p>

        <h1 className="mt-4 text-4xl font-medium">
          Thank you for your order.
        </h1>

        <p className="mt-4 text-neutral-500">
          Your order has been successfully placed.
        </p>

        <Link href="/" className="mt-8 inline-block bg-neutral-950 px-6 py-3 text-sm text-white">
          Continue shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-medium">
        Checkout
      </h1>

      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_360px]">
        <form className="space-y-8"
          onSubmit={(event) => {
            event.preventDefault();
            setOrderPlaced(true);
          }}>
          <section>
            <h2 className="text-xl font-medium">
              Contact information
            </h2>

            <div className="mt-6">
              <input type="email" placeholder="Email address" className="w-full border border-neutral-300 px-4 py-3 text-sm"
                required/>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium">
              Shipping address
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input type="text" placeholder="First name" className="border border-neutral-300 px-4 py-3 text-sm"
                required/>

              <input type="text" placeholder="Last name" className="border border-neutral-300 px-4 py-3 text-sm" required/>

              <input type="text" placeholder="Address" className="border border-neutral-300 px-4 py-3 text-sm md:col-span-2"
                required/>

              <input type="text" placeholder="City" className="border border-neutral-300 px-4 py-3 text-sm"
                required/>

              <input type="text" placeholder="Postal code" className="border border-neutral-300 px-4 py-3 text-sm"
                required/>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium">
              Payment
            </h2>

            <div className="mt-6">
              <input type="text" placeholder="Card number" className="w-full border border-neutral-300 px-4 py-3 text-sm"
                required/>
            </div>
          </section>

          <button type="submit" className="w-full bg-neutral-950 px-6 py-4 text-sm text-white">
            Place order
          </button>
        </form>

        <aside className="h-fit border border-neutral-200 p-6">
          <h2 className="text-lg font-medium">
            Order summary
          </h2>

          <div className="mt-6 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.name} × {item.quantity}
                </span>

                <span>
                  Rs {item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-neutral-200 pt-6">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>Rs {subtotal}</span>
            </div>

            <div className="mt-3 flex justify-between text-sm">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="mt-6 flex justify-between font-medium">
              <span>Total</span>
              <span>Rs {subtotal}</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}