import { Button, Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import { CgMenuRightAlt, CgProfile, CgLogOff, CgHome } from "react-icons/cg";
import ThemeSwitcher from "../shared/ThemeSwitcher";
import React, { useContext, useState } from "react";
import { AppContext } from "@/context/AppProvider";
import { signOut } from "next-auth/react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import Head from "next/head";
export default function AdminLayout({ title, children }) {
    const [exitConfirm, setExitConfirm] = useState(false);
    const { openSidebar, setOpenSidebar } = useContext(AppContext);
    const animation = {
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
    }
    return (
        <main className="block lg:flex">
            <Head>
                <title>{title}</title>
            </Head>
            <Sidebar />
            <main className="flex-1">
                <header className="bg-[#e3b75f] z-50 flex justify-between px-4 py-2 sticky top-0">
                    <div>
                        <h1 className="uppercase text-[25px] block md:hidden">KOK</h1>
                        <h1 className="uppercase text-[25px] hidden md:block">Kingdom Of Kush</h1>
                    </div>
                    <nav className="flex items-center space-x-3">
                        <Link target="_blank" href="/">
                            <CgHome className="text-[1.5rem]" />
                        </Link>
                        <ThemeSwitcher isAdmin={true} />
                        <Link href="/dashboard/profile">
                            <CgProfile className="text-[1.5rem]" />
                        </Link>
                        <CgLogOff onClick={() => setExitConfirm(!exitConfirm)} className="text-[1.5rem]" />
                        <CgMenuRightAlt className="lg:hidden animate-pulse cursor-pointer text-[1.5rem]" onClick={() => setOpenSidebar(!openSidebar)} />
                    </nav>
                </header>
                <section className="min-h-full p-5">
                    {children}
                </section>
                {/* <footer className="py-15 text-center">
                    <p className="dark:text-[#ffffffbf]">
                        © 2023 <b className="text-primary">Kingdom of Kush.</b> All rights reserved
                    </p>
                </footer> */}
            </main>
            <Dialog size="sm" animate={animation} open={exitConfirm} handler={() => setExitConfirm(!exitConfirm)}>
                <DialogBody className="flex justify-center py-20">
                    <h2 className="text-[1.5rem] font-bold"> Are you sure you want to exit? </h2>
                </DialogBody>
                <DialogFooter className="flex justify-between">
                    <Button color="green" onClick={() => setExitConfirm(!exitConfirm)}>
                        <span>Cancel</span>
                    </Button>
                    <Button color="amber" onClick={() => signOut()}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </main>
    );
}
AdminLayout.defaultProps = {
    title: "Welcome to Kingdom of Kush",
};
