import React from "react";
import Styles from "../../styles/styles.module.css";
import { BsIntersect } from "react-icons/bs";
import CountUp from "react-countup";

function AboutUsSection() {
  return (
    <section className="AboutUsSection">
      <div className=" grid grid-cols-1 lg:pr-12 md:grid-cols-2 dark:bg-[#161519] ">
        <div
          className={`${Styles.aboutBg} sm:py-10 h-[23rem] md:h-[45rem] relative`}
        >
          <div
            className="  h-[11rem] w-[14rem] lg:w-[17rem]  flex  justify-start   bottom-0 right-0 absolute  bg-[#000]
             "
          >
            <div className="text-primary flex flex-col pl-[2rem] justify-center  ">
              <div className=" flex items-center  space-x-3">
                <BsIntersect className=" text-white text-[1.5rem]" />

                <p className=" text-[2rem] font-bold">
                  <CountUp
                    start={0}
                    end={25}
                    suffix="+"
                    duration={5}
                    delay={1}
                  />
                </p>
              </div>

              <p className="text-primary font-bold">
                Over the past <br />
                22 years
              </p>
            </div>
          </div>
        </div>

        <div className=" lg:py-[4rem] py-[1rem] pl-[1rem] xl:pl-[7rem]  ">
          <div className="content">
            <h4 className=" uppercase text-base dark:text-[#ffffffbf] ">
              About Us
            </h4>
            <h1
              className="font-bold  text-[2rem]
            md:text-[2.5rem] md:leading-[2.4rem] dark:text-white lg:leading-[3.8rem] 2xl:pr-[35%]"
            >
              About creating a safe haven
            </h1>
            <p className=" text-[15px] mt-7 pr-5 lg:pr-[3rem] 2xl:pr-[35%] leading-[1.8rem] dark:text-[#ffffffbf]">
              Over the past 22 years, a small renaissance group started
              envisioning together about creating a safe haven, a new society,
              with a common goal to give a path to all who come in good will
              looking for a better life, not a place to take-away opportunities
              from others. Bir Tawil, located between Egypt and Sudan, is a land
              that has not been claimed by any state. Under international law it
              is known as Terra Nullius, a “no man’s land.” It is a historically
              significant region which formerly has been part of the legendary
              Kingdom of Kush. It is now home to an inspiring resurrectional
              plan to create the next Dubai-like Kingdom of Kush – a social
              development, where opportunity aligns with the need for innovative
              infrastructure, sustainable housing, renewable energy, clean
              water, and localized food security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
