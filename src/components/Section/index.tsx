import { HStack, Stack, Textarea } from "@chakra-ui/react"

import { TitleIndex, TitleServices } from "../Title"
import { TextServices } from "../Text"
import { ButtonIndex } from "../Button"
import { Image } from "../Image"
import { CardServices, CardSobreNos, CardVectorE } from "../Card"
import { InputIndex } from "../Form"
import { AsideIndexPrimary, AsideSobrePrimary } from "../Aside"

export function SectionIndexPrimary() {
    return (
        <Stack
            as={"section"}
            spacing={4}
            align={"center"}
        >
            <TitleServices title={"Nossos Serviços"} size={"36px"} color={"black"} />
            <Image src={"/retangulomaior.png"} alt={"Code Jr"} width={105} height={15} />
        </Stack>
    )
}

interface SectionIndexSecondaryProps {
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


export function SectionIndexSecondary({ src1, alt1, width1, height1, title, src2, alt2, width2, height2, text, size }: SectionIndexSecondaryProps) {
    return (
        <HStack
            as={"section"}
            spacing={12}
            align={"stretch"}
        >
            <AsideIndexPrimary text={text}>
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
            </AsideIndexPrimary>
            <CardServices src1={"/phone.png"} alt1={"Aplicativos Code Jr"} width1={35} height1={60} title={"Aplicativos"} src2={"/retangulomenor.png"} alt2={"Code Jr"} width2={31} height2={12} text={" Criamos aplicativos sob medida para atender às necessidades exclusivas do seu negócio. Desde a concepção até o lançamento, oferecemos soluções que colocam sua empresa na palma das mãos dos clientes."} size={"24px"} />
            <CardServices src1={"/computer.png"} alt1={"Sites Code Jr"} width1={64} height1={44} title={"Sites"} src2={"/retangulomenor.png"} alt2={"Code Jr"} width2={31} height2={12} text={"Construímos sites sob medida para elevar sua marca e alcançar seu público-alvo de forma impactante. Nossa equipe de desenvolvimento se dedica para que seu site seja responsivo, atraente e adaptado às últimas tendências."} size={"24px"} />
            <CardServices src1={"/notephone.png"} alt1={"Sistemas Code Jr"} width1={64} height1={44} title={"Sistemas"} src2={"/retangulomenor.png"} alt2={"Code Jr"} width2={31} height2={12} text={"Criamos sistemas sob medida para atender às necessidades específicas do seu negócio. Combinando expertise técnica e criatividade, nossa equipe desenvolve soluções que otimizam processos e impulsionam a eficiência da sua empresa."} size={"24px"} />
        </HStack>
    )
}


interface SectionPurpleProps {
    title: string
    src1: string
    w1: string
    alt1: string
    width1: number
    height1: number
    text: string
    align?: string
    dir?: any
    textAlign?: any
}

export function SectionPurple({ title, src1, w1, alt1, width1, height1, text, align, dir, textAlign }: SectionPurpleProps) {
    return (
        <HStack
            as={"section"}
            bg={"purple"}
            px={9}
            flexDir={dir}
            py={10}
        >
            <AsideSobrePrimary title={title} >
                <HStack
                    as={"section"}
                    spacing={0}
                    align={"start"}
                    flexDir={dir}
                >
                    <CardVectorE />
                    <Image src={"/Rectangle 146.png"} w={"60%"} alt={"Conheça a nossa história no mundo da programação"} width={7} height={119} />
                    <TextServices text={text} size={"20px"} color={"white"} textAlign={textAlign} />
                </HStack>
            </AsideSobrePrimary>
            <Image src={src1} align={align} w={w1} alt={alt1} width={width1} height={height1} />
        </HStack>
    )
}

export function SectionForms() {
    return (
        <Stack
            as="section"
            spacing={10}
        >
            <HStack
                spacing={10}
                w={"100%"}
            >
                <InputIndex label={"Nome"} type={"name"} w={"22%"} placeholder={""} />
                <InputIndex label={"Sobrenome"} type={"name"} w={"22%"} placeholder={""} />
                <InputIndex label={"Email"} type={"email"} w={"22%"} placeholder={""} />
                <InputIndex label={"Telefone"} type={"phone"} w={"22%"} placeholder={""} />
            </HStack>
            <Textarea bg={"white"} />
            <ButtonIndex textButton={"Enviar"} href={"#"} w={"15%"} />
        </Stack>
    )
}

export function SectionSobrePrimary() {
    return (
        <HStack
            as={"section"}
            w="100%"
            spacing={9}
            justify={"center"}
        >
            <CardSobreNos text={"Criamos aplicativos sob medida para atender às necessidades exclusivas do seu negócio. Desde a concepção até o lançamento, oferecemos soluções que colocam sua empresa na palma das mãos dos clientes."} size={"16px"} color={"#fff"} src={"/Group 38.png"} alt={"Missão da Code Jr"} width={277} height={64} bgColor={"purple"} w={"24%"} />

            <CardSobreNos text={"Criamos aplicativos sob medida para atender às necessidades exclusivas do seu negócio. Desde a concepção até o lançamento, oferecemos soluções que colocam sua empresa na palma das mãos dos clientes."} size={"16px"} color={"#fff"} src={"/Group 36.png"} alt={"Visão da Code Jr"} width={250} height={64} bgColor={"purple"} w={"24%"} />

            <CardSobreNos text={"Criamos aplicativos sob medida para atender às necessidades exclusivas do seu negócio. Desde a concepção até o lançamento, oferecemos soluções que colocam sua empresa na palma das mãos dos clientes."} size={"16px"} color={"#fff"} src={"/Group 37.png"} alt={"Valores da Code Jr"} width={297} height={66} bgColor={"purple"} w={"24%"} />

        </HStack>
    )
}

export function SectionIndexContato() {
    return (
        <Stack
            as="section"
            spacing={2}
            pt={20}
            align={"center"}
        >
            <TitleServices title={"Entre em Contato"} size={"36px"} color={"purple"} />
            <Image src={"/retangulomaior.png"} alt={""} width={105} height={15} />
        </Stack>
    )
}

export function SectionPrimaryADM() {
    return (
        <Stack
            as="section"
            align={"center"}
            spacing={8}
            w={"100%"}
            px={20}
        >
            <HStack
                as="section"
                justify={"center"}
                spacing={10}
                w={"100%"}
            >
                <InputIndex label={"Autor"} type={"name"} w={"29%"} placeholder={""} />
                <InputIndex label={"Imagem do Autor"} type={""} w={"29%"} placeholder={""} />
                <InputIndex label={"Data"} type={"date"} w={"29%"} placeholder={""} />
            </HStack>
            <InputIndex label={"Título"} type={"name"} w={"20%"} placeholder={""} />
        </Stack>

    )
}