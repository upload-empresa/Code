import { Button } from "@chakra-ui/react"
import NextLink from 'next/link'

interface ButtonIndexProps {
    textButton: string
    href: string
    w: string
}

export function ButtonIndex({ textButton, href, w }: ButtonIndexProps) {
    return (
        <Button
            as={NextLink}
            href={href}
            bg={"yellow"}
            color={"#000"}
            fontSize={"20px"}
            fontWeight={400}
            w={w}
            _hover={{
                bg: "#cfa90c"
            }}
        >
            {textButton}
        </Button>
    )
}

interface ButtonLoginProps {
    textButton: string
    href: string
}

export function ButtonLogin({ textButton, href }: ButtonLoginProps) {
    return (
        <Button
            as={NextLink}
            href={href}
            bg={"yellow"}
            color={"#000"}
            fontSize={"24px"}
            fontWeight={400}
            py={6}
            w={"30%"}
            _hover={{
                bg: "#cfa90c"
            }}
        >
            {textButton}
        </Button>
    )
}