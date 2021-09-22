import { NextApiRequest, NextApiResponse } from "next"

export default function Continents(resquest: NextApiRequest, response: NextApiResponse) {
    const data = [
        {   slug: 'europa',
            name: 'Europa',
            banner: "url('/cities/europa.jpg')", 
            bio: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
            info: {countries:50, languages: 60, topCities:27},
            famousCities: [
                { imgUrl: "/cities/london.jpg", name: 'Londres', country: 'Reino Unido', flagUrl: '/countriesFlags/united-kingdom.png'},
                { imgUrl: "/cities/paris.jpg", name: 'Paris', country: 'França', flagUrl: '/countriesFlags/france.png'},
                { imgUrl: "/cities/roma.jpg", name: 'Roma', country: 'Itália', flagUrl: '/countriesFlags/italy.png'},
                { imgUrl: "/cities/praga.jpg", name: 'Praga', country: 'Republica Tcheca', flagUrl: '/countriesFlags/czech-republic.png'},
                { imgUrl: "/cities/amsterdam.jpg", name: 'Amsterdã', country: 'Holanda', flagUrl: '/countriesFlags/netherlands.png'}
            ]
        },
        {   
            slug: 'americadosul',
            name: 'Ámerica do Sul',
            banner: "url('/cities/americadosul.jpg')", 
            bio: 'A América do Sul é um continente inteiramente no hemisfério ocidental e principalmente no hemisfério sul, com uma porção relativamente pequena no hemisfério norte. A América do Sul é composta por doze países, tem uma área de 17.840.000 quilômetros quadrados. A geografia do oeste da América do Sul é dominada pelas montanhas dos Andes; em contraste, a parte oriental contém regiões montanhosas e vastas planícies onde rios como o Amazonas, Orinoco e Paraná fluem.',
            info: {countries:12, languages: 2, topCities:4},
            famousCities: [
                { imgUrl: "/cities/rio-de-janeiro.jpg", name: 'Rio de Janeiro', country: 'Brasil', flagUrl: '/countriesFlags/brazil.png'},
                { imgUrl: "/cities/sao-paulo.jpg", name: 'São Paulo', country: 'Brasil', flagUrl: '/countriesFlags/brazil.png'},
                { imgUrl: "/cities/buenos-aires.jpg", name: 'Buenos Aires', country: 'Argentina', flagUrl: '/countriesFlags/argentina.png'},
                { imgUrl: "/cities/santiago.jpg", name: 'Santiago', country: 'Chile', flagUrl: '/countriesFlags/chile.png'},
                { imgUrl: "/cities/machu-picchu.jpg", name: 'Machu Picchu', country: 'Peru', flagUrl: '/countriesFlags/peru.png'}
            ]
        },
        {   
            slug: 'americadonorte',
            name: 'Ámerica do Norte', 
            banner: "url('/cities/americadonorte.jpg')",
            bio: 'América do Norte é um continente no Hemisfério Norte e quase inteiramente dentro do Hemisfério Ocidental. Também pode ser descrito como o subcontinente norte das Américas. Faz fronteira ao norte com o oceano Ártico, a leste com o oceano Atlântico, a sudeste com a América do Sul e o mar do Caribe e a oeste e sul com o oceano Pacífico. Por estar na placa tectônica norte-americana, a Groenlândia está incluída geograficamente como parte da América do Norte.',
            info: {countries:2, languages: 2, topCities:12},
            famousCities: [
                { imgUrl: "/cities/new-york.jpg", name: 'New York', country: 'Estados Unidos', flagUrl: '/countriesFlags/united-states.png'},
                { imgUrl: "/cities/montreal.jpg", name: 'Montreal', country: 'Canadá', flagUrl: '/countriesFlags/canada.png'},
                { imgUrl: "/cities/miami.jpg", name: 'Miami', country: 'Estados Unidos', flagUrl: '/countriesFlags/united-states.png'},
                { imgUrl: "/cities/toronto.jpg", name: 'Toronto', country: 'Canadá', flagUrl: '/countriesFlags/canada.png'},
                { imgUrl: "/cities/san-francisco.jpg", name: 'São Francisco', country: 'Estados Unidos', flagUrl: '/countriesFlags/united-states.png'}
            ]
        },
        {   
            slug: 'asia',
            name: 'Ásia',
            banner: "url('/cities/asia.jpg')", 
            bio: 'A Ásia é o maior e mais populoso continente da Terra, localizado principalmente nos hemisférios oriental e norte. Ele compartilha a massa continental da Eurásia com o continente da Europa e a massa continental da Afro-Eurásia com a Europa e a África. A Ásia cobre uma área de 44.579.000 quilômetros quadrados (17.212.000 sq mi), cerca de 30% da área total da Terra e 8,7% da área total da superfície da Terra. O continente, que há muito tempo abriga a maioria da população humana, foi o local de muitas das primeiras civilizações. Seus 4,5 bilhões de habitantes (em junho de 2019) constituem cerca de 60% da população mundial.',
            info: {countries:48, languages: 100, topCities:29},
            famousCities: [
                { imgUrl: "/cities/bangkok.jpg", name: 'Bangkok', country: 'Tailândia', flagUrl: '/countriesFlags/thailand.png'},
                { imgUrl: "/cities/beijing.jpg", name: 'Beijing', country: 'China', flagUrl: '/countriesFlags/china.png'},
                { imgUrl: "/cities/hong-kong.jpg", name: 'Hong Kong', country: 'China', flagUrl: '/countriesFlags/china.png'},
                { imgUrl: "/cities/seoul.jpg", name: 'Seoul', country: 'Coreia do Sul', flagUrl: '/countriesFlags/south-korea.png'},
                { imgUrl: "/cities/tokyo.jpg", name: 'Tokio', country: 'Japão', flagUrl: '/countriesFlags/japan.png'}
            ]
        },
        { 
            slug: 'africa',
            name: 'África',
            banner: "url('/cities/africa.jpg')", 
            bio: 'A África é o segundo maior e o segundo mais populoso continente do mundo, depois da Ásia em ambos os casos. Com cerca de 30,3 milhões de km2 (11,7 milhões de milhas quadradas), incluindo ilhas adjacentes, cobre 6% da área total da superfície da Terra e 20% de sua área terrestre. A população da África é a mais jovem de todos os continentes.',
            info: {countries:55, languages: 100, topCities:19},
            famousCities: [
                { imgUrl: "/cities/casablanca.jpg", name: 'Casablanca', country: 'Marrocos', flagUrl: '/countriesFlags/morocco.png'},
                { imgUrl: "/cities/jerusalem.jpg", name: 'Jerulsalem', country: 'Israel', flagUrl: '/countriesFlags/israel.png'},
                { imgUrl: "/cities/cape-town.jpg", name: 'Cape Town', country: 'África do Sul', flagUrl: '/countriesFlags/south-africa.png'},
                { imgUrl: "/cities/cairo.jpg", name: 'Cairo', country: 'Egito', flagUrl: '/countriesFlags/egypt.png'},
                { imgUrl: "/cities/marrakesh.jpg", name: 'Marrakesh', country: 'Marrocos', flagUrl: '/countriesFlags/morocco.png'}
            ]
        },
        {   
            slug: 'oceania',
            name: 'Oceania',
            banner: "url('/cities/oceania.jpg')",
            bio: 'Oceania é uma região geográfica que inclui a Australásia, Melanésia, Micronésia e Polinésia. Abrangendo os hemisférios oriental e ocidental, a Oceania tem uma área de 8.525.989 quilômetros quadrados (3.291.903 sq mi) e uma população de mais de 41 milhões. Quando comparada com os continentes, a região da Oceania é a menor em extensão territorial e a segunda menor em população depois da Antártica.',
            info: {countries:4, languages: 3, topCities:6},
            famousCities: [
                { imgUrl: "/cities/melbourne.jpg", name: 'Melbourne', country: 'Austrália', flagUrl: '/countriesFlags/australia.png'},
                { imgUrl: "/cities/sydney.jpg", name: 'Sidnei', country: 'Austrália', flagUrl: '/countriesFlags/australia.png'},
                { imgUrl: "/cities/adelaide.jpg", name: 'Adelaide', country: 'Austrália', flagUrl: '/countriesFlags/australia.png'},
                { imgUrl: "/cities/aukland.jpg", name: 'Aukland', country: 'Nova Zelândia', flagUrl: '/countriesFlags/new-zealand.png'},
                { imgUrl: "/cities/brisbane.jpg", name: 'Brisbane', country: 'Austrália', flagUrl: '/countriesFlags/australia.png'}
            ]
        }
    ]

    return response.json(data)

}