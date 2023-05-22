import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import img from '@/assets/images/donation/questionbg.jpg';
const DonationService = () => {
  const styling = {
    backgroundImage: `url('${img.src}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  };
  return (
    <div style={styling} className="lg:py-10">
      <div className="container bg-softGray lg:bg-transparent">
        <div className="px-8 lg:px-28 py-10 leading-[3rem]">
          <h5 className="uppercase text-softBlack">our services</h5>
          <h1 className="text-[3rem] font-bold text-black lg:text-primary p-0 m-0">
            Questions?
          </h1>
          <h1 className="text-[3rem] font-bold text-softBlack p-0 m-0">
            Get in touch.
          </h1>

          <Link href={`/contact`}>
            <button className="group px-6 bg-black py-1  mt-10 rounded text-primary font-bold flex items-center gap-2 dark:bg-white dark:text-black">
              <span>Send an Email</span>
              <FaArrowRight className="group-hover:translate-x-3 duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationService;
