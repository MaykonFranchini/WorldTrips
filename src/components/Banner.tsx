import { Box, Flex, Text, Image } from '@chakra-ui/react'


export function Banner() {
	return (
		<Box 
			bgImage="url('/Background.png')"
			bgPosition="cover"
			bgRepeat="no-repeat"
			bgSize='100vw'
			width="100vw"
			height="80"
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
				marginTop={20}
				>
					<Text fontSize={40} color='white' fontWeight='bold'>
					5 continentes,<br/>
					infinitas possibilidades.</Text>

					<Text fontSize={20} color='white' >
						Chegou a hora de tirar do papel a viagem que voce sempre sonhou.
					</Text>
				</Box>
				
				<Box >
					<Image src='/Airplane.png' marginTop={50}  alt="Airplane image"/>
				</Box>
			</Flex>
				
		</Box>
	)
}