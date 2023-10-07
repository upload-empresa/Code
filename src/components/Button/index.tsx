import { Button } from "@chakra-ui/react"
import NextLink from 'next/link'

interface ButtonIndexProps {
    textButton: string
    w: string
}

export function ButtonIndex({ textButton, w }: ButtonIndexProps) {
    return (
        <Button
            type="submit"
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
    onClick: any
}

export function ButtonLogin({ textButton, onClick }: ButtonLoginProps) {
    return (
        <Button
            onClick={onClick}
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