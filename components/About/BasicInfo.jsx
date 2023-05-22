import contactInfo from '@/assets/images/about/about-1-copy-768x593.jpg';
import styles from '@/styles/styles.module.css';
import { BsIntersect } from 'react-icons/bs';
import CountUp from 'react-countup';
import Image from 'next/image';
import React from 'react';
export default function BasicInfo({ isOdd, data }) {
  const { banner, title, count, info } = data;
  const bannerSection = (
    <>
      <div className={` ${styles.basicInfoBg}  min-h-[25rem] relative  `}>
        {count && (
          <div
            className={
              isOdd
                ? `h-[11rem] w-[17rem] md:w-[12rem] lg:h-[14rem] lg:w-[14rem] flex justify-start xl:w-[19rem] bottom-0 left-0 md:right-0 md:left-auto absolute bg-[#000]`
                : `h-[11rem] w-[17rem] md:w-[12rem] lg:h-[14rem] lg:w-[14rem] flex justify-start xl:w-[19rem] bottom-0 right-0 md:left-0 md:right-auto absolute bg-[#000]`
            }
          >
            <div className=" text-base text-primary flex flex-col pl-[2rem] justify-center  ">
              <div className=" flex items-center  space-x-3">
                <BsIntersect className=" text-white text-[1.5rem]" />

                <p className=" text-[2rem] font-bold">
                  <CountUp start={0} end={count} duration={5} delay={2} />+
                </p>
              </div>

              <p className=" text-base text-primary font-bold">
                Area <br />
                km2
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
  const contentSection = (
    <>
      <div className="py-[1rem] sm:py-[4rem]  px-4 2xl:pl-[8rem] md:pl-[4rem] md:pr-8">
        <div className="content mb-[1.5rem] mt-4">
          <h4 className="dark:text-[#ffffffbf] text-base  uppercase">
            About Us
          </h4>
          <h4 className=" dark:text-white  font-bold capitalize text-[2rem]">
            {title}
          </h4>
        </div>
        <Image src={contactInfo} alt="About Us" />
        {/* {info.map((item, index) => (
          <div key={index} className="flex justify-start items-center my-8">
            <div className="w-40 h-12 flex justify-center items-center bg-black text-white dark:bg-[#EAE9FB] dark:text-black">
              {item.key}
            </div>
            <div className="w-80 h-12 pl-3 flex items-center bg-[#EAE9FB] dark:bg-[#b8b6b8] dark:text-white">
              {item.value}
            </div>
          </div>
        ))} */}
      </div>
    </>
  );
  return (
    <div>
      <div className="dark:bg-[#161519] grid grid-cols-1 md:grid-cols-2   justify-items-center lg:justify-items-start  items-center ">
        {isOdd ? (
          <>
            {bannerSection}
            {contentSection}
          </>
        ) : (
          <>
            {contentSection}
            {bannerSection}
          </>
        )}
      </div>
    </div>
  );
}
