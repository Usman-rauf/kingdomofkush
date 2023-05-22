import Image from "next/image";
import React from "react";
import Styles from "../../styles/styles.module.css";
import findBd from "@/assets/images/about/oh__img158-1-scaled.jpg.jpg";
function KingdomInitiator() {
  return (
    <section className="KingdomInitiator">
      <div className="flex px-5 dark:bg-[#161519] sm:px-0 flex-col md:flex-row md:gap-[2rem] lg:gap-[6rem]">
        <div className="w-full sm:w-2/5 md:pl-[1rem] lg:pl-[5rem]">
          <div className="content lg:pt-[5rem] ">
            <h1 className=" text-[2rem] xl:text-[3rem] mb-5 lg:mb-[4rem] dark:text-white font-bold  leading-tight">
              The Kingdom is already an initiator
            </h1>
            <p className="dark:text-[#ffffffbf]">
              developer and a supporter of growing agricultural and natural
              resource development projects that span over 25 countries. This
              blooming Kingdom has already obtained a legal right to{" "}
              <b className=" font-bold">30 million hectares of land</b> develop
              over , significant amounts of natural resources (such as gold,
              diamonds, copper, lithium, iron, cobalt mines as well as water,
              rubber and many other resources) and is in the process of engaging
              in additional natural resources, mining, de-desertification, and
              clean water initiatives. This development plan offers regionalized
              food security and viable commodity production for the world.
              Successful cultivation is already underway and currently producing
              over 100 tons of various agricultural products, such as:
            </p>
          </div>
        </div>

        <div className={` w-[100%] sm:w-3/5 mt-5 sm:mt-0`}>
          <Image
            width={0}
            height={0}
            src={findBd}
            alt="about us"
            className="md:h-[45rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default KingdomInitiator;
