import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { Button } from '@material-tailwind/react';
import {
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram
} from 'react-icons/ai';
export default function Footer() {
  return (
    <footer className="bg-[#F9F8FA] dark:bg-[#1E1C22]">
      <div className="container mx-auto max-w-[75rem] 2xl:max-w-[85rem]">
        <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 py-8 lg:py-[5rem]  gap-x-[3.5rem]   border-softGray   px-4 space-y-10 border-spacing-2 border-b-[1px]   ">
          <div className="m-auto self-center">
            <Image src={Logo} width={100} height={100} alt="logo"/>
          </div>
          <div className=" flex md:flex-col dark:text-[#ffffffbf]  flex-wrap  ">
            <p className=" text-base font-bold">Kingdom of Kush LLC</p>
            <p className=" text-base">One World Trade Center Floor 85</p>
            <p className=" text-base">New York, NY 10007</p>
            <p className=" text-base">USA</p>
          </div>
          <div className=" flex md:flex-col flex-wrap">
            <p className="dark:text-[#ffffffbf] text-base">
              Interested in working with us?
            </p>
            <p className=" text-base text-primary hover:underline font-bold">
              info@kingdomofkush.org?
            </p>
          </div>
          <div>
            <Link href={'/donation'}>
              <Button className=" bg-black rounded-sm  shadow-none capitalize text-base hover:shadow-none w-[100%] font-normal text-primary dark:text-black dark:bg-[#fff] dark:hover:bg-[#ffffffbf] dark:hover:text-white">
                Donation
              </Button>
            </Link>
          </div>
        </div>
        <div className="footer__bottom  flex flex-col items-center lg:flex-row justify-between  text-left  py-6 px-4">
          <p className="dark:text-[#ffffffbf] py-3 lg:py-0">
            © 2023 <span className=" text-primary">Kingdom of Kush.</span> All
            rights reserved
          </p>
          <div className="social__logo flex  space-x-2 lg:space-x-5 justify-between items-center">
            <div className="w-[45px] h-[45px] bg-[#4267B2] text-white text-center rounded-full">
              <Link href={'https://www.facebook.com/royalkingdomofkush'}>
                <FaFacebookF className=" text-[1.2rem] cursor-pointer mx-auto mt-3" />
              </Link>
            </div>
            <div className="w-[45px] h-[45px] bg-[#1DA1F2] text-white text-center rounded-full">
              <Link href={'https://twitter.com/eKingdomofKush'}>
                <AiOutlineTwitter className=" text-[1.2rem] cursor-pointer  mx-auto mt-3" />
              </Link>
            </div>
            <div className="w-[45px] h-[45px] bg-[#0077b5] text-white text-center rounded-full">
              <Link href={'https://www.linkedin.com/company/kingdomofkush/'}>
                <AiFillLinkedin className=" text-[1.2rem] cursor-pointer  mx-auto mt-3" />
              </Link>
            </div>
            <div className="w-[45px] h-[45px] bg-[#c4302b] text-white text-center rounded-full">
              <Link
                href={
                  'https://www.youtube.com/channel/UCrl79VUm6Mklxwu9pG5JUAA'
                }
              >
                <AiFillYoutube className=" text-[1.2rem] cursor-pointer  mx-auto mt-3" />
              </Link>
            </div>
            <div className="w-[45px] h-[45px] bg-[#3f729b] text-white text-center rounded-full">
              <Link href={'https://www.instagram.com/royalkingdomofkush/'}>
                <AiOutlineInstagram className=" text-[1.2rem] cursor-pointer  mx-auto mt-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
