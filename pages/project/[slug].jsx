import React from "react";
import Link from 'next/link';
import Layout from "@/components/Layout";
import { dbConnect } from 'library/dbConnect';
import projectModel from "@/models/projectModel";
import { MdKeyboardBackspace } from "react-icons/md";
import ProjectReplay from '@/components/Projects/ProjectReplay';
import ProjectThubmnail from '@/components/Projects/ProjectThumbnail';
export default function project({ data }) {
  return (
    <Layout title={data.title ?? 'Project Detail'}>
      <aside className='fixed top-35 left-8'>
        <Link href='/project'><MdKeyboardBackspace className="text-[2rem]" /></Link>
      </aside>
      <div className="dark:bg-[#161519] dark:text-[#ffffffbf]">
        <div className="py-8">
          <div className="container mx-auto p-3 ">
            <div className="flex-col flex mb-8 sm:mb-0 sm:flex-row items-center">
              <div className="grid grid-cols-1 md:grid-cols-2  mb-4">
                <div>
                  <span className="text-[#cb9833]">
                    {data.country}
                  </span>
                  <div>
                    <h1 className="font-semibold text-[44px] dark:text-white leading-[55px]">
                      {data.title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ProjectThubmnail data={data} />
            </div>
            <div className="my-8">
              <h3 className="text-2xl font-semibold text-black dark:text-white">
                Project Description:
              </h3>
              <p>{data.projectDescription}</p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-black dark:text-white">
                Kush Involvement:
              </h3>
              <p>{data.kushInvolvement}</p>
            </div>
          </div>
          <ProjectReplay projectId={data.id} />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    await dbConnect();
    const data = await projectModel.findOne({ active: true, slug: params.slug });
    return {
      props: {
        data: {
          slug: data.slug,
          title: data.title,
          country: data.country,
          videoUrl: data.videoUrl,
          id: data._id.toString(),
          thumbnail: data.thumbnail,
          kushInvolvement: data.kushInvolvement,
          projectDescription: data.projectDescription,
        }
      }
    }
  } catch (error) {
    return { props: { data: {} } }
  }
}