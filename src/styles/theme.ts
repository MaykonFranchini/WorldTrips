import { extendTheme } from "@chakra-ui/react";
import { generateKey } from "crypto";

export const theme = extendTheme({
    colors: {
        gray: {
            "500": "#47585B"
        }
    },
    styles: {
        global: {
            body: {
                color: 'gray.500'
            }
        }
    }
})