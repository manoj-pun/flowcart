import Link from "next/link";
import { stores } from "@/data/stores";

export default function StoresPage() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-2xl">
                <p className="text-sm text-neutral-500">
                    Our Stores
                </p>

                <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">
                    Visit us in person.
                </h1>

                <p className="mt-6 leading-7 text-neutral-500">
                    Explore the FLOWCART collection in one of our
                    stores and experience our products up close.
                </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
                {stores.map((store) => (
                    <div key={store.city} className="border-t border-neutral-200 pt-6">
                        <h2 className="text-xl font-medium">
                            {store.city}
                        </h2>

                        <p className="mt-4 text-sm text-neutral-500">
                            {store.address}
                        </p>

                        <p className="mt-2 text-sm text-neutral-500">
                            {store.hours}
                        </p>

                        <Link href="#" className="mt-6 inline-block text-sm underline underline-offset-4">
                            Get directions
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}