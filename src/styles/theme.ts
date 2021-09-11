import { extendTheme } from "@chakra-ui/react";


export const theme = extendTheme({
    colors: {
        gray: {
            "500": "#47585B"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                color: 'gray.500'
            }
        }
    }
})