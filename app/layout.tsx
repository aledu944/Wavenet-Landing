import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

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
        <html lang="es" suppressHydrationWarning>
            <body className={`font-sans antialiased`}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
