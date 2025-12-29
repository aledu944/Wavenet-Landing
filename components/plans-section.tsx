import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const plans = [
  {
    name: "Básico",
    speed: "100 Mbps",
    price: "29.99",
    description: "Para navegación y streaming",
    features: ["Velocidad simétrica", "Router WiFi 6", "Sin límite de datos", "Soporte 24/7"],
    popular: false,
  },
  {
    name: "Familiar",
    speed: "300 Mbps",
    price: "49.99",
    description: "Para múltiples dispositivos",
    features: ["Velocidad simétrica", "Router WiFi 6", "Sin límite de datos", "Soporte prioritario", "2 líneas VoIP"],
    popular: true,
  },
  {
    name: "Premium",
    speed: "1 Gbps",
    price: "79.99",
    description: "Para gamers y profesionales",
    features: ["Velocidad máxima", "Router WiFi 6E", "Sin límite de datos", "Soporte VIP", "3 líneas VoIP", "IP fija"],
    popular: false,
  },
]

export function PlansSection() {
  return (
    <section id="planes" className="py-20 md:py-32 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Planes simples y claros</h2>
          <p className="text-lg text-foreground/60">Sin sorpresas. Sin contratos eternos. Cancela cuando quieras.</p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative border-2 ${plan.popular ? "border-primary" : "border-border"} transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Más Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-foreground/60">{plan.description}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-border">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-primary">${plan.price}</span>
                  <span className="text-foreground/60">/mes</span>
                </div>
                <p className="text-sm text-foreground/70">{plan.speed}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Contratar</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
