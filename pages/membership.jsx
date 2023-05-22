import React, { useState } from "react";
import Layout from "@/components/Layout";
import { useRouter } from 'next/navigation';
import { loadStripe } from "@stripe/stripe-js";
import styles from "@/styles/styles.module.css";
import { Elements } from "@stripe/react-stripe-js";
import MemberLogin from "@/components/Membership/MemberLogin";
import MembershipForm from "@/components/Membership/MembershipForm";
// connect stripe
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function membership() {
  const [isMember, setIsMember] = useState("yes");
  const [showMember, setShowMember] = useState(false);
  return (
    <Layout title={"Membership application kingdomof"}>
      <section className="dark:bg-[#161519]">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:justify-items-start  items-center bg-white dark:bg-[#161519] dark:text-[#ffffffbf] lg:pb-[70px] ">
            <div className={` ${styles.memberBg} min-h-[30rem] `}></div>
            <div className="pt-8 lg:py-[4rem]  px-4 2xl:pl-[8rem] md:pl-[6rem] md:pr-8">
              <div className="content mb-[1.5rem] mt-4 lg:p-5">
                <h1 className="leading-[3rem] dark:text-white xl:hidden font-bold  text-[2.8rem] ">
                  Membership application.
                </h1>
                <h1 className=" dark:text-white leading-[1]  hidden xl:block font-bold text-[4rem] font-sans">
                  Membership <br /> application.
                </h1>
                <p className="font-base mt-12">
                  Feel a new experience in an incredible project
                </p>
                <p className="font-base font-bold">
                  Kingdom of Kush
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* application form */}
        <div className="p-5 lg:p-[50px] mb-[20px] dark:bg-[#161519] bg-white lg:mx-[100px] shadow-2xl">
          <div className="flex flex-col justify-between gap-8 items-center pb-10">
            <h1 className=" text-[1.2rem] lg:text-[2rem] xl:text-[2.5rem]  leading-6 uppercase text-[#CB9833]">
              APPLICANT INFORMATION FORM
            </h1>
            <div className=" dark:text-[#ffffffbf]">
              <h2 className="font-bold">
                <strong>Please provide all responses in English.</strong>
              </h2>
              <p>Required fields are indicated by an asterisk *</p>
            </div>
          </div>
          <div className="relative flex lg:mx-[50px] dark:text-[#ffffffbf] border-b-4  justify-around">
            <div className="flex flex-col justify-center items-center">
              <p className="pb-3">Checkout</p>
              <span className="w-5 h-5 rounded-full bg-black absolute -bottom-3"></span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="pb-3">Finish</p>
              <span className={`w-5 h-5 rounded-full ${showMember ? "bg-black" : "bg-black/20"} absolute -bottom-3`}></span>
            </div>
          </div>
          {!showMember && (
            <div className=" lg:mx-[50px]">
              <fieldset className="p-4">
                <div>
                  <legend className="text-sm dark:text-[#ffffffbf] after:content-['*'] after:text-red">
                    Are You a new member?
                  </legend>
                </div>
                <div onChange={(e) => setIsMember(e.target.value)}>
                  <div className="my-[1rem] block min-h-[1.5rem]">
                    <input
                      id="yes"
                      value="yes"
                      type="radio"
                      name="member"
                      checked={isMember == "yes"}
                      onChange={e => isMember == "yes"}
                      className="relative float-left mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]" />
                    <label className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="yes">
                      Yes
                    </label>
                  </div>
                  <div className="my-[1rem] block min-h-[1.5rem]">
                    <input
                      id="no"
                      value="no"
                      type="radio"
                      name="member"
                      checked={isMember == "no"}
                      onChange={e => isMember == "no"}
                      className="relative float-left mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]" />
                    <label className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="no">
                      No
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className="flex justify-end mt-6">
                <button onClick={() => {setShowMember(true);}} className="btn-submit xl:w-[30%] w-[50%]">
                  Next
                </button>
              </div>
            </div>
          )}
          {showMember && isMember === "yes" && (
            <Elements stripe={stripePromise}>
              <MembershipForm setShowMember={setShowMember} />
            </Elements>
          )}
          {showMember && isMember === "no" && (
            <MemberLogin setShowMember={setShowMember} />
          )}
        </div>
      </section>
    </Layout>
  );
}
