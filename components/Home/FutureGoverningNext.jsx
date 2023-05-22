import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import s1 from "@/assets/images/slider/slider_4.jpg";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
SwiperCore.use([Navigation, Autoplay]);
function FutureGoverningNext() {
  return (
    <section className="FutureGoverningNext">
      <div className="sm:px-8 dark:bg-[#161519] dark:text-[#ffffffbf] lg:pl-16 lg:py-[6rem] py-[2rem] grid   items-center grid-cols-1 md:grid-cols-2 ">
        <div className="pt-5 lg:pt-0 lg:py-[2rem] md:py-[1rem] 2xl:pl-[9rem] order-2 sm:order-1 px-5 lg:px-[2rem] xl:px-0">
          <div className="content">
            <p className="text-base xl:pr-[8rem]">
              The Governing Structure of the Kingdom will be a Constitutional
              Monarchy, with a Monarch elected based on merits. The first
              monarch will be Queen Mother Dr. Delois Blakely, a well known and
              internationally respected humanitarian as well as a spiritual
              leader who for over 50 years served as United Nations Goodwill
              Ambassador. Queen Mother has been recently awarded a Lifetime
              Achievement Award by the President of the United States Mr. Joe
              Biden. The Kingdom will also have a Parliament, with all elected
              members voted in by the citizens.
            </p>
          </div>
        </div>

        <div className="order-1 sm:order-2">
          <Swiper
            navigation
            autoplay={{ delay: 3000 }}
            className={`max-w-[30rem] h-[34rem] transition-all duration-[1s] mr-[5rem]`}
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
        </div>
      </div>
    </section>
  );
}

export default FutureGoverningNext;
