import { CardBlog } from "@/components/Card"
import { Grid, GridItem, Stack } from "@chakra-ui/react"
import usePosts from "@/hooks/usePostsList"

export default function Blog() {
    const { data: posts = [] } = usePosts();
    return (
        <Stack
            as="main"
            spacing={20}

        >
            <Grid
                templateColumns='repeat(3, 1fr)'
                rowGap={7}
                columnGap={0}
                py={32}
                px={16}
            >
                {posts.map((post: any) => (
                    <GridItem>
                        <CardBlog data={post} />
                    </GridItem>
                ))}


            </Grid>

        </Stack>
    )
}