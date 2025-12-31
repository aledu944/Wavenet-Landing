'use client';
import Link from "next/link"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

import { Button } from "./ui/button"
import { ArrowRight, Check } from "lucide-react"
import { features } from "@/constants";


export function FeaturesSection() {

    useScrollReveal('.features-image', {
        origin: 'right',
        distance: '120px',
        duration: 2000,
        delay: 200
    });

    useScrollReveal('.features-title', {
        origin: 'left',
        distance: '120px',
        duration: 2000,
        delay: 200
    });

    useScrollReveal('.features-item-1', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 400
    });

    useScrollReveal('.features-item-2', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 600
    });

    useScrollReveal('.features-item-3', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 800
    });

    useScrollReveal('.features-item-4', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 1000
    });

    useScrollReveal('.features-item-5', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 1200
    });

    useScrollReveal('.features-item-6', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 1400
    });

    useScrollReveal('.features-item-7', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 1600
    });

    useScrollReveal('.features-item-8', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 1800
    });

    return (
        <section id="nosotros" className="py-20 md:py-32" >
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div>
                        <div className="features-title mb-4 bg-primary/10 border border-primary rounded-full font-semibold text-primary px-4 py-1 text-xs uppercase max-w-max">
                            <span>Sobre Nosotros</span>
                        </div>
                        <h2 className="features-title text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                            Por qué confiar en Wavenet
                        </h2>
                        <p className="features-title text-lg text-foreground/60 mb-10 leading-relaxed">
                            Con años de experiencia en el sector de telecomunicaciones, Wavenet se destaca por ofrecer servicios de calidad, respaldados por un equipo profesional y comprometido con tu satisfacción.
                        </p>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {
                                features.map((feature, index) => (
                                    <div key={index} className={`features-item-${index + 1} flex items-start gap-3`}>
                                        <div className="p-1 bg-primary/10 rounded-full mt-1 shrink-0">
                                            <Check className="h-4 w-4 text-primary" />
                                        </div>
                                        <span className="text-foreground/80">{feature}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <Button
                            size="lg"
                            asChild
                        >
                            <Link className="features-item-6 block mt-8" href='https://wa.link/96bcbu' target="_blank">
                                Contactar
                                <ArrowRight className="size-4" />
                            </Link>
                        </Button>
                    </div>

                    {/* Image */}
                    <div className="features-image relative lg:flex items-end justify-end order-first lg:order-last">
                        <div className="relative bg-linear-to-br from-primary/40 via-secondary/50 to-accent/40 rounded-3xl p-2 overflow-hidden lg:max-w-max shadow-lg">
                            <img
                                src="/satelite-wavenet.jpg"
                                alt="Tecnología de fibra óptica"
                                className="rounded-xl bg-cover lg:w-162.5 w-full object-cover max-h-162.5"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
