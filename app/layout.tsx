import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import "./globals.css"

const figtree = Figtree({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700', '800', '900'], variable: '--font-figtree' })

export const metadata: Metadata = {
    title: "Wavenet - Conectándote al Mundo",
    description:
        "Servicios de telecomunicaciones de alta velocidad. Internet fibra óptica, telefonía y soluciones empresariales para conectarte con el mundo.",
    keywords: "internet, fibra óptica, telecomunicaciones, wifi, conectividad, wavenet",
    generator: 'v0.app'
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html className="scroll-smooth duration-700 " lang="es" suppressHydrationWarning>
            <body className={`antialiased overflow-x-hidden ${figtree.className}`}>
                {children}
            </body>
        </html>
    )
}
