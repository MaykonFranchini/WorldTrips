import { Flex, Box, Image, Text, useBreakpointValue, Icon } from '@chakra-ui/react'
import { VscDebugBreakpointData } from 'react-icons/vsc'


export function TravelTypes() {

    const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	  })

    return(
        <Flex marginY="20" width="100%" maxWidth={[375, 1480]} marginX="auto" flexWrap="wrap" justify="space-evenly" alignItems="center">
            <Box display={["flex", "block"]}>
               {isWideVersion ? ( <Image src='/icons/cocktail.png' alt='cocktail icon' width={100} />) : <Icon fontSize={20} color="#f5b91c" marginRight="2"><VscDebugBreakpointData /></Icon> }
                <Text fontWeight="bold" fontSize={["md", "2xl"]}>vida noturna</Text>
            </Box>
            <Box display={["flex", "block"]}>
                {isWideVersion ? ( <Image src='/icons/surf.png' alt='surf icon' width={100} /> ) : <Icon fontSize={20} color="#f5b91c" marginRight="2"><VscDebugBreakpointData /></Icon> }
                <Text fontWeight="bold" fontSize={["md", "2xl"]}>praia</Text>
            </Box>
            <Box display={["flex", "block"]}>
                {isWideVersion ? ( <Image src='/icons/building.png' alt='building icon' width={100} /> ) : <Icon fontSize={20} color="#f5b91c" marginRight="2"><VscDebugBreakpointData /></Icon> }
                <Text fontWeight="bold" fontSize={["md", "2xl"]}>moderno</Text>
            </Box>
            <Box display={["flex", "block"]}>
                {isWideVersion ? ( <Image src='/icons/museum.png' alt='museum icon' width={100} /> ) : <Icon fontSize={20} color="#f5b91c" marginRight="2"><VscDebugBreakpointData /></Icon> }
                <Text fontWeight="bold" fontSize={["md", "2xl"]}>clássico</Text>
            </Box>
            <Box display={["flex", "block"]}>
                {isWideVersion ? ( <Image src='/icons/earth.png' alt='earth icon' width={100} /> ) : <Icon fontSize={20} color="#f5b91c" marginRight="2"><VscDebugBreakpointData /></Icon> }
                <Text fontWeight="bold" fontSize={["md", "2xl"]} >e mais...</Text>
            </Box>

        </Flex>
    )
}