import { Satellite01Icon, TelephoneIcon, Tv01Icon } from "hugeicons-react"
import { Wifi, Headphones } from "lucide-react"

const services = [
    {
        icon: Wifi,
        title: "Internet de Alta Velocidad",
        description: "Conexión de fibra óptica y tecnología avanzada para tu hogar y negocio con velocidades ultra rápidas.",
    },
    {
        icon: Tv01Icon,
        title: "Televisión por Cable",
        description: "Amplio catálogo de canales en HD con excelente calidad de transmisión y programación variada.",
    },
    {
        icon: Satellite01Icon,
        title: "Internet Satelital",
        description: "Conectividad por satélite para zonas sin cobertura terrestre, disponible en todo el territorio.",
    },
    {
        icon: TelephoneIcon,
        title: "Telefonía",
        description: "Servicio de telefonía digital con calidad HD, tarifas competitivas y llamadas ilimitadas",
    },
    {
        icon: Tv01Icon,
        title: "Televisión Web  ",
        description: "Acceso a contenido digital en línea con transmisión en tiempo real y bajo demanda.",
    },
    {
        icon: Headphones,
        title: "Soporte",
        description: "Equipo técnico disponible para ayudarte.",
    },
]

export function ServicesSection() {
    return (
        <section id="servicios" className="py-20 md:py-32 border-t border-border/50">
            <div className="container mx-auto px-4">
                <div className="mb-4 bg-primary/10 border border-primary rounded-full font-semibold text-primary px-4 py-1 text-xs uppercase max-w-max">
                    <span>Solo lo mejor</span>
                </div>
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Nuestros servicios</h2>
                    <p className="text-lg text-foreground/60 max-w-2xl">
                        Wavenet ofrece soluciones de telecomunicaciones completas y especializadas para mantener tu hogar y negocio siempre conectados.
                    </p>
                </div>

                {/* Grid Services */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="flex gap-6">
                            <div className="p-3 bg-primary/10 rounded-xl h-fit">
                                <service.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                                <p className="text-foreground/60 leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
