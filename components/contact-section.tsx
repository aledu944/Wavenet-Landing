"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section id="contacto" className="py-20 md:py-32 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">¿Listo para conectarte?</h2>
          <p className="text-lg text-foreground/60 mb-10">
            Contáctanos y te asesoraremos sin compromiso. Nuestro equipo está disponible 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Teléfono</p>
                  <p className="text-lg text-primary">800-WAVENET</p>
                  <p className="text-sm text-foreground/60">Disponible 24 horas</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-lg text-primary">contacto@wavenet.com</p>
                  <p className="text-sm text-foreground/60">Respuesta en 24 horas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Nombre</label>
              <Input
                placeholder="Tu nombre completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background border-border/50"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Teléfono</label>
                <Input
                  placeholder="Tu teléfono"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background border-border/50"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Mensaje</label>
              <Textarea
                placeholder="¿En qué podemos ayudarte?"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background border-border/50 resize-none"
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
