"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { faqs } from "@/data/faqs";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const answersRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        answersRef.current.forEach((answer) => {
            if (!answer) return;

            gsap.set(answer, {
                height: 0,
                opacity: 0,
                overflow: "hidden",
            });
        });
    }, []);

    const toggleFAQ = (index: number) => {
        const answer = answersRef.current[index];

        if (!answer) return;

        if (openIndex === index) {
            gsap.to(answer, {
                height: 0,
                opacity: 0,
                duration: 0.3,
            });

            setOpenIndex(null);
            return;
        }

        if (openIndex !== null) {
            const previousAnswer =
                answersRef.current[openIndex];

            if (previousAnswer) {
                gsap.to(previousAnswer, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                });
            }
        }

        gsap.to(answer, {
            height: "auto",
            opacity: 1,
            duration: 0.3,
        });

        setOpenIndex(index);
    };

    return (
        <section className="border-t border-neutral-200 px-6 py-20">
            <div className="mx-auto max-w-3xl">
                <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                        Need help?
                    </p>

                    <h2 className="mt-3 text-3xl font-medium md:text-4xl">
                        Frequently asked questions
                    </h2>
                </div>

                <div className="mt-12 border-t border-neutral-200">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={faq.question} className="border-b border-neutral-200">
                                <button type="button"
                                    onClick={() => toggleFAQ(index)}
                                    className="flex w-full items-center justify-between py-6 text-lef">
                                    <span className="text-sm font-medium">
                                        {faq.question}
                                    </span>

                                    <span className="ml-6 text-xl font-light">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                <div
                                    ref={(element) => {
                                        answersRef.current[index] = element;
                                    }}>
                                    <p className="max-w-2xl pb-6 pr-10 text-sm leading-6 text-neutral-500">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}