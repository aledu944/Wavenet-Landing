import Image from "next/image"

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
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p className="text-background/70">© {new Date().getFullYear()} Wavenet. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
