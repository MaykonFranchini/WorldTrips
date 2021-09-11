import { Header } from "../components/Header";
import { Flex } from '@chakra-ui/react'
import { Banner } from '../components/Banner'


export default function Home() {
  return (
    <Flex direction='column'>

    
      <Header />
      <Banner />

   </Flex>
  )
}
