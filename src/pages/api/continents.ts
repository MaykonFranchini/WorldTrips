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
            bio: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
            info: {countries:2, languages: 2, topCities:12},
            famousCities: [
                { imgUrl: "/cities/new-york.jpg", name: 'Nova York', country: 'Estados Unidos', flagUrl: '/countriesFlags/united-states.png'},
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
            bio: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
            info: {countries:50, languages: 60, topCities:27},
            famousCities: [
                { imgUrl: 'test', name: 'Londres', country: 'Reino Unido', flagUrl: 'teste'},
                { imgUrl: 'test', name: 'Paris', country: 'Reino Unido', flagUrl: 'teste'},
                { imgUrl: 'test', name: 'Roma', country: 'Reino Unido', flagUrl: 'teste'},
                { imgUrl: 'test', name: 'Praga', country: 'Reino Unido', flagUrl: 'teste'},
                { imgUrl: 'test', name: 'Amsterdã', country: 'Reino Unido', flagUrl: 'teste'}
            ]
        },
        { 
            slug: 'africa',
            name: 'África',
            banner: "url('/cities/africa.jpg')", 
            bio: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
            info: {countries:50, languages: 60, topCities:27},
            famousCities: [
                { imgUrl: 'test', name: 'Londres', country: 'Reino Unido', flagUrl: 'teste'},
                { imgUrl: 'test', name: 'Paris', country: 'Reino Unido', flagUrl: 'teste'},
                { imgUrl: 'test', name: 'Roma', country: 'Reino Unido', flagUrl: 'teste'},
                { imgUrl: 'test', name: 'Praga', country: 'Reino Unido', flagUrl: 'teste'},
                { imgUrl: 'test', name: 'Amsterdã', country: 'Reino Unido', flagUrl: 'teste'}
            ]
        },
        {   
            slug: 'oceania',
            name: 'Oceania',
            banner: "url('/cities/oceania.jpg')",
            bio: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
            info: {countries:50, languages: 60, topCities:27},
            famousCities: [
                { imgUrl: 'test', name: 'Londres', country: 'Reino Unido', flagUrl: 'teste'},
                { imgUrl: 'test', name: 'Paris', country: 'Reino Unido', flagUrl: 'teste'},
                { imgUrl: 'test', name: 'Roma', country: 'Reino Unido', flagUrl: 'teste'},
                { imgUrl: 'test', name: 'Praga', country: 'Reino Unido', flagUrl: 'teste'},
                { imgUrl: 'test', name: 'Amsterdã', country: 'Reino Unido', flagUrl: 'teste'}
            ]
        }
    ]

    return response.json(data)

}