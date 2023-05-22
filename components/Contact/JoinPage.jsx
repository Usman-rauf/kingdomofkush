import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function JoinPage(){
  return (
    <div className="bg-cover  flex justify-center items-center bg-center xl:min-h-[20rem]"
      style={{ backgroundImage: `url('https://i.postimg.cc/5txLS635/oh-img158-1.jpg')`}}>
      <div className="text-white p-10  container mx-auto">
        <h1 className="text-[#82838C]">CARRERS</h1>
        <div className="lg:flex justify-between">
          <div>
            <p className="mt-5 text-[50px] font-bold">Join our Team.</p>
          </div>
          <div>
            <Link
              href={"/membership"}
              className="bg-black mt-5 text-[#cb9833] py-2 pl-3 pr-3 rounded-lg flex items-center gap-2">
              Membership Application
              <span>
                <AiOutlineArrowRight/>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
