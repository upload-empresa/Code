import { Text } from "@chakra-ui/react"

interface TextServicesProps {
    text: any
    size: string
    color: string
    textAlign?: any
}

export function TextServices({ text, size, color, textAlign }:TextServicesProps) {
    return(
        <Text
            as="p"
            color={color}
            fontSize={size}
            fontWeight={400}
            textAlign={textAlign}
        >
            {text}
        </Text>
    )
}

interface TextSpanProps {
    text: string
}

export function TextSpan({ text }:TextSpanProps) {
    return(
        <Text
            as="span"
            bg={"yellow"}
            color={"black"}
            fontSize={"20px"}
        >
            {text}
        </Text>
    )
}
