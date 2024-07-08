import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousal.css';
import { Autoplay, Pagination } from 'swiper/modules';
import SliderOne from './SliderOne';
import SliderTwo from './SliderTwo';
import SliderThree from './SliderThree';


const Carousel = () => {
    return (
        <div className=" bg-white -mt-34 sm:-mt-6 md:-mt-8 lg:-mt-8 py-4">
        <Swiper
           spaceBetween={30}
           centeredSlides={true}
           autoplay={{
             delay: 3000,
             disableOnInteraction: false,
           }}
           pagination={{
             clickable: true,
           }}
           // navigation={true}
           modules={[Autoplay, Pagination, ]}
           className="mySwiper"
         >
           <SwiperSlide> <SliderOne></SliderOne> </SwiperSlide>
           <SwiperSlide> <SliderTwo></SliderTwo> </SwiperSlide>     
           <SwiperSlide> <SliderThree></SliderThree> </SwiperSlide>     
        
         </Swiper>
       </div>
    );
};

export default Carousel;