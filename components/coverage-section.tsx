import { CheckCircle, Zap, Shield, Satellite, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const coverageAreas = [
    "Sud Yungas",
    "Nor Yungas",
    "Inquisivi",
    "Santa Cruz",
    "Ciudad de Cobija",
]

export function CoverageSection() {
    return (
        <section id="cobertura" className="py-20 md:py-32 border-t border-border/50 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                            Verifica cobertura en tu zona
                        </h2>
                        <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
                            Nuestra red de fibra óptica crece constantemente. Ingresa tu dirección para verificar disponibilidad.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-16 z-10">
                            <Button
                                size="lg"
                                // className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto"
                                asChild
                            >
                                <Link href='https://wa.link/96bcbu' target="_blank">
                                    Solicitar Información
                                    <ArrowRight className="size-4" />
                                </Link>
                            </Button>
                        </div>

                        {/* Coverage Check Form */}
                        {/* <div className="flex gap-3 mb-10">
                            <div className="relative flex-1">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/40" />
                                <Input
                                    placeholder="Tu dirección o código postal"
                                    className="pl-10 h-12 bg-background border-border/50"
                                />
                            </div>
                            <Button className="h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground">Verificar</Button>
                        </div> */}

                        {/* Coverage Areas */}
                        <div>
                            <p className="font-semibold text-foreground mb-4">Zonas con cobertura activa:</p>
                            <div className="grid grid-cols-2 gap-3">
                                {coverageAreas.map((area, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                        <span className="text-sm text-foreground/80">{area}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Map Image */}
                    <div className="relative items-center justify-center flex">

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

                        <div className="absolute left-4/12 -top-10 bg-card p-4 rounded-xl shadow-lg border border-border">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-500/10 rounded-lg">
                                    <Satellite className="h-5 w-5 text-blue-500" />
                                </div>
                                <div>
                                    <p className="font-semibold text-card-foreground">En cualquier lugar</p>
                                    <p className="text-sm text-muted-foreground">Conexión satelital</p>
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
                        <img
                            src="/wavenet-mapa-bolivia.png"
                            alt="Mapa de cobertura Wavenet"
                            className="max-w-lg w-full h-auto rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
