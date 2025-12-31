'use client';
import Link from "next/link"
import { comparasionFeatures } from "@/constants"

import { Check, X } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function ComparisonSection() {

    useScrollReveal('.comparison-header', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 200
    });

    useScrollReveal('.comparison-table', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 300
    });

    useScrollReveal('.comparison-keypoints-1', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 800
    });

    useScrollReveal('.comparison-keypoints-2', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 1000
    });

    useScrollReveal('.comparison-keypoints-3', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 1200
    });

     useScrollReveal('.comparison-cta', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 1000
    });

    return (
        <section id='caracteristicas' className="w-full py-24 px-4 md:px-6 lg:px-8 bg-background">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="comparison-header mb-16 text-center">
                    <div className="mx-auto mb-4 bg-primary/10 border border-primary rounded-full font-semibold text-primary px-4 py-1 text-xs uppercase max-w-max">
                        <span>La mejor solución</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">Por qué elegir Wavenet</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Comparamos nuestros servicios con la competencia. Wavenet ofrece más opciones de conectividad y soporte
                        especializado para toda tu familia.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="comparison-table overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-4 px-4 md:px-6 font-semibold text-foreground">Características</th>
                                <th className="text-center py-4 px-4 md:px-6">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="text-sm font-semibold text-primary">Wavenet</div>
                                        <div className="text-xs text-muted-foreground">Nuestros servicios</div>
                                    </div>
                                </th>
                                <th className="text-center py-4 px-4 md:px-6">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="text-sm font-semibold text-muted-foreground">Otros Proveedores</div>
                                        <div className="text-xs text-muted-foreground">Competencia</div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                comparasionFeatures.map((feature, idx) => (
                                    <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                                        <td className="py-4 px-4 md:px-6 text-foreground font-medium">{feature.name}</td>
                                        <td className="py-4 px-4 md:px-6 text-center">
                                            {feature.wavenet ? (
                                                <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10">
                                                    <Check className="w-4 h-4 text-primary" />
                                                </div>
                                            ) : (
                                                <div className="inline-flex items-center justify-center w-6 h-6">
                                                    <X className="w-4 h-4 text-muted-foreground" />
                                                </div>
                                            )}
                                        </td>
                                        <td className="py-4 px-4 md:px-6 text-center">
                                            {feature.competitor ? (
                                                <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted">
                                                    <Check className="w-4 h-4 text-muted-foreground" />
                                                </div>
                                            ) : (
                                                <div className="inline-flex items-center justify-center w-6 h-6">
                                                    <X className="w-4 h-4 text-muted-foreground" />
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                {/* Key Points */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="comparison-keypoints-1 text-center">
                        <div className="inline-flex items-center justify-center h-20 w-20 rounded-lg bg-primary/10 mb-4">
                            <span className="text-2xl font-bold text-primary">10+</span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Servicios Disponibles</h3>
                        <p className="text-sm text-muted-foreground">
                            Internet, TV, Telefonía, Web TV y más opciones de conectividad
                        </p>
                    </div>

                    <div className="comparison-keypoints-2 text-center">
                        <div className="inline-flex items-center justify-center h-20 w-20 rounded-lg bg-secondary/10 mb-4">
                            <span className="text-2xl font-bold text-secondary">24/7</span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Soporte Dedicado</h3>
                        <p className="text-sm text-muted-foreground">
                            Equipo especializado listo para ayudarte en cualquier momento
                        </p>
                    </div>

                    <div className="comparison-keypoints-3 text-center">
                        <div className="inline-flex items-center justify-center h-20 w-20 rounded-lg bg-accent/10 mb-4">
                            <span className="text-2xl font-bold text-accent">100%</span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Satisfacción Garantizada</h3>
                        <p className="text-sm text-muted-foreground">
                            Garantía extendida y satisfacción del cliente como prioridad
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="comparison-cta mt-16 text-center">
                    <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                        <Link href='/#cobertura'>
                            Conoce Nuestra Cobertura
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}
