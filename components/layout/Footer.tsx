"use client";

import Link from "next/link";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 px-6 py-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 md:grid-cols-3">
                    <div>
                        <h2 className="text-lg font-semibold tracking-tight">
                            FLOWCART
                        </h2>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">
                            Thoughtfully selected products for everyday
                            living.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium">
                            Explore
                        </h3>

                        <nav className="mt-4 flex flex-col gap-3 text-sm text-neutral-500">
                            <Link href="/products" className="transition-opacity hover:opacity-60">
                                Shop
                            </Link>

                            <Link href="/about" className="transition-opacity hover:opacity-60">
                                About FLOWCART
                            </Link>

                            <Link href="/stores" className="transition-opacity hover:opacity-60">
                                Our Stores
                            </Link>

                            <Link href="/" className="transition-opacity hover:opacity-60">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium">
                            Stay in the loop
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-neutral-500">
                            Sign up for new arrivals and updates.
                        </p>

                        <form className="mt-5 flex border-b border-neutral-950">
                            <input type="email" placeholder="Email address" className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none" />

                            <button type="submit" className="py-3 text-sm font-medium">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="#" aria-label="Instagram" className="transition-opacity hover:opacity-60">
                        <FaInstagram size={18} />
                    </Link>

                    <Link href="#" aria-label="Facebook" className="transition-opacity hover:opacity-60">
                        <FaFacebookF size={18} />
                    </Link>

                    <Link href="#" aria-label="X" className="transition-opacity hover:opacity-60">
                        <FaXTwitter size={18} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}