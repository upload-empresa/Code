import { Stack } from "@chakra-ui/react"

import { Image } from "@/components/Image"
import { TextServices } from "@/components/Text"
import { TitleBlog, TitleIndex } from "@/components/Title"

export default function PostBlog() {
    return (
        <Stack
            as={"main"}
            px={16}
            spacing={20}
        >
            <Stack
                as={"article"}
                align={"center"}
                pt={10}
                spacing={7}
            >
                <TitleIndex color={"purple"} text={"Título 1"} />
                <TextServices text={"Fusce eleifend, nisi vel blandit consequat, urna augue varius ipsum, eu viverra nisi metus ac ipsum. Sed vitae ex vel arcu venenatis gravida eu ac elit. Ut at sapien massa. Maecenas quis vestibulum nisl. Sed et felis ipsum. Aenean vel quam quis ligula venenatis venenatis. Nulla facilisi. Donec feugiat turpis felis, sit amet bibendum nisi viverra ac. Quisque varius nibh eu lorem feugiat, vitae venenatis ex scelerisque."} size={"24px"} color={"#424040"} />
            </Stack>
            <Image src={"/blog.png"} align={"center"} alt={"Blog da Code"} width={923} height={370} />
            <Stack
                as={"article"}
                spacing={5}
            >
                <TitleBlog title={"SubTítulo 1"} fontSize={"48px"} />
                <TextServices text={
                    <>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis fermentum convallis. Phasellus mattis, dui a ultrices ullamcorper, mauris ex scelerisque nisi, vel facilisis tortor enim et elit. Fusce eleifend, nisi vel blandit consequat, urna augue varius ipsum, eu viverra nisi metus ac ipsum. Sed vitae ex vel arcu venenatis gravida eu ac elit. Ut at sapien massa. Maecenas quis vestibulum nisl. Sed et felis ipsum. Aenean vel quam quis ligula venenatis venenatis. Nulla facilisi. Donec feugiat turpis felis, sit amet bibendum nisi viverra ac. Quisque varius nibh eu lorem feugiat, vitae venenatis ex scelerisque. In ultrices tellus vel justo congue, ac sollicitudin est feugiat. Nulla facilisi.
                        {<br />}
                        {<br />}
                        Sed blandit nunc in leo luctus, id venenatis elit ullamcorper. Maecenas nec diam ut libero dictum finibus. Vivamus ac tincidunt erat. Curabitur vel blandit elit. Vivamus eget leo ullamcorper, sollicitudin tellus eu, consectetur mauris. Nullam nec arcu eget purus tempus bibendum. Nam ut velit ullamcorper, volutpat odio eu, vehicula purus. Praesent sed velit quis sapien ultricies gravida id sit amet enim. Quisque vel metus eget ex iaculis
                        bibendum.
                        {<br />}
                        {<br />}
                        Maecenas hendrerit dolor id odio faucibus, quis dictum urna sollicitudin. Integer consequat, ipsum vel fringilla aliquet, elit massa pharetra odio, in egestas elit metus nec velit. Curabitur elementum leo id ante dictum, eu ultrices ligula ultrices. Quisque efficitur euismod sapien in malesuada. Proin luctus, nulla quis scelerisque varius, tortor eros bibendum est, non aliquam nisi turpis vitae elit. Etiam id turpis ac turpis viverra aliquet id vitae dolor. Etiam nec ullamcorper elit, id vulputate ligula.
                    </>
                } size={"24px"} color={"#424040"} />
            </Stack>
        </Stack>
    )
}