import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from 'react-player';
import 'react-modal-video/css/modal-video.css'
import { MdOutlineClose } from "react-icons/md";
import { AiFillPlayCircle } from "react-icons/ai";
import { Dialog } from "@material-tailwind/react";
export default function ProjectThubmnail({ data, list, className }) {
    const [open, setOpen] = useState(false);
    return <>
        <Dialog
            size="xxl"
            open={open}
            className="shadow-none backdrop-blur-sm bg-opacity-50 h-full">
            <MdOutlineClose className="cursor-pointer text-[2rem] m-5 text-black dark:text-white" onClick={() => setOpen(false)} />
            <div className="flex justify-center align-middle h-[95vh]">
                <div className="my-auto">
                    <ReactPlayer url={data?.videoUrl} playing={true} />
                </div>
            </div>
        </Dialog>
        <div className={`relative overflow-hidden ${className}`}>
            <Image
                width={0}
                height={0}
                sizes="100vw"
                alt={data.title}
                src={data.thumbnail}
                style={{ width: '100%', height: 'auto' }} />
            {list == true ? <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30">
                <div className="flex justify-center align-middle h-full">
                    {data?.videoUrl && <AiFillPlayCircle size={53}
                        onClick={() => setOpen(true)}
                        className="my-auto cursor-pointer text-white"
                        onMouseOut={({ target }) => (target.style.color = "white")}
                        onMouseOver={({ target }) => (target.style.color = "#cb9833")} />}
                    <div className="absolute bottom-2 left-5">
                        <h4 className="text-[1.55rem] font-bold text-[#fff]">
                            {data.title}
                        </h4>
                        <div className="h-[1.8rem] transition-all overflow-hidden">
                            <div className="hidden">
                                <span className="text-[#cb9833]">
                                    {data.country}
                                </span>
                            </div>
                            <div>
                                <Link href={data.slug}>
                                    <span className="text-[#cb9833] hover:underline">
                                        Show Project
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <div className={`absolute top-0 left-0 w-full h-full ${data?.videoUrl && 'bg-black bg-opacity-30'}`}>
                <div className="flex justify-center align-middle h-full">
                    {data?.videoUrl &&
                        <AiFillPlayCircle size={53}
                            onClick={() => setOpen(true)}
                            className="my-auto cursor-pointer text-white"
                            onMouseOut={({ target }) => (target.style.color = "white")}
                            onMouseOver={({ target }) => (target.style.color = "#cb9833")} />}
                </div>
            </div>}
        </div>
    </>
}