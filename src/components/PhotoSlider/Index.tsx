import { Swiper, SwiperSlide } from 'swiper/react'
import { Flex, Link } from '@chakra-ui/react'
import SwiperCore, { Navigation,Pagination,Mousewheel,Keyboard } from 'swiper';

import { SliderItem } from './SliderItem';
import 'swiper/css/bundle';

SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

export function PhotoSlider() {
    
    return (
        <Flex 
            maxWidth={1280}
            Height={450}
            marginX='auto'
            padding="4"
        >

            <Swiper 
                cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper"
            >
                
                <SwiperSlide>
                    <Link href="/continents/europa">
                        <SliderItem continent="Europa" src="/cities/europa.jpg" />
                    </Link>
               </SwiperSlide> 

                <SwiperSlide>
                    <Link href="/continents/americadosul">
                        <SliderItem continent="América do Sul" src="/cities/americadosul.jpg" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link href="/continents/americadonorte">
                        <SliderItem continent="América do Norte" src="/cities/americadonorte.jpg" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link href="/continents/asia">
                        <SliderItem continent="Ásia" src="/cities/asia.jpg" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link href="/continents/oceania">
                        <SliderItem continent="Oceania" src="/cities/oceania.jpg" />
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="/continents/africa">
                        <SliderItem continent="África" src="/cities/africa.jpg" />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </Flex>
    )
}