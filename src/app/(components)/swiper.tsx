"use client"
import React from 'react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import myImage1 from '../assets/IMAGE (11).png'
import myImage2 from '../assets/IMAGE (10).png'
import myImage3 from '../assets/img-5.png'
import myImage4 from '../assets/IMAGE (13).png'
import myImage5 from '../assets/IMAGE (14).png'
import myImage6 from '../assets/IMAGE (8).png'
import myImage7 from '../assets/IMAGE (9).png'
import myImage8 from '../assets/img-3.png'
import myImage9 from '../assets/img-2.png'
const SwiperSlider = () => {
  return (
	<Swiper
	cssMode={true}
	navigation={true}
	pagination={true}
	mousewheel={true}
	keyboard={true}
	modules={[Navigation, Pagination, Mousewheel, Keyboard]}
	className="mySwiper my-[60px]"
 >
	<SwiperSlide>
		<Image src={myImage1} width={100} height={100}  alt='first image' />
	</SwiperSlide>
	<SwiperSlide>
		<Image src={myImage2} width={100} height={100}  alt='first image' />
	</SwiperSlide>
	<SwiperSlide>
		<Image src={myImage3} width={100} height={100}  alt='first image' />
	</SwiperSlide>
	<SwiperSlide>
		<Image src={myImage4} width={100} height={100}  alt='first image' />
	</SwiperSlide>
	<SwiperSlide>
		<Image src={myImage5} width={100} height={100}  alt='first image' />
	</SwiperSlide>
	<SwiperSlide>
		<Image src={myImage6} width={100} height={100}  alt='first image' />
	</SwiperSlide>
	<SwiperSlide>
		<Image src={myImage7} width={100} height={100}  alt='first image' />
	</SwiperSlide>
	<SwiperSlide>
		<Image src={myImage8} width={100} height={100}  alt='first image' />
	</SwiperSlide>
	<SwiperSlide>
		<Image src={myImage9} width={100} height={100}  alt='first image' />
	</SwiperSlide>
 </Swiper>
  )
}

export default SwiperSlider