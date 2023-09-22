import { CardBlog } from "@/components/Card"
import { Grid, GridItem, Stack } from "@chakra-ui/react"

export default function Blog() {
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
                <GridItem>
                    <CardBlog />
                </GridItem>

                <GridItem>
                    <CardBlog />
                </GridItem>

                <GridItem>
                    <CardBlog />
                </GridItem>

                <GridItem>
                    <CardBlog />
                </GridItem>

                <GridItem>
                    <CardBlog />
                </GridItem>

                <GridItem>
                    <CardBlog />
                </GridItem>

                <GridItem>
                    <CardBlog />
                </GridItem>

            </Grid>

        </Stack>
    )
}