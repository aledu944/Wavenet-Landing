import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

const footerLinks = {
    servicios: [
        { label: "Internet Residencial", href: "#" },
        { label: "Internet Empresarial", href: "#" },
        { label: "Telefonía VoIP", href: "#" },
    ],
    empresa: [
        { label: "Sobre Nosotros", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Prensa", href: "#" },
    ],
    soporte: [
        { label: "Centro de Ayuda", href: "#" },
        { label: "Preguntas Frecuentes", href: "#" },
        { label: "Estado del Servicio", href: "#" },
    ],
}

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
    return (
        <footer className="bg-foreground text-background border-t border-foreground/10">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Logo & Description */}
                    <div className="col-span-2 md:col-span-1">
                        <Image
                            src="/images/logo-wavenet.png"
                            alt="Wavenet Logo"
                            width={120}
                            height={40}
                            className="rounded-md mb-4"
                        />
                        <p className="text-background/70 text-sm leading-relaxed mb-4">
                            Conectándote al mundo con fibra óptica de última generación.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="p-2 bg-background/10 rounded hover:bg-background/20 transition-colors"
                                >
                                    <social.icon className="h-4 w-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Servicios */}
                    {/* <div>
                        <h4 className="font-semibold mb-4 text-sm">Servicios</h4>
                        <ul className="space-y-2">
                            {footerLinks.servicios.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div> */}

                    {/* Empresa */}
                    {/* <div>
                        <h4 className="font-semibold mb-4 text-sm">Empresa</h4>
                        <ul className="space-y-2">
                            {footerLinks.empresa.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div> */}

                    {/* Soporte */}
                    {/* <div>
                        <h4 className="font-semibold mb-4 text-sm">Soporte</h4>
                        <ul className="space-y-2">
                            {footerLinks.soporte.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div> */}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p className="text-background/70">© {new Date().getFullYear()} Wavenet. Todos los derechos reservados.</p>
                    <div className="flex gap-6 text-background/70">
                        <Link href="#" className="hover:text-background transition-colors">
                            Términos
                        </Link>
                        <Link href="#" className="hover:text-background transition-colors">
                            Privacidad
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
