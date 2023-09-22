import { HStack } from "@chakra-ui/react"

import { LinkNavbar } from "../Link"
import { Image } from "../Image"

export function Navbar() {
    return(
        <HStack
            bg={"purple"}
            justify={"center"}
            py={5}
            spacing={10}
            position={"sticky"}
            top={"0"}
            zIndex={"1000"}
        >
            <LinkNavbar href={"#"} text={"Blog"} />
            <LinkNavbar href={"#"} text={"Home"} />
            <LinkNavbar href={"#"} text={"Serviços"} />
            <Image src={"/logo.png"} alt={"Logo da Code Jr"} width={75} height={75} />
            <LinkNavbar href={"/sobre"} text={"Sobre Nós"} />
            <LinkNavbar href={"#"} text={"Login"} />
            <LinkNavbar href={"#"} text={"Contato"} />
            
        </HStack>
    )
}