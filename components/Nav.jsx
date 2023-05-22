import React, { useState, useEffect } from 'react';
import Style from '@/styles/styles.module.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { FaFacebookF } from 'react-icons/fa';
import logo from '@/assets/images/logo.png';
import { RxCross2 } from 'react-icons/rx';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import {
  Menu,
  Button,
  MenuList,
  MenuItem,
  Typography,
  MenuHandler,
} from '@material-tailwind/react';
import {
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram
} from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import Translator from '@/library/Translator';
export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [toogle, setToggle] = useState(false);
  const [clientWidth, setClientWidth] = useState(null);
  const route = useRouter();
  if (typeof document !== 'undefined') {
    useEffect(() => {
      const Width = document.documentElement.clientWidth;
      setClientWidth(Width);
      document.addEventListener('scroll', () => {
        if (window.scrollY >= 100) {
          setScroll(true);
        } else if (window.screenY === 0) {
          setScroll(false);
        }
      });
    }, [document.documentElement.clientWidth]);
  }

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h4"
        className={`${(!scroll && route.pathname === '/') ||
          (!scroll && route.pathname === '/contact')
          ? 'text-white'
          : 'text-black  dark:text-[#ffffffbf]'
          }  p-1 font-normal`}
      >
        <Link href="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="white"
        className={`${(!scroll && route.pathname === '/') || (!scroll && route.pathname === '/contact') ? 'text-white' : 'text-black  dark:text-[#ffffffbf]'} p-1 font-normal`}>
        <Link href={'/about'} className="flex items-center">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="white"
        className={`${(!scroll && route.pathname === '/') ||
          (!scroll && route.pathname === '/contact')
          ? 'text-white'
          : 'text-black  dark:text-[#ffffffbf]'
          }  p-1 font-normal`}
      >
        <Menu>
          <MenuHandler>
            <Button
              ripple={false}
              className={`
              ${(!scroll && route.pathname === '/') ||
                  (!scroll && route.pathname === '/contact')
                  ? 'text-white'
                  : 'text-black  dark:text-[#ffffffbf]'
                }
             
              capitalize  px-0 font-normal hover:shadow-none shadow-none text-[1rem] bg-transparent flex  items-center`}
            >
              Get Involved
              <IoIosArrowDown
                className={`text-[1rem]  ${(!scroll && route.pathname === '/') ||
                  (!scroll && route.pathname === '/contact')
                  ? 'text-white'
                  : 'text-black  dark:text-[#ffffffbf]'
                  }`}
              />
            </Button>
          </MenuHandler>
          <MenuList>
            <Link href={'/membership'} className={'[&>button]:outline-0 '}>
              <MenuItem className="  text-[.9rem]  text-primary hover:text-primary active:text-primary overflow-hidden">
                Membership
              </MenuItem>
            </Link>

            <Link href={'/volunteer'} className={'[&>button]:outline-0 '}>
              <MenuItem className="  outline-none text-[.9rem]  text-primary hover:text-primary active:text-primary">
                Volunteer
              </MenuItem>
            </Link>
            <Link href={'/vendor'} className={'[&>button]:outline-0 '}>
              <MenuItem className="  text-[.9rem]  text-primary hover:text-primary active:text-primary">
                Vendor
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="white"
        className={`${(!scroll && route.pathname === '/') ||
          (!scroll && route.pathname === '/contact')
          ? 'text-white'
          : 'text-black  dark:text-[#ffffffbf]'
          }  p-1 font-normal`}
      >
        <Link href={`/petition`} className="flex items-center">
          Petition
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="white"
        className={`${(!scroll && route.pathname === '/') ||
          (!scroll && route.pathname === '/contact')
          ? 'text-white'
          : 'text-black  dark:text-[#ffffffbf]'
          }  p-1 font-normal`}
      >
        <Link href={`/project`} className="flex items-center">
          Projects
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="white"
        className={`${(!scroll && route.pathname === '/') ||
          (!scroll && route.pathname === '/contact')
          ? 'text-white'
          : 'text-black  dark:text-[#ffffffbf]'
          }  p-1 font-normal`}
      >
        <Link href={`/invest`} className="flex items-center">
          Invest
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="white"
        className={`${(!scroll && route.pathname === '/') ||
          (!scroll && route.pathname === '/contact')
          ? 'text-white'
          : 'text-black  dark:text-[#ffffffbf]'
          }  p-1 font-normal`}
      >
        <Link href={`/donation`} className="flex items-center">
          Donation
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="white"
        className={`${(!scroll && route.pathname === '/') ||
          (!scroll && route.pathname === '/contact')
          ? 'text-white'
          : 'text-black  dark:text-[#ffffffbf]'
          }  p-1 font-normal`}
      >
        <Link href={`/contact`} className="flex items-center">
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      {route.pathname === '/' || route.pathname === '/contact' ? (
        <div className={`${scroll ? 'bg-white dark:bg-[#161519]  dark:text-[#ffffffbf] fixed' : 'bg-[#00000050] absolute top-0 left-0'} w-[100%] lg:pr-5 transition-all duration-400 z-[99]`}>
          <div className={`container  ${scroll ? 'h-[5rem]' : 'h-[5rem] lg:h-[7rem]'} shadow-none max-w-[96%] px-2 lg:px-0 mx-auto flex items-center justify-between`}>
            <div className="logo__box flex items-center space-x-6">
              <div>
                <span className="rounded-full p-2" onClick={() => { setOpenNav(true); }}>
                  <CgMenuLeftAlt className={` border-solid hover:border-[1px] border-primary text-[3.2rem] cursor-pointer bg-[#8484842c] rounded-full p-2 transition-all ${(!scroll && route.pathname === '/') || (!scroll && route.pathname === '/contact') ? 'text-white' : 'text-black dark:text-white'}`} />
                </span>
              </div>
              <Link href={'/'}>
                <Image src={logo} width={32} height={38} alt="logo" />
              </Link>
            </div>
            <div className="hidden lg:block">{navList}</div>
            <div>
              <Translator/>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${scroll ? 'sticky' : 'sticky'} w-[100%] lg:pr-5 bg-white dark:bg-[#161519] top-0 left-0  transition-all duration-400  z-[99] `}>
          <div className={`${scroll ? 'h-[5rem]' : 'h-[5rem]'} ${scroll ? 'h-[5rem]' : 'h-[7rem]'} container shadow-none max-w-[96%]  mx-auto flex items-center justify-between`}>
            <div className=" logo__box flex items-center space-x-6">
              <div>
                <span className="rounded-full p-2" onClick={() => { setOpenNav(true); }}>
                  <CgMenuLeftAlt className={` border-solid hover:border-[1px] border-primary text-[3.2rem] cursor-pointer bg-[#8484842c] rounded-full p-2 transition-all ${scroll || route.pathname != '/' ? 'text-black dark:text-white' : 'text-white'}`} />
                </span>
              </div>
              <Link href={'/'}>
                <Image src={logo} width={50} height={50} alt="logo" />
              </Link>
            </div>
            <div className="hidden lg:block ">{navList}</div>
            <div>
              <Translator />
            </div>
          </div>
        </div>
      )}




      {openNav && clientWidth > 767 ? (
        <div className={`mobile__menu  w-[100%] z-[9999] top-0 left-0  fixed h-[100vh]  bg-[#131214] opacity-96 ${openNav ? 'block' : 'hidden'} transition-all duration-500`}>
          <div className="menu_wrapper pl-20 p-6  text-white">
            <ul className="  capitalize  flex flex-col  ml-5">
              <li className=" font-bold lg:text-[2rem]  -ml-[1rem] text-[1rem] duration-300">
                <RxCross2 className="text-[1.5rem] cursor-pointer" onClick={() => setOpenNav(false)} />
              </li>
              <li className=" font-bold lg:text-[1.8rem] text-[2rem] text-[#CB9833] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
                <Link href={'/'}> Home</Link>
              </li>
              <li className=" font-bold lg:text-[1.8rem] text-[2rem] hover:translate-x-4  hover:opacity-70 transition-all  duration-300">
                <Link href={'/about'}>About Us</Link>
              </li>
              <li className={`font-bold lg:text-[1.8rem] text-[2rem]  hover:translate-x-4  hover:opacity-70 transition-all ${Style.child_nav} duration-300 relative text-[#CB9833] flex items-center`}>
                Get <br /> Involved{' '}
                <AiOutlinePlus className=" ml-[1rem] text-white text-[1.2rem]" />
                <ul className=" ml-[10rem] translate-y-[6rem]   opacity-0 transition-all  delay-[80ms]  text-[1rem] lg:text-[2rem] absolute top-0 lg:left-[6%] left-[10%] text-white">
                  <li className="hover:translate-1.8-4   text-[2rem] transition-all duration-300">
                    <Link href={'/membership'}>Membership</Link>
                  </li>
                  <li className="hover:translate1.8x-4  text-[2rem] transition-all duration-300">
                    <Link href={'/volunteer'}>Volunteer</Link>
                  </li>
                  <li className="hover:translate-1.8-4   text-[2rem] transition-all duration-300">
                    <Link href={'/vendor'}>Vendor</Link>
                  </li>
                </ul>
              </li>
              <li className=" font-bold lg:text-[1.8rem] text-[2rem] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
                <Link href={'/petition'}>Petition</Link>
              </li>
              <li className=" font-bold lg:text-[1.8rem] text-[2rem] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
                <Link href={'/project'}>Projects</Link>
              </li>
              <li className=" font-bold lg:text-[1.8rem] text-[2rem] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
                <Link href={'/invest'}>Invest</Link>
              </li>
              <li className=" font-bold lg:text-[1.8rem] text-[2rem] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
                <Link href={'/donation'}>Donation</Link>
              </li>
              <li className=" font-bold lg:text-[1.8rem] text-[2rem] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
                <Link href={'contact'}>Contact</Link>
              </li>
              <li className=" w-[80%] md:w-[30%] font-bold lg:text-[1.8rem] text-[2rem] transition-all duration-300">
                <Translator />
              </li>
            </ul>

            <div className=" ml-6 menu__footer flex  items-center ">
              <div className="mt-4">
                <h5 className=" font-bold text-base  text-white">
                  Get In Touch
                </h5>
                <p className=" text-white w-[50%] text-base">
                  One World Trade Center Floor 85, New York, NY 10007
                  info@kingdomofkush.org
                </p>
              </div>
              <div className="social__logo flex  mt-4  -ml-[15rem]  space-x-8 justify-between items-center">
                <Link href={'https://www.facebook.com/royalkingdomofkush'}>
                  <FaFacebookF className=" text-[1.2rem] cursor-pointer" />
                </Link>
                <Link href={'https://twitter.com/eKingdomofKush'}>
                  <AiOutlineTwitter className=" text-[1.2rem] cursor-pointer" />
                </Link>
                <Link href={'https://www.linkedin.com/company/kingdomofkush/'}>
                  <AiFillLinkedin className=" text-[1.2rem] cursor-pointer" />
                </Link>
                <Link href={'https://www.youtube.com/channel/UCrl79VUm6Mklxwu9pG5JUAA'}>
                  <AiFillYoutube className=" text-[1.2rem] cursor-pointer" />
                </Link>
                <Link href={'https://www.instagram.com/royalkingdomofkush/'}>
                  <AiOutlineInstagram className=" text-[1.2rem] cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}

      {/* // mobile menu for small device */}
      {openNav && clientWidth < 767 ? (
        <div
          className={`mobile__menu   w-[100%] z-[9999]  top-0 left-0 fixed h-[100vh]  bg-white opacity-96   
   transition-all    duration-500  `}
        >
          <div className="menu_wrapper p-6  text-black">
            <ul className="  capitalize  flex flex-col  space-y-2 mt-6 ml-5">
              <li
                className=" font-bold    text-[2.5rem] duration-300"
                onClick={() => setOpenNav(false)}
              >
                <RxCross2 className=" font-bold ml-2 text-[1.1rem] cursor-pointer" />
              </li>
              <li className=" font-bold  text-primary  text-[1.3rem]    hover:opacity-70 transition-all duration-300">
                <Link href={'/'}> Home</Link>
              </li>
              <li className=" font-bold  text-[1.3rem]   hover:opacity-70 transition-all duration-300">
                <Link href={'/about'}>About Us</Link>
              </li>
              <li
                className={`font-bold  text-[1.3rem]    hover:opacity-70 transition-all duration-300 relative  flex text-primary  items-center      membership `}
                onClick={() => setToggle(!toogle)}>
                Get Involved{' '}
              </li>
              {toogle ? (
                <div className={` space-y-2 ml-4 `}>
                  <li className="   font-bold text-[1.3rem] transition-all duration-300">
                    <Link href={'/membership'}>Membership</Link>
                  </li>

                  <li className="  font-bold text-[1.3rem] transition-all duration-300">
                    <Link href={'/volunteer'}>Volunteer</Link>
                  </li>

                  <li className="  font-bold  text-[1.3rem] transition-all duration-300">
                    <Link href={'/vendor'}>Vendor</Link>
                  </li>
                </div>
              ) : (
                ''
              )}
              <li className=" font-bold  text-[1.3rem]   hover:opacity-70 transition-all duration-300">
                <Link href={'/petition'}>Petition</Link>
              </li>
              <li className=" font-bold  text-[1.3rem]   hover:opacity-70 transition-all duration-300">
                <Link href={'/project'}>Projects</Link>
              </li>
              <li className=" font-bold  text-[1.3rem]   hover:opacity-70 transition-all duration-300">
                <Link href={'/invest'}>Invest</Link>
              </li>
              <li className=" font-bold  text-[1.3rem]   hover:opacity-70 transition-all duration-300">
                <Link href={'/donation'}>Donation</Link>
              </li>
              <li className=" font-bold  text-[1.3rem]   hover:opacity-70 transition-all duration-300">
                <Link href={'contact'}>Contact</Link>
              </li>
            </ul>
            <div className=" ml-6 menu__footer flex  justify-start items-center space-x-6">
              <p className=" text-base mt-4">
                &#169; 2023{' '}
                <span className="text-primary">Kingdom of Kush.</span> All
                rights reserved
              </p>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
