import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-3xl">
                <p className="text-sm text-neutral-500">
                    About FLOWCART
                </p>

                <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">
                    Thoughtfully chosen for everyday life.
                </h1>

                <p className="mt-8 text-lg leading-8 text-neutral-500">
                    FLOWCART is a curated collection of simple,
                    well-designed products made for everyday living.
                    We believe good products should feel natural,
                    useful, and timeless.
                </p>

                <p className="mt-6 leading-7 text-neutral-500">
                    From clothing and accessories to home and beauty
                    essentials, we focus on products that balance
                    quality, function, and thoughtful design.
                </p>

                <Link href="/products" className="mt-10 inline-block bg-neutral-950 px-6 py-3 text-sm text-white">
                    Explore the collection
                </Link>
            </div>
        </main>
    );
}