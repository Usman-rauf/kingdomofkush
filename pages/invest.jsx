import React from 'react'
import Layout from '@/components/Layout'
import { BsPlayFill } from "react-icons/bs";
import bg from "@/assets/images/invest.jpg";
import InvestForm from "@/components/Invest/InvestForm";
export default function invest() {
  const bannerStyle = {
    backgroundImage: `url(${bg.src})`,
    objectFit: "cover",
  }
  return (
    <Layout title={"Invest"}>
      <section className=" grid grid-cols-1 md:grid-cols-2 dark:bg-[#161519]  space-x-10  lg:justify-items-start">
        <div className={`relative  min-h-[30rem]   bg-center w-[100%] `} style={bannerStyle}>
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="https://www.youtube.com/embed/_eO9RyErOMM" target={"_blank"}>
              <div className=" flex justify-center  hover:scale-110 transition-all duration-300 z-[100] items-center  w-[3rem] h-[3rem] md:w-[3.5rem] md:h-[3.5rem] rounded-[100%] hover:border-[1px] border-primary  cursor-pointer">
                <BsPlayFill className="  text-[2rem] z-[10]  " />
                <div className=" absolute  animate-ping h-[2.5rem] w-[2.5rem] rounded-full bg-black"></div>
                <div className=" absolute   h-[100%] w-[100%] rounded-full bg-white"></div>
              </div>
            </a>
          </div>
        </div>
        <div className="sm:py-[4rem]  px-4 2xl:pl-[8rem] md:pl-[4rem] md:pr-8">
          <div className="content mb-[1.5rem] mt-12">
            <h1 className="leading-[3rem] xl:pr-[10rem] dark:text-white font-bold text-[3.5rem] ">
              Invest into Project
            </h1>
            <p className="dark:text-[#ffffffbf] font-base mt-6 xl:pr-[8rem]">
              Through This Form, You Can Express Your Interest To Invest In The
              KUSH KINGDOM. Please Fill In The Form And We Shall Contact You.
            </p>
          </div>
        </div>
      </section>
      <InvestForm />
    </Layout>
  )
}