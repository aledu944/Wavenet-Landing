import { DeliveryBox01Icon, Satellite01Icon, Tv01Icon } from "hugeicons-react"
import { Wifi, Globe, Headphones } from "lucide-react"

const services = [
    {
        icon: Wifi,
        title: "Internet Residencial",
        description: "Conexión de fibra óptica con las mejores velocidades para tu hogar.",
    },
    {
        icon: Satellite01Icon,
        title: "Internet y Televisión Satelital",
        description: "Soluciones integrales para zonas rurales y de difícil acceso.",
    },
    {
        icon: Tv01Icon,
        title: "Televisión por cable",
        description: "Amplia variedad de canales HD y contenido on-demand para toda la familia.",
    },
    {
        icon: DeliveryBox01Icon,
        title: "Importación de Equipos",
        description: "Traemos los mejores dispositivos de telecomunicaciones a precios competitivos.",
    },
    {
        icon: Globe,
        title: "Telefonía",
        description: "Llamadas ilimitadas con calidad HD y tarifas competitivas.",
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
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Lo que ofrecemos</h2>
                    <p className="text-lg text-foreground/60 max-w-2xl">
                        Soluciones de conectividad completas diseñadas para mantener tu hogar y negocio siempre en línea.
                    </p>
                </div>

                {/* Grid Services */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
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
