import React from 'react';
import Image from 'next/image';
// import image
import s1 from '@/assets/images/slider/slider_3.jpg';

// import sliders
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

// import required modules
SwiperCore.use([Navigation, Autoplay]);

function VariousInfrastructure() {
  return (
    <section className="VariousInfrastructure">
      <div className=" lg:py-[6rem] dark:bg-[#161519] py-[2rem] grid pr-0 lg:pr-12  items-center justify-items-end grid-cols-1 md:grid-cols-2 xl:gap-x-[3rem]">
        <Swiper
          navigation
          autoplay={{ delay: 3000 }}
          className={`lg:max-w-[30rem] max-w-[20rem]
          h-[34rem] transition-all duration-[1s] mr-[5rem]`}
        >
          <SwiperSlide>
            <Image src={s1} height={650} width={500} alt="slider image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={s1} height={650} width={500} alt="slider image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={s1} height={650} width={500} alt="slider image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={s1} height={650} width={500} alt="slider image" />
          </SwiperSlide>
        </Swiper>

        <div className=" lg:py-[4rem] md:py-[1rem] px-5 lg:px-[2rem] xl:px-0">
          <div className="content">
            <h4 className="font-bold text-[2rem] md:text-[2.5rem] md:leading-[2.4rem] dark:text-white lg:leading-[3.5rem] 2xl:pr-[20rem] lg:mb-10 lg:px-[2rem] md:py-0 lg:py-[4rem] py-[1rem]">
              Various infrastructure related projects are also on the way, such
              as:
            </h4>
            <p className=" text-base pb-2 lg:px-2 dark:text-[#ffffffbf] 2xl:pr-[20rem]">
              housing, schools, airport, hospitals, communication, roads as well
              as water related projects.
              <b className="font-bold">
                Plans are in place to introduce mass transit into the region and
                the Kingdom of Kush Airline.
              </b>{' '}
              The future Kingdom plans to invest much more in the region,
              including billions of dollars in its neighboring countries Sudan
              and Egypt, to further the development of construction,
              manufacturing, and processing industries. All this will lay the
              necessary foundation for consumer-focused services and{' '}
              <b className="font-bold">
                create hundreds of thousands of jobs for the people of Sudan,
                Egypt and other countries in Africa.
              </b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VariousInfrastructure;
