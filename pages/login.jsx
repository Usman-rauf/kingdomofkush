import useSweetAlert from '@/assets/plugins/sweetalert2';
import Logo from '@/assets/images/logo.png';
import { signIn } from 'next-auth/react';
import Layout from "@/components/Layout";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function login() {
  const [isFetching, setFetching] = useState(false);
  const [password, setPassword] = useState(null)
  const [email, setEmail] = useState(null);
  const { showError } = useSweetAlert();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFetching(true);
    try {
      const { url } = await signIn("credentials", {
        callbackUrl: '/dashboard',
        password: password,
        redirect: false,
        email: email,
      });
      location.href = url;
    } catch (error) {
      showError.fire(`Unauthrized Credentials`);
    }
  }
  return (
    <Layout title={"Member Login"}>
      <div className="flex items-center justify-center px-4 pb-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Image className="mx-auto" src={Logo} width={100} height={100} alt="logo" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e)}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="input-label-required mt-2">
                  Email address
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  disabled={isFetching}
                  className="input-text"
                  placeholder="Email address"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="input-label-required mt-2">
                  Password
                </label>
                <input
                  required
                  id="password"
                  name="password"
                  type="password"
                  className="input-text"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link href="/recovery" className="font-medium text-orange-600 hover:text-orange-500">
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div>
              <button type={isFetching ? "button" : "submit"} className="btn-submit" disabled={isFetching}>
                {isFetching ? "Processing..." : "Sign in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
