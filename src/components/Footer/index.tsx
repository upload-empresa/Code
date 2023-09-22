import { Stack, Text } from "@chakra-ui/react"

export function Footer() {
    return (
        <Stack
            p={10}
            align={"center"}
            bg={"#ECE9EE"}
        >
            <Text
                as={"p"}
                color={"#343333"}
                fontSize={"16px"}
                fontWeight={400}
            >
                CodeJr ©Copyright 2023. Todos os direitos reservados.
            </Text>
        </Stack>
    )
}