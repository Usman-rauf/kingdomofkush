import Link from 'next/link';
import Styles from '../../styles/styles.module.css';
export default function BannerSection(){
  return (
    <section className="relative h-[20rem] md:h-[31rem] ">
      <div className={`${Styles.ContactBg} `}>
        <div className="text-white p-10 absolute bottom-0 left-0 right-0 container mx-auto">
          <p className=" text-[60px] font-bold">Contact</p>
          <p className="mt-5 font-bold">LET'S SHARE WORDS TOGETHER.</p>
          <Link href={`#contact`}>
            <button className="bg-black mt-5 text-[#cb9833] py-3 px-4 rounded-md font-bold dark:bg-white dark:text-black">
              Send Us and Email
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
