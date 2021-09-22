import { Box, Flex, Text, Image, useBreakpointValue } from '@chakra-ui/react'


export function Banner() {

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	  })
	return (
		<Box 
			bgImage="url('/Background.png')"
			bgPosition="cover"
			bgRepeat="no-repeat"
			bgSize="cover"
			width="100vw"
			maxHeight={[165, 400]}
			padding={[30, 10]}
			marginX={0}		
		>
			<Flex
				direction='row'
				justify='space-evenly'
				width="100%"
				maxWidth={1480}
				marginX='auto'

			>
				<Box
				marginTop={[0, 20]}
				>
					<Text fontSize={[16, 40]} color='white' fontWeight='bold'>
					5 continentes,<br/>
					infinitas possibilidades.</Text>

					<Text fontSize={[12, 38]} color='white' >
						Chegou a hora de tirar do papel a viagem que voce sempre sonhou.
					</Text>
				</Box>
				
				{isWideVersion && (<Box >
					<Image src='/Airplane.png' marginTop={50}  alt="Airplane image"/>
				</Box>)}
			</Flex>
				
		</Box>
	)
}