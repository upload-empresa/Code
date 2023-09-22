import { FormControl, FormLabel, Input } from "@chakra-ui/react"

interface InputIndexProps {
    label: string
    type: string
    w: string
    placeholder: string
}

export function InputIndex({ label, type, w, placeholder }:InputIndexProps) {
    return (
        <FormControl
            w={w}
        >
            <FormLabel>{label}</FormLabel>
            <Input 
                type={type}
                placeholder={placeholder}
                bg={"white"}
                boxShadow={"6px 6px 18px 0px rgba(0, 0, 0, 0.15)"}
            />
        </FormControl>
    )
}