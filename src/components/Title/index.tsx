import { Heading } from "@chakra-ui/react"

interface TitleServicesProps {
    title: string
    size: string
    color: string
    as?: any
}

export function TitleServices({ title, size, color, as }:TitleServicesProps) {
    return(
        <Heading
            as={as}
            fontSize={size}
            fontWeight={400}
            color={color}
            textTransform={"uppercase"}
        >
            {title}
        </Heading>
    )
}

interface TitleIndexProps {
    color: string
    text: string
    w?: string
}

export function TitleIndex({ color, text, w }:TitleIndexProps) {
    return(
        <Heading
            as="h1"
            fontSize={"64px"}
            color={color}
            fontWeight={400}
            textTransform={"uppercase"}
            w={w}
        >
            {text}
        </Heading>
    )
}

interface TitleBlogProps {
    title: string
    fontSize: string
}

export function TitleBlog({ title, fontSize }:TitleBlogProps) {
    return(
        <Heading
            as="h2"
            fontSize={fontSize}
            color={"purple"}
            fontWeight={400}
        >
            {title}
        </Heading>
    )
}

