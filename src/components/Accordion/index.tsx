import { AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, Accordion } from "@chakra-ui/react"

interface AccordionsProps {
    title: string
}

export function Accordions({ title }:AccordionsProps) {
    return (
        <Accordion 
            allowToggle
            bg={"#fff"}
            px={10}
            py={7}
            w={"60%"}
            borderRadius={"6px"}
            background={"#FFF"}
            boxShadow={"0px 8px 15px 0px rgba(0, 0, 0, 0.19)"}

        >
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            {title}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}