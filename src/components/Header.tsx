import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import LogoImg from '../../../public/Logo.png'

export function Header() {
  return (
    <Flex 
      as='header'
      width='100%'
      maxWidth={1480}
      height={100}
      alignItems="center"
      marginX="auto"
    >
      <Image src={LogoImg} />
        
    </Flex>
  )
}