import { FormControl, FormLabel, Input } from "@chakra-ui/react"

interface InputIndexProps {
    label: string
    type: string
    value: any
    onChange: any
    id: any
    w: string
    placeholder: string
}

export function InputIndex({ label, type, w, placeholder, id, value, onChange }: InputIndexProps) {
    return (
        <FormControl
            w={w}
        >
            <FormLabel>{label}</FormLabel>
            <Input
                id={id}
                onChange={onChange}
                value={value}
                type={type}
                placeholder={placeholder}
                bg={"white"}
                boxShadow={"6px 6px 18px 0px rgba(0, 0, 0, 0.15)"}
            />
        </FormControl>
    )
}