import React from 'react';
import { Button } from '@material-tailwind/react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Link from 'next/link';
import styles from '../../styles/styles.module.css';
function GetInTouch() {
  return (
    <section
      className=" function GetInTouch
        "
    >
      <div
        className={`${styles.GetBg} 
             min-h-[28rem] xl:min-h-[30rem] flex items-center justify-center relative  p-4 `}
      >
        <div className="overlay absolute w-[100%] h-[100%] bg-[#00000030] "></div>

        <div className="container grid grid-cols-1   z-20 px-[1rem] sm:px-[5rem] md:grid-cols-2  justify-items-stretch space-y-5">
          <div>
            <p className="text-base text-white font-bold">WORK INQUIRIES</p>
            <h1 className=" text-[2rem] leading-tight xl:text-[3rem]  text-white font-bold">
              Questions? <br />
              Get in touch.{' '}
            </h1>
            <Button
              className="group bg-black rounded-sm mt-16 shadow-none capitalize text-base hover:shadow-none w-[10rem] flex justify-center items-center  space-x-3 dark:bg-white dark:text-black  font-bold text-primary
            "
            >
              <Link href={'/contact'}>Contact Us</Link>
              <HiOutlineArrowNarrowRight className="text-[1.3rem] text-primary dark:text-black group-hover:translate-x-2 duration-300" />
            </Button>
          </div>

          <div className=" flex justify-start sm:justify-end">
            <div>
              <div className="mb-[4rem]">
                <p className="text-white font-bold mb-6">Kingdom of Kush</p>
                <p className="text-white">info@kingdomofkush.org</p>
              </div>
              <div>
                <p className="text-white font-bold mb-1">Kingdom of Kush LLC</p>
                <p className="text-white leading-relaxed w-[15rem]">
                  One World Trade Center Floor 85 New York, NY 10007 USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
