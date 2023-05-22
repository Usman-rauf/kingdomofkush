import React from 'react';
import Image from 'next/image';
import styles from '../../styles/styles.module.css';

const Ourservice = () => {
  return (
    <section className={`${styles.questionTouchBg} `}>
      <div className="container px-[2rem] py-10 lg:py-[180px] mx-auto max-w-[75rem] 2xl:max-w-[85rem]">
        <div className="text-[#010A44BF] uppercase font-medium">
          our service
        </div>
        <h2 className="text-[#cb9833] text-[47px] font-semibold mb-5">
          Questions?
          <br />
          <span className="text-[#010A44]">Get in touch</span>
        </h2>
        <button className="text-[#CB9833] bg-[#161519] dark:bg-white dark:text-black py-3 rounded-md px-3 font-semibold">
          Send an Email
        </button>
      </div>
    </section>
  );
};

export default Ourservice;
