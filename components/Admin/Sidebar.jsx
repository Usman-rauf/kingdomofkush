import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import logo from '@/assets/images/logo.png';
import { IoIosPeople } from 'react-icons/io';
import { CiMoneyBill } from 'react-icons/ci';
import { GiTakeMyMoney } from 'react-icons/gi';
import { SiOpenproject } from 'react-icons/si';
import { AiOutlineContacts } from 'react-icons/ai';
import { AppContext } from '@/context/AppProvider';
import { MdOutlineStore, MdOutlineNoteAlt, MdPeople } from 'react-icons/md';

export default function Sidebar() {
  const router = useRouter();
  const { openSidebar } = useContext(AppContext);
  const sidebarList = [
    {
      name: 'Dashboard',
      link: '/dashboard',
      icon: SiOpenproject,
    },
    {
      name: 'Members',
      icon: IoIosPeople,
      link: '/dashboard/member',
    },
    {
      name: 'Vendors',
      icon: MdOutlineStore,
      link: '/dashboard/vendor',
    },
    {
      name: 'Petitions',
      icon: MdOutlineNoteAlt,
      link: '/dashboard/petition',
    },
    {
      icon: MdPeople,
      name: 'Volunteers',
      link: '/dashboard/volunteer',
    },
    {
      name: 'Invests',
      icon: CiMoneyBill,
      link: '/dashboard/invest',
    },
    {
      name: 'Donations',
      icon: GiTakeMyMoney,
      link: '/dashboard/donation',
    },
    {
      name: 'Contacts',
      icon: AiOutlineContacts,
      link: '/dashboard/contact',
    },
    {
      name: 'Project',
      icon: SiOpenproject,
      link: '/dashboard/project',
    },
    {
      name: 'Profile',
      icon: IoIosPeople,
      link: '/dashboard/profile',
    }
  ];
  return (
    <section className={`leftMenu transition-all duration-300 fixed top-0 bottom-0 lg:sticky z-[1000] h-[100vh]  w-[15rem] overflow-y-scroll bg-[#F8F9FA] dark:bg-[#333] ${openSidebar ? 'translate-x-0' : ' -translate-x-[100rem] lg:translate-x-0'}`}>
      <div className="leftMenu__header relative">
        <div className="flex flex-col justify-center items-center py-4">
          <Link href={`/dashboard`} className="flex flex-col items-center">
            <Image src={logo} height={10} width={70} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="leftMenu__content  transition-all duration-500 my-4 flex items-center justify-center flex-col">
        {sidebarList.map((item, index) => (
          <Link key={index} href={item.link}
            className={`${router.pathname === item.link ? `rounded-lg bg-white shadow-md text-[#000] dark:text-black` : ''} px-4 py-3 w-[90%] flex justify-left gap-3 items-center text-base font-normal text-[#394B6B] dark:text-[#ffff] capitalize`}>
            <div className={`${router.pathname === item.link ? `bg-gradient-to-r from-orange-800 to-orange-500 text-white` : ``} p-[5px] rounded-lg shadow-md`}>
              <item.icon className="text-[1.3rem] text-inherit" />
            </div>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
