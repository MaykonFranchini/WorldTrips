import { NextApiRequest, NextApiResponse } from "next"

export default function Continents(resquest: NextApiRequest, response: NextApiResponse) {
    const data = {
        europa: { 
            name: 'Europa', 
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
        americaDoSul: { 
            name: 'Ámerica do Sul', 
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
        americaDoNorte: { 
            name: 'Ámerica do Norte', 
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
        asia: { 
            name: 'Ásia', 
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
        africa: { 
            name: 'África', 
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
        oceania: { 
            name: 'Oceania', 
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
    }

    return response.json(data)

}