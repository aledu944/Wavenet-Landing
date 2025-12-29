import { Check } from "lucide-react"

const features = [
    "Velocidad simétrica de subida y bajada",
    "WiFi 6 de última generación incluido",
    "Sin límites de datos",
    "Instalación profesional en 48 horas",
    "Sin contratos de permanencia",
    "Soporte técnico multicanal",
    "Latencia ultra baja para gaming",
    "App móvil para gestionar tu cuenta",
]

export function FeaturesSection() {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                            Diseñado para la velocidad
                        </h2>
                        <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
                            Ofrecemos la experiencia de internet más confiable con tecnología de punta, respaldada por un equipo
                            humano excepcional.
                        </p>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="p-1 bg-primary/10 rounded-full mt-1 flex-shrink-0">
                                        <Check className="h-4 w-4 text-primary" />
                                    </div>
                                    <span className="text-foreground/80">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative lg:flex items-end justify-end order-first lg:order-last">
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
