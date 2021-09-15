import { GetStaticPaths, GetStaticProps } from "next";

export default function Continent({continentData}){
    return(
        <h1>{continentData.name}</h1>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    // Call an external API endpoint to get posts
    const res = await (await fetch('http://localhost:3000/api/continents')).json();
  
    // Get the paths we want to pre-render based on posts
    const paths = res.map((continent) => ({
        params: { continent: continent.slug },
      }));
      console.log(paths)

    return { paths, fallback: false }
}

export const getStaticProps : GetStaticProps = async ({params}) => {
    
    const response = await fetch('http://localhost:3000/api/continents');
    const jsonResponse = await response.json();
    // console.log(jsonResponse)

    const continentData = jsonResponse.filter((continent) =>
    continent.slug === params?.continent)[0];

    console.log(continentData)
    
    return {
      props: { continentData }, // will be passed to the page component as props
    }
  }