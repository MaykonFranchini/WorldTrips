import { Swiper, SwiperSlide } from 'swiper/react'
import { Flex } from '@chakra-ui/react'
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
                    <SliderItem continent="Europa" src="/cities/europa.jpg" />
               </SwiperSlide> 

                <SwiperSlide>
                    <SliderItem continent="América do Sul" src="/cities/americadosul.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderItem continent="América do Norte" src="/cities/americadonorte.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderItem continent="Ásia" src="/cities/asia.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderItem continent="Oceania" src="/cities/oceania.jpg" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <SliderItem continent="África" src="/cities/africa.jpg" />
                </SwiperSlide>
            </Swiper>
        </Flex>
    )
}