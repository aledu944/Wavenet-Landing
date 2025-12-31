'use client';
import { useEffect } from 'react';

interface ScrollRevealOptions {
    origin?: 'top' | 'bottom' | 'left' | 'right';
    distance?: string;
    duration?: number;
    delay?: number;
    reset?: boolean;
    easing?: string;
    opacity?: number;
    scale?: number;
}

export function useScrollReveal(
    selector: string,
    options: ScrollRevealOptions = {}
) {
    useEffect(() => {
        let sr: scrollReveal.ScrollRevealObject | null = null;

        // Import ScrollReveal only on the client side
        import('scrollreveal').then((ScrollRevealModule) => {
            const ScrollReveal = ScrollRevealModule.default;

            sr = ScrollReveal({
                origin: options.origin || 'top',
                distance: options.distance || '60px',
                duration: options.duration || 2000,
                delay: options.delay || 200,
                reset: options.reset || false,
                easing: options.easing || 'ease',
                opacity: options.opacity || 0,
                scale: options.scale || 1,
            });

            sr.reveal(selector);
        });

        // Cleanup function
        return () => {
            if (sr) {
                sr.clean(selector);
            }
        };
    }, [selector, options.origin, options.distance, options.duration, options.delay, options.reset, options.easing, options.opacity, options.scale]);
}
