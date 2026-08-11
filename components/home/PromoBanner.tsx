import Link from "next/link";

export default function PromoBanner() {
    return (
        <section className="relative overflow-hidden border-y border-neutral-200 px-6 py-24">
            <img src="/banner.jpg" className="absolute inset-0 h-full w-full grayscale object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative mx-auto max-w-7xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
                    Limited Offer
                </p>

                <h2 className="mt-4 text-5xl font-bold uppercase tracking-tight text-white md:text-7xl">
                    20% Off
                </h2>

                <p className="mt-2 text-lg font-medium text-neutral-200 md:text-xl">
                    Selected products, this season only
                </p>

                <Link href="/products"
                    className="mt-10 inline-block bg-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-neutral-950 transition-opacity hover:opacity-80">
                    Shop the collection
                </Link>
            </div>
        </section>
    );
}