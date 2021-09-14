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
                    <SliderItem continent="Europa" src="/cities/Europe1.jpg" />
               </SwiperSlide> 

                <SwiperSlide>
                    <SliderItem continent="América do Sul" src="/cities/America.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderItem continent="América do Norte" src="/cities/AmericaNorte.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderItem continent="Ásia" src="/cities/Asia.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderItem continent="Oceania" src="/cities/Oceania.jpg" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <SliderItem continent="África" src="/cities/Africa.jpg" />
                </SwiperSlide>
            </Swiper>
        </Flex>
    )
}