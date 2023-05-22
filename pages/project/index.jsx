import Layout from "@/components/Layout";
import { dbConnect } from "library/dbConnect";
import projectModel from "@/models/projectModel";
import { AppContext } from "@/context/AppProvider";
import React, { useState, useContext } from 'react';
import ProjectThumbnail from '@/components/Projects/ProjectThumbnail';
export default function project({ list }) {
  const { locationList } = useContext(AppContext);
  const [projectList, setprojectList] = useState(list);
  const handleSelectedCountry = (slug) => {
    if (typeof window !== "undefined") {
      setprojectList(list?.filter((item) => slug === '*' ? true : item.country === slug))
    }
  }
  return (
    <Layout title={"Project List"}>
      <main className="dark:bg-[#161519] min-h-[60vh]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <ul className="flex flex-wrap justify-center gap-3">
              <li onClick={() => handleSelectedCountry('*')}>
                <a>
                  <span className="text-[#cb9833] font-semibold">All</span>
                </a>
              </li>
              {locationList?.map((item, index) => (
                <li key={index}
                  onClick={() => handleSelectedCountry(item.slug)}
                  className="flex gap-2 before:content-['/'] before:text-black dark:before:text-white">
                  <span className="text-[#cb9833] font-semibold"> {item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-3">
              {projectList.map((item, index) => {
                return (<div key={index} className="projectCard group w-full overflow-hidden relative rounded-md">
                  <ProjectThumbnail key={index} className="hover:scale-110 delay-10" data={item} list={true} />
                </div>)
              })}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
export async function getServerSideProps({ params }) {
  try {
    await dbConnect();
    const data = await projectModel.find({ active: true }).select('-createdAt -updatedAt -active -__v').lean();
    const projectList = data.map((item) => ({
      ...item,
      _id: item._id.toString(),
      slug: `/project/${item.slug}`,
    }));
    return { props: { list: projectList } }
  } catch (error) {
    return { props: { list: [] } }
  }
}