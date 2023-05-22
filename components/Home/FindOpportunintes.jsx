import React, { useState } from "react";
import Styles from "../../styles/styles.module.css";
import { BsPlayFill } from "react-icons/bs";
import { BsIntersect } from "react-icons/bs";
import CountUp from "react-countup";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function FindOpportunintes() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section className="FindOpportunintes">
      <div className=" flex flex-col dark:bg-[#161519] sm:flex-row lg:px-5 justify-between items-center lg:pl-16 lg:gap-[6rem]">
        <div className=" w-full sm:w-2/5">
          <div className="content px-5 lg:px-0 lg:pt-[5rem] ">
            <div className=" relative flex  mb-6 space-x-4 items-center ">
              <a href="https://www.youtube.com/embed/_eO9RyErOMM">
                <div
                  className=" flex justify-center  hover:scale-110 transition-all duration-300 z-[20] items-center  w-[3rem] h-[3rem] md:w-[3.5rem] md:h-[3.5rem]
            rounded-[100%] hover:border-[1px] border-primary  cursor-pointer"
                >
                  <BsPlayFill className="  text-[2rem] z-[10] text-white  " />
                  <div className=" absolute  animate-ping h-[2rem] w-[2rem] rounded-full bg-black dark:bg-[#ffffffbf]"></div>

                  <div className=" absolute h-[3rem] w-[3rem]  rounded-full bg-black"></div>
                </div>
              </a>

              <p className="dark:text-[#ffffffbf] font-bold">Play Video</p>
            </div>

            <h1 className=" text-[2rem] dark:text-white xl:text-[3rem] mb-6 font-bold  leading-tight">
              Find The Opportunities And a Better Future in Africa.
            </h1>
            <Accordion open={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="text-base text-left dark:text-white border-b-0 [&>span]:ml-0  justify-end flex-row-reverse text-black"
              >
                There will be no need for African people
              </AccordionHeader>

              <AccordionBody className="text-base dark:text-[#ffffffbf]">
                to leave the continent searching for a better future. The
                continent has more than sufficient resources to explore and
                develop, thus creating endless opportunities for a better life
                on the continent itself.{" "}
                <b className="font-bold">
                  It’s all about adding value to endless available resources on
                  the continent itself, not simply exporting the resources and
                  with this all the jobs and related opportunities to other
                  countries .
                </b>{" "}
                The future is now. The new generation must take charge of their
                own destiny because it can and we believe will do so, as this is
                the only way to make Africa what it can be, not what it has
                been.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="text-base border-b-0 [&>span]:ml-0  dark:text-white  justify-end flex-row-reverse pb-2 text-black text-left"
              >
                Africa does not need aid or to borrow money that others
                generated
              </AccordionHeader>

              <AccordionBody className="text-base dark:text-[#ffffffbf]">
                by taking resources from Africa. Africa and its people have
                everything needed to lead and support the world. Let’s make this
                happen together now! Join the movement of this growing Kingdom
                which has attracted from over 33 countries impact driven
                volunteers, talented professionals, service providers and
                strategic partners to collaborate, share a common vision, and
                explore the possibilities involved with building a sustainable
                future for generations to live, work, and appreciate life.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="text-base border-b-0 [&>span]:ml-0  dark:text-white justify-end flex-row-reverse pb-2 text-black text-left"
              >
                Our diverse multi-generational community culture celebrates
              </AccordionHeader>

              <AccordionBody className="text-base dark:text-[#ffffffbf]">
                a lifelong learning approach to sustainable living with access
                to trade skills training, internships, and mentorship programs
                to support career opportunities. Building a viable and
                innovative labor force will involve an integrative approach to
                pairing skills training, and industrial development with
                operating entities in the region.
              </AccordionBody>
            </Accordion>
          </div>
        </div>

        <div
          className={`${Styles.findBg} w-full sm:w-3/5  h-[25rem] md:h-[55rem] xl:h-[45rem] relative mb-5 lg:mb-0`}
        >
          <div className=" absolute left-5 lg:left-[5rem] -bottom-10 flex  sm:space-x-10">
            <div
              className="  xl:w-[17rem] xl:h-[13rem] h-[11rem] sm:w-[10rem] w-full  flex  justify-start    bg-[#000]
             "
            >
              <div className="text-primary flex flex-col pl-[2rem] justify-center  ">
                <div className=" flex items-center  space-x-3">
                  <BsIntersect className=" text-white text-[1.5rem]" />

                  <p className=" text-[2rem] font-bold">
                    <CountUp
                      start={0}
                      end={30}
                      suffix="+"
                      duration={5}
                      delay={2}
                    />
                  </p>
                </div>

                <p className="text-primary font-bold">
                  develop over 30 million
                  <br />
                  hectares of land
                </p>
              </div>
            </div>
            <div
              className="  xl:w-[17rem] xl:h-[13rem] h-[11rem] sm:w-[10rem] w-full  flex  justify-start    bg-[#1D2226]
             "
            >
              <div className="text-primary flex flex-col pl-[2rem] justify-center  ">
                <div className=" flex items-center  space-x-3">
                  <BsIntersect className=" text-white text-[1.5rem]" />

                  <p className=" text-[2rem] font-bold">
                    {" "}
                    <CountUp
                      start={0}
                      end={25}
                      suffix="+"
                      duration={5}
                      delay={2}
                    />
                  </p>
                </div>

                <p className="text-primary font-bold">
                  projects that span
                  <br />
                  over 25 countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindOpportunintes;
