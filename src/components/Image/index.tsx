import { Stack } from '@chakra-ui/react'
import NextImage from 'next/image'

interface ImageProps {
    src: string
    alt: string
    width: number
    height: number
    w?: string
    align?: string
}


export function Image({ src, alt, width, height, w, align }:ImageProps) {
    return(
        <Stack
            as="picture"
            w={w}
            align={align}
        >
            <NextImage src={src} alt={alt} width={width} height={height} />
        </Stack>

    )
}