import { Flex, Box, Image, Text } from '@chakra-ui/react'

export function TravelTypes() {
    return(
        <Flex marginY="20" width="100%" maxWidth={1480} marginX="auto" justify="space-between" alignItems="center">
            <Box>
                <Image src='/icons/cocktail.png' alt='cocktail icon' width={100} />
                <Text fontWeight="bold" fontSize="2xl">vida noturna</Text>
            </Box>
            <Box>
                <Image src='/icons/surf.png' alt='surf icon' width={100} />
                <Text fontWeight="bold" fontSize="2xl">praia</Text>
            </Box>
            <Box >
                <Image src='/icons/building.png' alt='building icon' width={100} />
                <Text fontWeight="bold" fontSize="2xl">moderno</Text>
            </Box>
            <Box >
                <Image src='/icons/museum.png' alt='museum icon' width={100} />
                <Text fontWeight="bold" fontSize="2xl">clássico</Text>
            </Box>
            <Box>
                <Image src='/icons/earth.png' alt='earth icon' width={100} />
                <Text fontWeight="bold" fontSize="2xl" >e mais...</Text>
            </Box>

        </Flex>
    )
}