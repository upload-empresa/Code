import { Stack } from "@chakra-ui/react"

import { ButtonIndex } from "@/components/Button"
import { SectionPrimaryADM } from "@/components/Section"

export default function ADM() {
    return (
        <Stack
            as="main"
            py={20}
        >
            <SectionPrimaryADM />
            <Stack
                align={"end"}
                px={28}
            >
                <ButtonIndex textButton={"Enviar"} href={"#"} w={"15%"} />
            </Stack>
        </Stack>
    )
}