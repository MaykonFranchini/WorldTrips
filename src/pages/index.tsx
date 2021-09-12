import { Header } from "../components/Header";
import { Flex } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { TravelTypes } from "../components/TravelTypes";


export default function Home() {
  return (
    <Flex direction='column'>

    
      <Header />
      <Banner />
      <TravelTypes />

   </Flex>
  )
}
