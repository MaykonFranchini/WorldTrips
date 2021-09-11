import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import LogoImg from '../../public/Logo.png'

export function Header() {
  return (
    <Flex 
      as='header'
      width='100%'
      maxWidth={1480}
      height={50}
      
      justify='center'
      marginX="auto"
      marginBottom='-3'
    >
      <Image src={LogoImg} />
        
    </Flex>
  )
}