import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        purple: "#3B1B4D",
        yellow: "#FFCE07",
    },
    styles: {
        global: {
            body: {
                bg: "#ECE9EE"
            }
        }
    },
    breakpoints: {
        "2xl": "2560px",
        "xl": "1440px",
        "lg": "1024px",
        "md": "768px",
        "sm": "425px",
        "xs": "375px",
        "xxs": "320px",
        "xxxs": "200px"
    }
})