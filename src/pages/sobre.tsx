import { ArticleSobrePrimary, ArticleSobreSecondary } from "@/components/Article"

import { Stack } from "@chakra-ui/react"

export default function SobreNos() {
    return (
        <Stack
            as="main"
            spacing={20}
        >
            <ArticleSobrePrimary />
            <ArticleSobreSecondary />
        </Stack>
    )
}