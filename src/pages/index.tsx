import { Header } from "../components/Header";
import { Flex, Text } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { TravelTypes } from "../components/TravelTypes";
import { PhotoSlider } from "../components/PhotoSlider/Index";
import Head from 'next/head'

export default function Home() {


  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>
      <Flex direction='column'>

      
        <Header />
        <Banner />
        <TravelTypes />
        <Flex justify="center" alignItems="center" direction="column">
          <Text fontSize={["lg", "4xl"]}>Vamos nessa?</Text>
          <Text fontSize={["lg", "4xl"]}>Escolha seu continente</Text>
        </Flex>

        <PhotoSlider />
    </Flex>
  </>
  )
}
