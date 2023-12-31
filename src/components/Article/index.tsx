import { Stack } from "@chakra-ui/react"

import { TitleIndex } from "../Title"
import { SectionForms, SectionIndexContato, SectionIndexPrimary, SectionIndexSecondary, SectionPurple, SectionSobrePrimary } from "../Section"
import { ButtonIndex } from "../Button"
import { TextServices } from "../Text"

export function ArticleIndexPrimary() {
    return (
        <Stack
            bgImage="url('/Group 35.png')"
            bgRepeat={"no-repeat"}
            bgSize={"100%"}
            px={12}
            py={10}
        >
            <Stack
                w="50%"
                spacing={8}
            >
                <Stack
                    spacing={4}
                >
                    <TitleIndex color={"#fff"} text={"Transforme a sua ideia em um software"} w={"70%"} />
                    <TextServices text={"Tecnologia e inovação para experiências digitais excepcionais. Desenvolvimento web sob medida para impulsionar seu sucesso online. Junte-se a nós e construa o futuro digital!"} size={"20px"} color={"#fff"} />
                </Stack>
                <ButtonIndex textButton={"Agende uma reunião"} w={"35%"} />
            </Stack>
        </Stack>
    )
}

export function ArticleIndexSecondary() {
    return (
        <Stack
            as={"article"}
            px={40}
            spacing={20}
        >
            <SectionIndexPrimary />
            <SectionIndexSecondary src1={""} alt1={""} width1={0} height1={0} title={""} src2={""} alt2={""} width2={0} height2={0} text={""} size={""} />
        </Stack>
    )
}



export function ArticleFaleConosco() {
    return (
        <Stack
            as={"article"}
            bg={"purple"}
            align={"center"}
            py={20}
        >
            <TitleIndex color={"white"} text={"Fale Conosco"} />
        </Stack>
    )
}
interface ArticleContatoProps {
    type5: any
    value1: any
    value2: any
    value3: any
    value4: any
    value5: any
    onChange1: any
    onChange2: any
    onChange3: any
    onChange4: any
    onChange5: any
    id1: any
    id2: any
    id3: any
    id4: any
    id5: any
}
export function ArticleContato({ value1, value2, value3, value4, onChange1, onChange2, onChange3, onChange4, id1, id2, id3, id4, type5, onChange5, id5, value5 }: ArticleContatoProps) {
    return (
        <Stack
            as="article"
            align={"center"}
            spacing={20}
        >
            <SectionIndexContato />
            <SectionForms value1={value1} value2={value2} value3={value3} value4={value4} onChange1={onChange1} onChange2={onChange2} onChange3={onChange3} onChange4={onChange4} id1={id1} id2={id2} id3={id3} id4={id4} type5={type5} value5={value5} onChange5={onChange5} id5={id5} />
        </Stack>
    )
}

export function ArticleSobrePrimary() {
    return (
        <Stack
            as={"article"}
            align={"center"}
            px={20}
            pt={20}
            spacing={16}
        >
            <TitleIndex color={"#000"} text={"Sobre Nós"} />
            <SectionSobrePrimary />
        </Stack>
    )
}

export function ArticleSobreSecondary() {
    return (
        <Stack
            as={"article"}
            spacing={0}
        >
            <SectionPurple title={"Nossa História"} align="end" src1={"/Group1.png"} w1={"50%"} alt1={"Conheça a nossa história"} width1={463} height1={529} text={"A CodeJR é uma empresa júnior de computação formada por estudantes apaixonados por tecnologia. Desde sua fundação, temos colaborado com diversos projetos e empresas, oferecendo soluções inovadoras. Nossa equipe busca constantemente aprendizado e crescimento, valorizando a colaboração e a responsabilidade social. Nosso objetivo é continuar crescendo, formando novos talentos e entregando soluções tecnológicas de qualidade para nossos clientes e parceiros."} />

            <SectionPurple title={"A História do Mej"} src1={"/mapa 1.png"} w1={"50%"} alt1={"Conheça a história do movimento empresa júnior"} width1={564} height1={429} text={"A CodeJR faz parte do MEJ (Movimento Empresa Júnior), que surgiu nos anos 1960 e oferece aos estudantes uma experiência prática de mercado durante a graduação. Como empresa júnior, temos acesso a capacitações, eventos e uma rede de contatos, estimulando o empreendedorismo e proporcionando aprendizado e impacto positivo em nossos membros e na comunidade."} dir={"row-reverse"} textAlign={"end"} />

        </Stack>
    )
}