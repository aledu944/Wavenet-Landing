'use client';
import { services } from "@/constants";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";


export function ServicesSection() {

    useScrollReveal('.service-content', {
        origin: 'left',
        distance: '60px',
        duration: 2000,
        delay: 200
    });

    useScrollReveal('.service-item-1', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 200
    });

    useScrollReveal('.service-item-2', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 400
    });

    useScrollReveal('.service-item-3', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 600
    });

    useScrollReveal('.service-item-4', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 800
    });

    useScrollReveal('.service-item-5', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 1000
    });

    useScrollReveal('.service-item-6', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 1200
    });


    return (
        <section id="servicios" className="py-20 md:py-32 border-t border-border/50">
            <div className="container mx-auto px-4">
                <div className="service-content mb-4 bg-primary/10 border border-primary rounded-full font-semibold text-primary px-4 py-1 text-xs uppercase max-w-max">
                    <span>Solo lo mejor</span>
                </div>
                <div className="service-content mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Nuestros servicios</h2>
                    <p className="text-lg text-foreground/60 max-w-2xl">
                        Wavenet ofrece soluciones de telecomunicaciones completas y especializadas para mantener tu hogar y negocio siempre conectados.
                    </p>
                </div>

                {/* Grid Services */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {
                        services.map((service, index) => (
                            <div key={index} className={`service-item-${index + 1} flex gap-6`}>
                                <div className="p-3 bg-primary/10 rounded-xl h-fit">
                                    <service.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                                    <p className="text-foreground/60 leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
