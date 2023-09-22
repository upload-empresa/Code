import { ArticleContato, ArticleFaleConosco } from "@/components/Article"
import { Stack } from "@chakra-ui/react"

export default function Contato() {
    return(
        <Stack
            as="main"
        >
            <ArticleFaleConosco />
            <ArticleContato />
        </Stack>
    )
}