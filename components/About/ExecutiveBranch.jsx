import React from "react";

const ExecutiveBranch = () => {
  const executiveBranchList = [
    {
      name: "Queen Mother Dr. Delois Blakely",
    },
    {
      name: "Foreign Affairs",
    },
    {
      name: "Finance and Economy",
    },
    {
      name: "Education",
    },
    {
      name: "National Intelligence",
    },
    {
      name: "Science and Technology",
    },
    {
      name: "Arts and Culture",
    },
    {
      name: "Social Service",
    },
    {
      name: "Health",
    },
    {
      name: "Religious Affairs",
    },
    {
      name: "Transportation",
    },
    {
      name: "Agriculture",
    },
    {
      name: "Natural Resources",
    },
    {
      name: "Energy",
    },
    {
      name: "Justice",
    },
    {
      name: "Homeland Security",
    },
  ];
  return (
    <section className="bg-[#f1400512] dark:bg-[#161519]">
      <div className="mx-auto py-10 lg:py-20 px-5 lg:px-[2rem] container max-w-[75rem] 2xl:max-w-[85rem]">
        <div className="flex md:flex-row flex-col justify-between mb-9">
          <div>
            <div className="uppercase text-[rgba(25,31,35,0.8)] dark:text-[#ffffffbf] font-medium">
              STATE ORGANIZATIONS
            </div>
            <h2 className="text-[2.8rem] dark:text-white text-[#191f23] font-bold">
              Executive Branch
            </h2>
          </div>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {executiveBranchList.map((item, index) => {
            return <>
              {index == 0 && <div></div>}
              <div key={index} className="text-center">
                <h3 className="text-[#CB9833] bg-[#000000] dark:bg-[#e6e6e6] py-4 text-[18px] font-semibold">
                  {item.name}
                </h3>
              </div>
              {index == 0 && <div></div>}
            </>
          })}
        </section>
      </div>
    </section>
  );
};

export default ExecutiveBranch;
