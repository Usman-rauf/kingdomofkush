import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@material-tailwind/react';

export default function EmailSection() {
  return (
    <section className="EmailSection p-4 py-6 px-5 lg:px-[5rem]  dark:bg-[#161519]">
      <div className=" container mx-auto border-b-[1px] border-[#ccc]  ">
        <div className="bradecamp">
          <Breadcrumbs className=" bg-transparent">
            <Link href={`/`} className=" text-primary font-bold">
              Home
            </Link>
            <Link
              href={`#`}
              className=" cursor-text dark:text-[#ffffffbf]  text-black hover:text-black"
            >
              Contact
            </Link>
          </Breadcrumbs>
        </div>
        <div className="grid pt-5 Lg:pt-[5rem] pb-[2rem] px-[1rem]  justify-items-start xl:gap-x-[20rem] dark:text-[#ffffffbf] gap-x-[5rem] gap-y-[3rem] grid-cols-1 md:grid-cols-2">
          <div>
            <h1>Email</h1>
            <p className="font-bold">info@kingdomofkush.org</p>
            <p className="mt-5">
              Assistance hours: Monday – Friday 8 am to 8 pm EST
            </p>
          </div>
          <div>
            <Image
              src="https://i.postimg.cc/dV7VPv0M/Kush-Location-2-png.webp"
              alt="contact__image"
              height={450}
              width={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
