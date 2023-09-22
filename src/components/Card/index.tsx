import { Box, HStack, Stack } from "@chakra-ui/react"
import { ReactNode } from "react"

import { Image } from "../Image"
import { TitleBlog, TitleServices } from "../Title"
import { TextServices } from "../Text"
import { InputIndex } from "../Form"
import { ButtonLogin } from "../Button"

interface CardServicesProps {
    src1: string
    alt1: string
    width1: number
    height1: number
    title: string
    src2: string
    alt2: string
    width2: number
    height2: number
    text: string
    size: string

}

export function CardServices({ src1, alt1, width1, height1, title, src2, alt2, width2, height2, text, size }: CardServicesProps) {
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
            <Stack
                as={"section"}
                spacing={7}
                align={"center"}
            >
                <Image src={src1} alt={alt1} width={width1} height={height1} />
                <Stack
                    as={"section"}
                    spacing={6}
                    align={"center"}
                >
                    <TitleServices title={title} size={size} color={""} />
                    <Image src={src2} alt={alt2} width={width2} height={height2} />
                </Stack>
            </Stack>
            <TextServices text={text} size={"16px"} color={"#070607"} />
        </Stack>
    )
}

interface CardSobreNosProps {
    text: any
    size: string
    color: string
    src: string
    alt: string
    width: number
    height: number
    bgColor: string
    w: string
    children?: ReactNode

}

export function CardSobreNos({ text, size, color, src, alt, width, height, bgColor, w, children }: CardSobreNosProps) {
    return (
        <Stack
            as={"aside"}
            bg={bgColor}
            px={10}
            py={16}
            w={w}
            align={"center"}
            borderRadius={"16px"}
            position={"relative"}
            spacing={8}
        >
            {children}
            <TextServices text={text} size={size} color={color} />
            <Box
                position={"absolute"}
                height={"64px"}
                width={"277px"}
                top={"-30px"}
                left={"0"}
            >
                <Image src={src} alt={alt} width={width} height={height} />
            </Box>
        </Stack>
    )
}

export function CardVectorE() {
    return (
        <Stack
            _before={{
                content: "''",
                bgImage: "url('/Rectangle 146.png')",
                bgSize: "100%",
                bgRepeat: "no-repeat",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,

            }}

        />


    )
}

export function CardBlog() {
    return (
        <Stack
            borderRadius={"16px"}
            spacing={0}
            px={8}
        >
            <Box
                bg={"purple"}
                width={"100%"}
                height={"80px"}
                borderRadius={"16px 16px 0 0"}
            />
            <Stack
                px={9}
                py={16}
                bg={"white"}
                spacing={5}
                boxShadow={"8px 6px 10px 0px #00000061"}
                borderRadius={"0 0 16px 16px"}
            >
                <TitleBlog title={"Lorem Ipsum"} fontSize={"24px"} />
                <TextServices text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis fermentum convallis. Phasellus mattis, dui a ultrice."} size={"16px"} color={"#424040"} />
            </Stack>
        </Stack>
    )
}
interface CardLoginProps {
    id1: any
    value1: any
    onChange1: any
    id2: any
    onClick: any
    value2: any
    onChange2: any
}
export function CardLogin({ id1, value1, onChange1, id2, value2, onChange2, onClick }: CardLoginProps) {
    return (
        <Stack
            borderRadius={"16px"}
            spacing={0}
            bg={"white"}
            w={"60%"}
        >
            <Box
                bg={"purple"}
                width={"100%"}
                height={"80px"}
                borderRadius={"16px 16px 0 0"}
            />
            <Stack
                spacing={16}
                align={"center"}
                px={9}
                py={10}
            >
                <HStack
                    w={"100%"}
                    justify={"space-between"}

                >
                    <InputIndex label={"Email"} type={"email"} w={"30%"} placeholder={"Digite aqui o email"} id={id1} value={value1} onChange={onChange1} />
                    <InputIndex label={"Senha"} type={"password"} w={"30%"} placeholder={"Digite aqui a senha"} id={id2} value={value2} onChange={onChange2} />
                </HStack>
                <ButtonLogin textButton={"Enviar"} onClick={onClick} />
            </Stack>
        </Stack>
    )
}