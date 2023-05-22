import React from "react";
import Link from 'next/link';
import Layout from "@/components/Layout";
import { loadStripe } from '@stripe/stripe-js';
import styles from '@/styles/styles.module.css';
import { Button } from '@material-tailwind/react';
import { Elements } from '@stripe/react-stripe-js';
import VendorForm from '@/components/Vendor/VendorContact';
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function vendor() {
  return (
    <Layout title={"Vendor"}>
      <section className="dark:bg-[#161519]  dark:text-[#ffffffbf]">
        <div className=" grid grid-cols-1 md:grid-cols-2 justify-items-center lg:justify-items-start  items-center ">
          <div className={` ${styles.vendorBg}  min-h-[30rem]`}></div>
          <div className="pt-8 lg:pt-0 lg:py-[4rem]  px-4 2xl:pl-[8rem] md:pl-[7rem] md:pr-8">
            <div className="content mb-[1.5rem] mt-4">
              <h1 className="leading-[3rem] dark:text-white  xl:hidden font-bold  text-[2.8rem] ">
                Volunteer Registration
              </h1>
              <h1 className="leading-[3rem] dark:text-white xl:leading-[4.5rem] hidden xl:block font-bold  text-[2.8rem] xl:text-[4rem]">
                Vendor Registration
              </h1>
              <p className=" font-base mt-8 lg:mt-12">
                Feel a new experience in an incredible project
              </p>
              <p className=" font-base font-bold">Kingdom of Kush</p>
              <Button className=" text-primary rounded-md shadow-none hover:shadow-none bg-black dark:bg-white dark:text-black normal-case mt-8 lg:mt-16">
                <Link href="#becomeaVendor">Become a Vendor</Link>
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Elements stripe={stripePromise}>
            <VendorForm id="becomeaVendor"/>
          </Elements>
        </div>
      </section>
    </Layout>
  );
}
