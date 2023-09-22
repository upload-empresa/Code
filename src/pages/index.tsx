import { HStack, Stack } from "@chakra-ui/react"

import { CardServices, CardSobreNos } from "@/components/Card"
import { Image } from "@/components/Image"
import { TitleServices } from "@/components/Title"
import { SectionIndex } from "@/components/Section"
import { Accordions } from "@/components/Accordion"
import { TextSpan } from "@/components/Text"
import { ArticleIndexPrimary, ArticleIndexSecondary } from "@/components/Article"

export default function Home() {
  return (
    <Stack
      as="main"
      spacing={20}
    >
      <ArticleIndexPrimary />
      <ArticleIndexSecondary />
      <ArticleIndexSecondary />
      <Stack
        as={"article"}
        bg={"purple"}
        p={10}
        align={"center"}
        spacing={20}
      >
        <TitleServices title={"Nossos Serviços"} size={"36px"} color={"#fff"} />
        <HStack
          justify={"center"}
          spacing={9}
          w="100%"
        >
          <CardSobreNos
            text=
            {
              <>
                <TextSpan text={"Nosso primeiro passo"} />{" "}
                é a reunião de diagnóstico para podemos entender a necessidade do cliente e quais são seus objetivos para o projeto.
              </>
            } size={"20px"} color={"black"} src={"/01 (6).png "} alt={"Processos Code Jr"} width={99} height={76} bgColor={"white"} w={"33%"}>

            <TitleServices title={"Reunião"} size={"36px"} color={"black"} />

          </CardSobreNos>

          <CardSobreNos
            text=
            {<>
              Após a reunião de diagnóstico realizamos os {" "}<TextSpan text={"protótipos de baixa e alta fidelidade"} />{" "} para que nossos clientes saibam exatamente
            </>
            } size={"20px"} color={"black"} src={"/02 (5).png"} alt={"Processos Code Jr"} width={128} height={76} bgColor={"white"} w={"33%"}>

            <TitleServices title={"Reunião"} size={"36px"} color={"black"} />

          </CardSobreNos>

          <CardSobreNos
            text=
            {
              <>
                Nessa última etapa nós realizamos a codificação do projeto com todas as propriedades e objetivos definidos nas {" "}<TextSpan text={"primeiras etapas"} />.
              </>
            } size={"20px"} color={"black"} src={"/03 (5).png"} alt={"Processos Code Jr"} width={127} height={76} bgColor={"white"} w={"33%"}>

            <TitleServices title={"Reunião"} size={"36px"} color={"black"} />

          </CardSobreNos>
        </HStack>
      </Stack>
      <Stack
        as={"article"}
        alignItems={"center"}
        spacing={20}
      >
        <TitleServices title={"Perguntas Frequentes"} size={"36px"} color={"black"} />
        <Stack
          spacing={8}
          w="100%"
          align={"center"}
        >
          <Accordions title={"Quais são os serviços oferecidos?"} />
          <Accordions title={"Como posso obter um orçamento para o meu projeto de desenvolvimento web?"} />
          <Accordions title={"A Code oferece suporte contínuo após o lançamento do projeto?"} />
          <Accordions title={"Como funciona o processo de desenvolvimento web, desde o início até o lançamento do projeto?"} />
        </Stack>

      </Stack>
    </Stack>
  )
}
