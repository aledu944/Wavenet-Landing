import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield } from "lucide-react"
import Link from 'next/link';

export function HeroSection() {
    return (
        <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-32 inset-0 bg-linear-to-br from-primary/5 via-secondary/5 to-accent/5">
            {/* Background Pattern */}
            <div className="" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 z-50">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left max-w-3xl">
                        <p className="text-sm font-medium text-primary mb-4">BIENVENIDO A WAVENET</p>

                        <h1 className="text-5xl uppercase md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
                            Conectándote al mundo
                        </h1>

                        <p className="text-xl text-foreground/70 mb-8 max-w-2xl leading-relaxed">
                            Internet de satelital ultra rápido. Conexión estable. Soporte dedicado. Todo lo que necesitas para estar siempre conectado.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-16 z-10">
                            <Button
                                size="lg"
                                // className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto"
                                asChild
                            >
                                <Link href='https://wa.link/96bcbu' target="_blank">
                                    Contactar
                                    <ArrowRight className="size-4" />
                                </Link>
                            </Button>
                        </div>

                        {/* Stats - Clean and minimal */}
                        <div className="grid grid-cols-3 gap-8 md:gap-16 pt-12 border-t border-border/50">
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-primary">1 Gbps</p>
                                <p className="text-sm text-foreground/60 mt-1">Velocidad máxima</p>
                            </div>
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-secondary">99.9%</p>
                                <p className="text-sm text-foreground/60 mt-1">Disponibilidad</p>
                            </div>
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-accent">+50k</p>
                                <p className="text-sm text-foreground/60 mt-1">Clientes felices</p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative">
                        <div className="relative bg-lienear-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl p-8 md:p-12">
                            <img
                                src="/modern-fiber-optic-network-technology-professional.jpg"
                                alt="Tecnología de fibra óptica Wavenet"
                                className="w-full h-auto rounded-2xl shadow-2xl"
                            />

                            {/* Floating Cards */}
                            <div className="absolute -left-4 top-1/4 bg-card p-4 rounded-xl shadow-lg border border-border">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Zap className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-card-foreground">Ultra Rápido</p>
                                        <p className="text-sm text-muted-foreground">Fibra Óptica</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -right-4 bottom-1/4 bg-card p-4 rounded-xl shadow-lg border border-border">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-accent/10 rounded-lg">
                                        <Shield className="h-5 w-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-card-foreground">Conexión Segura</p>
                                        <p className="text-sm text-muted-foreground">Protección Total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
