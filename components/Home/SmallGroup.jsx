import React from 'react';
import Styles from '../../styles/styles.module.css';

function SmallGroup() {
  return (
    <section className="SmallGroup">
      <div className="dark:bg-[#161519] dark:text-[#ffffffbf] grid grid-cols-1 md:grid-cols-2 ">
        <div className="py-[1rem] px-5 sm:py-[4rem] order-2 sm:order-1 2xl:pl-[15%] lg:pl-[1rem] md:lg:pl-[2rem] lg:px-[2rem] md:px-[0] ">
          <div className="content lg:ml-12 xl:pr-[6rem] lg:pt-[5rem] ">
            <p className=" text-[15px] mt-7  leading-relaxed  ">
              WHAT STARTED AS A SMALL GROUP OF ENTHUSIASTS FROM ALL WALKS OF
              LIFE HAS OVER THE PAST TWO DECADES TRANSFORMED INTO A MASSIVE
              LIVING ORGANISM OF VOLUNTEERS.
            </p>
            <p className=" text-[15px] mt-7  leading-relaxed lg:pr-[3rem]  ">
              What started as a small group of enthusiasts from all walks of
              life has over the past two decades transformed into a massive
              living organism of volunteers. These volunteers have one common
              goal – to make their vision of the Kingdom of Kush a reality, with
              all efforts passionately undertaken in a decentralized but very
              methodical and cohesive manner due to the noble nature of the
              cause. The Kingdom of Kush is an “open-source” smart city state,
              inviting all to take part in creating access to prosperity and
              well-being for present and future generations to come. Many
              countries have already expressed unequivocal recognition and
              support for the new nation and our ethos which at its core
              embodies intercultural diversity, and the value of human
              connection. This will not be a place that values one race or
              religion over another but will offer inclusivity to all people.
              Diverse cultural expressions in music, art, film, culinary arts,
              and sports will weave every participating culture into this
              beautiful tapestry which we hope to share with the world through
              satellite Kingdom of Kush micro-communities soon.
            </p>
          </div>
        </div>

        <div
          className={`${Styles.smallGroupBg} py-10 order-1 sm:order-2 min-h-[25rem] md:min-h-[45rem] `}
        ></div>
      </div>
    </section>
  );
}

export default SmallGroup;
