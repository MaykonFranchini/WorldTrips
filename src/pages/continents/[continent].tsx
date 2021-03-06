import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from '../../components/Header'
import { Flex, Heading, Box, Text, SimpleGrid, Image, Avatar, Tooltip, Icon } from '@chakra-ui/react'
import Head from 'next/head'
import { AiOutlineInfoCircle } from 'react-icons/ai'

interface ContinentProps {
  slug: string,
  name: string,
  banner: string, 
  bio:string,
  info: {
    countries:number,
    languages: number,
    topCities: number,
  },
  famousCities: [{
    imgUrl: string, 
    name: string, 
    country: string, 
    flagUrl: string,
  }],
}

interface ContinentPageProps {
  continentData: ContinentProps,
}

export default function Continent({ continentData } :ContinentPageProps){
    return(
      <>
        <Head>
          <title>Worldtrip | {continentData.name}</title>
        </Head>
        <Flex direction="column">
          <Header />
          
          <Flex bgImage={continentData.banner} bgPosition="center" bgRepeat="no-repeat" bgSize="cover" align="flex-end" height={[300, 450]}>
            <Heading  padding="5" color="white">{continentData.name}</Heading>
          </Flex>
          <Flex marginX="auto" marginY={50} justifyContent="center" flexDir={["column", "row"]} alignItems="center">
            <Box maxWidth={["80%", "30%"]} marginRight={50} marginBottom="5">
              <Text fontWeight="bold" fontSize="lg" marginLeft="3">{continentData.bio}</Text>
            </Box>
            <Flex alignItems="center">
              <Box mr="4">
                <Text color="#f5b91c" fontSize="4xl" fontWeight="bold">{continentData.info.countries}</Text>
                <Text fontWeight="bold">paises</Text>
              </Box>
              <Box mr="4">
                <Text color="#f5b91c" fontSize="4xl" fontWeight="bold">{continentData.info.languages}</Text>
                <Text fontWeight="bold">linguas</Text>
              </Box>
              <Box mr="4">
                <Text color="#f5b91c" fontSize="4xl" fontWeight="bold">{continentData.info.topCities}</Text>
                <Text fontWeight="bold">
                  cidades +100
                  <Tooltip label="Cities that are on list of top 100 most visit cites in the world." aria-label="A tooltip">
                    <Icon><AiOutlineInfoCircle fontSize={20} /></Icon>
                  </Tooltip>

                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex direction="column" margin={50}>
            <Heading>Cidades +100</Heading>

            <SimpleGrid minChildWidth="280px" spacing="50px" mt={50}>

              {continentData.famousCities.map(city => {

                return (
                <Box key={city.name}  border="2px solid #f5b91c" >
                  <Image src={city.imgUrl} alt={city.name} height={200} width="100%" />
                  <Flex justifyContent="space-between" margin="3">
                    <Box>
                      <Text fontWeight="bold">{city.name}</Text>
                      <Text>{city.country}</Text>
                    </Box>
                    <Avatar  size="sm" src={city.flagUrl} />
                  </Flex>
                </Box>)
              })}
              

            </SimpleGrid>
          </Flex>
        </Flex>
      </>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    // Call an external API endpoint to get posts
    const res = await (await fetch('http://localhost:3000/api/continents')).json();
  
    // Get the paths we want to pre-render based on posts
    const paths = res.map((continent) => ({
        params: { continent: continent.slug },
      }));
      // console.log(paths)

    return { paths, fallback: false }
}

export const getStaticProps : GetStaticProps = async ({params}) => {
    
    const response = await fetch('http://localhost:3000/api/continents');
    const jsonResponse = await response.json();
    // console.log(jsonResponse)

    const continentData = jsonResponse.filter((continent) =>
    continent.slug === params?.continent)[0];

    // console.log(continentData)
    
    return {
      props: { continentData }, // will be passed to the page component as props
    }
  }