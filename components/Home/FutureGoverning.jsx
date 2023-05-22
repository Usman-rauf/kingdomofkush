import Image from "next/image";
import React, { useState } from "react";
import s1 from "@/assets/images/slider/slider_3.jpg";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
SwiperCore.use([Navigation, Autoplay]);
function FutureGoverning() {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <section className="FutureGoverning">
      <div className="lg:px-5 lg:py-[6rem] dark:bg-[#161519] py-[2rem] grid items-end  justify-items-center grid-cols-1 md:grid-cols-2  ">
        <div className="xl:mr-[25%] 2xl:mr-[18%]">
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
        </div>

        <div className="sm:py-[4rem] md:py-[1rem] px-5 lg:px-[2rem] xl:px-0">
          <div className="content pt-5 lg:pt-0">
            <p className="dark:text-[#ffffffbf] text-base pb-2">
              JUST A DREAM, NOW PART OF THE AWAKENING OF OVER SEVEN MILLION
              PEOPLE
            </p>

            <h4
              className="font-bold  text-[2rem] dark:text-white
              md:text-[2.5rem] md:leading-[2.4rem] lg:leading-[3.8rem] 2xl:pr-[25%]"
            >
              Future Governing Structures & Citizenship
            </h4>
            <div>
              <Accordion open={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="text-base border-b-0 dark:text-white [&>span]:ml-0  justify-end flex-row-reverse"
                >
                  What appeared initially just as
                </AccordionHeader>

                <AccordionBody className="text-base dark:text-[#ffffffbf] 2xl:pr-[30%]">
                  a dream is now part of an awakening for over seven million
                  people who have already applied for citizenship and have
                  galvanized international luminaries from every continent in
                  the world. Future “Citizenship by Investment” programs will
                  also feature financial assistance for applicants.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="text-base text-left dark:text-white border-b-0 [&>span]:ml-0  justify-end flex-row-reverse pb-2"
                >
                  The Kingdom will introduce the establishment
                </AccordionHeader>

                <AccordionBody className="text-base 2xl:pr-[30%] dark:text-[#ffffffbf]">
                  of the Ministry of Peaceful Coexistence and intends to create
                  a better way of life that is free from various humanitarian
                  abuses such as inquisition, holocaust, slavery, or what
                  happened in Tulsa Oklahoma (“Black Wall Street”), so the
                  history does not repeat itself ever again. The core group has
                  thoroughly studied over 195 national constitutions and learned
                  many lessons in order to implement an effective governance for
                  the Kingdom.
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FutureGoverning;
