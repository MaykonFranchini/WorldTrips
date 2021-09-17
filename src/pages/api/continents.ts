import { NextApiRequest, NextApiResponse } from "next"

export default function Continents(resquest: NextApiRequest, response: NextApiResponse) {
    const data = [
        {   slug: 'europa',
            name: 'Europa',
            banner: "url('/cities/europa.jpg')", 
            bio: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
            info: {countries:50, languages: 60, topCities:27},
            famousCities: [
                { imgUrl: 'europa', name: 'Londres', country: 'Reino Unido', flagUrl: 'teste'},
                { imgUrl: 'test', name: 'Paris', country: 'Reino Unido', flagUrl: 'teste'},
                { imgUrl: 'test', name: 'Roma', country: 'Reino Unido', flagUrl: 'teste'},
                { imgUrl: 'test', name: 'Praga', country: 'Reino Unido', flagUrl: 'teste'},
                { imgUrl: 'test', name: 'Amsterdã', country: 'Reino Unido', flagUrl: 'teste'}
            ]
        },
        {   
            slug: 'americadosul',
            name: 'Ámerica do Sul',
            banner: "url('/cities/americadosul.jpg')", 
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
            slug: 'americadonorte',
            name: 'Ámerica do Norte', 
            banner: "url('/cities/americadonorte.jpg')",
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