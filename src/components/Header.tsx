import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import LogoImg from '../../public/Logo.png'
import { useRouter } from 'next/router'

import { IoChevronBackSharp } from 'react-icons/io5'

export function Header() {
  const router = useRouter()
  const isHome = router.asPath === '/' ? true : false;

  return (
    <Flex 
      as='header'
      width='100%'
      maxWidth={1480}
      height={50}
      marginX="auto"
      marginBottom='-3'
    >
      <Flex>{ !isHome &&  
        <Link href="/">
          <a><IoChevronBackSharp fontSize={30} /></a>
        </Link>}
      </Flex>
      <Flex marginX="auto" textAlign="center"><Image src={LogoImg} alt="logo" /></Flex>
        
    </Flex>
  )
}