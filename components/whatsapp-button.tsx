import Link from 'next/link'
import { Button } from './ui/button'
import { WhatsappIcon } from "hugeicons-react";
export const WhatsappButton = () => {
    return (
        <Button asChild className='flex fixed bottom-5 right-5 lg:bottom-14 lg:right-14 rounded-full cursor-pointer z-20 h-auto! py-3 px-5' size={'lg'}>
            <Link href='https://wa.link/96bcbu' target="_blank" className='block'>
                <span>
                    <WhatsappIcon className='size-6 block' />
                </span>
                <span className='text-base'>Contactar</span>
            </Link>
        </Button>
    )
}
