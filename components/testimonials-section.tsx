import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María García",
    role: "Diseñadora Freelance",
    content: "Mis videollamadas con clientes son perfectas. La velocidad de subida es increíble para archivos grandes.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Gamer Profesional",
    content: "Latencia mínima, perfecta para gaming competitivo. Nunca he tenido lag durante mis streams.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Madre de Familia",
    content: "Con 4 hijos en Netflix, YouTube y clases online simultáneamente, Wavenet nunca falla.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-foreground/60">
            Miles de hogares y empresas confían en Wavenet para su conectividad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed flex-1">"{testimonial.content}"</p>

              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
