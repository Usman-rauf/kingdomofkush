import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/logo.png';
import Layout from "@/components/Layout";
export default  function recovery(){
  return (
    <Layout title={"Recovery Password"}>
    <div className="flex my-32 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <Image className="mx-auto" src={Logo} width={100} height={100} alt="logo"/>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Recovery Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link href="/membership" className="pl-2 font-medium text-orange-600 hover:text-orange-500">
                Are You a new member?
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="input-label-required">
                Email address
              </label>
              <input
                required
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="input-text"
                placeholder="Email address"/>
            </div>
          </div>
          <div>
            <button type="submit" className="btn-submit">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-orange-500 group-hover:text-orange-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
    </Layout>
  );
};
