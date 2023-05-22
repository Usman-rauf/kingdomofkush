import React from "react";

function GetInvolved() {
  return (
    <section className="GetInvolved lg:py-[6rem] py-[2rem] bg-[#F9F8FA] dark:bg-[#1E1C22]">
      <div className="container mx-auto px-[1rem] lg:px-[5rem] grid  md:space-x-[2rem] grid-cols-1 md:grid-cols-2  ">
        <div className="left">
          <p className="dark:text-[#ffffffbf] text-base">
            100 TONS OF VARIOUS AGRICULTURAL PRODUCTS
          </p>
          <h1 className=" font-bold dark:text-white text-[2rem] lg:text-[3rem]">
            Get Involved:
          </h1>
          <p className="text-base dark:text-[#ffffffbf] mt-6 2xl:pr-[14rem] pr-[1rem]">
            Contribution and support shows up in many forms and the future
            Kingdom is searching for new team members across volunteer
            organizations, business groups, service providers, strategic
            partners, governance specialists, and every other sector of a
            society as well as its government.{" "}
          </p>
        </div>
        <div className="right dark:text-[#ffffffbf]">
          <p className=" text-base mt-8 md:mt-0">
            We look forward to helping you explore how your talents and{" "}
            <b className="font-bold">
              professional skills can help meet the specific development needs
              of Africa.
            </b>{" "}
          </p>
          <div className=" grid grid-cols-2 px-6 sm:px-0 md:grid-cols-3">
            <div className="llistMenu_wrapper mt-[4rem] pl-[1rem]">
              {" "}
              <ul>
                <li className=" list-disc pb-2">Bananas</li>
                <li className=" list-disc pb-2">Beans</li>
                <li className=" list-disc pb-2">Cassava</li>
                <li className=" list-disc pb-2">Cashew Nuts</li>
                <li className=" list-disc pb-2">Corn</li>
                <li className=" list-disc pb-2">Mangos</li>
                <li className=" list-disc pb-2">Okra</li>
                <li className=" list-disc pb-2">Oranges</li>
                <li className=" list-disc pb-2">Pineapples</li>
                <li className=" list-disc pb-2">Rice</li>
                <li className=" list-disc pb-2">Tomato</li>
                <li className=" list-disc pb-2">Yam</li>
              </ul>
            </div>
            <div className="llistMenu_wrapper mt-[2.5rem] pl-[1rem]">
              <h4 className="font-bold text-base pb-4">
                Protein Production
              </h4>
              <ul>
                <li className=" list-disc pb-2">Fisheries</li>
                <li className=" list-disc pb-2">Livestock</li>
              </ul>
            </div>
            <div className="llistMenu_wrapper mt-[2.5rem] pl-[1rem]">
              <h4 className="font-bold text-base pb-4">
                Natural Resources
              </h4>
              <ul>
                <li className=" list-disc pb-2">Cobalt</li>
                <li className=" list-disc pb-2">Copper</li>
                <li className=" list-disc pb-2">Diamond</li>
                <li className=" list-disc pb-2">Gold</li>
                <li className=" list-disc pb-2">Lithium</li>
                <li className=" list-disc pb-2">Oil & Gas</li>
                <li className=" list-disc pb-2">Rubber</li>
                <li className=" list-disc pb-2">Water</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInvolved;
