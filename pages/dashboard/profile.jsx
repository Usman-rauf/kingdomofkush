import React from 'react';
import Image from 'next/image';
import { useSession } from "next-auth/react"
import AdminLayout from '@/components/Admin/AdminLayout';
import { MdMobileFriendly, MdOutlineCardTravel } from 'react-icons/md';
export default function profile() {
  const { data: session, status } = useSession();
  return (
    <AdminLayout>
      <div>
        <div className="relative bg-[url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60')] bg-no-repeat bg-cover bg-center h-52">
          <div className="absolute top-20 left-[8%] w-5/6 h-96">
            <div className="bg-[#F9F9F9] shadow-md relative flex flex-col items-center h-full rounded-md">
              <div className="absolute -top-16 w-32 h-32 shadow-lg rounded-full bg-white">
                <Image src={session?.user.avatar} className="rounded-full mx-auto" alt={session?.user.name} width={100} height={100}/>
              </div>
              <div className="absolute w-full px-5 top-[18%]">
                <h1 className="text-xl text-center font-bold">{session?.user.name}</h1>
                <p className="text-sm mt-1 text-blue-gray-200 flex justify-center items-center">
                  <MdMobileFriendly className="w-5 h-5" />
                  {session?.user.mobile}
                </p>
                <p className="text-sm mt-2 text-blue-gray-400 flex justify-center items-center">
                  <MdOutlineCardTravel className="w-5 h-5 pr-1" />
                  {session?.user.title}
                </p>
                <hr className="text-blue-gray-100 mt-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
