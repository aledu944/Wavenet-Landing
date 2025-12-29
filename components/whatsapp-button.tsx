import Link from 'next/link'
import { Button } from './ui/button'
import { WhatsappIcon } from "hugeicons-react";
export const WhatsappButton = () => {
    return (
        <Button asChild className='flex fixed bottom-14 right-14 rounded-full cursor-pointer z-20' size={'lg'}>
            <Link href='https://wa.link/96bcbu' target="_blank">
                <WhatsappIcon className='size-5' />
                <span>Contactar</span>
            </Link>
        </Button>
    )
}
