import { Box, Text, Image, Link }from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'

interface SliderItemProps {
    continent: string;
    // slug?: string;
    src: string;
}


export function SliderItem({continent, src}: SliderItemProps) {
    return(
        <Link>
            <Image 
                src={src} 
                alt="London" marginX="auto"
                maxWidth="100%"
                width={1248}
                height={450}     
            />
            <Box position="absolute" textAlign="center" top="50%" left="50%" transform="translate(-50%, 0)">
                <Text color="white" fontWeight="bold" fontSize="4xl" textShadow="1px 2px 1px #000000">{continent}</Text>
                {/* <Text color="white" fontSize="2xl" textShadow="1px 2px 1px #000000" fontWeight="bold">{slug}</Text> */}

                
            </Box>
        </Link>
    )
}