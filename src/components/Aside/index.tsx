import { Stack } from "@chakra-ui/react"
import { ReactNode } from "react"

import { TitleServices } from "../Title"
import { TextServices } from "../Text"

interface AsideSobrePrimaryProps {
    title: string
    children: ReactNode
}

export function AsideSobrePrimary({ title, children }: AsideSobrePrimaryProps) {
    return (
        <Stack
            as={"aside"}
            spacing={6}
            w={"50%"}
            position={"relative"}
        >
            <TitleServices title={title} size={"36px"} color={"white"} as={"h2"} />
            {children}

        </Stack>
    )
}

interface AsideIndexPrimaryProps {
    children: ReactNode
    text: string
}

export function AsideIndexPrimary({ children, text }:AsideIndexPrimaryProps) {
    return (
        <Stack
            as="aside"
            border={"1px solid #000"}
            px={6}
            py={9}
            borderRadius={"16px"}
            align={"center"}
            spacing={9}
        >
            {children}
            <TextServices text={text} size={"16px"} color={"#070607"} />
        </Stack>
    )
}