import React from 'react';
import Link from 'next/link';
import AdminLayout from '@/components/Admin/AdminLayout';
import {
    Card,
    CardBody,
    CardHeader,
} from "@material-tailwind/react";
import { dbConnect } from 'library/dbConnect';
import petitionModel from "@/models/petitionModel";
import membershipModel from "models/membershipModel";
import volunteerModel from "models/volunteerModel";
import projectModel from "models/projectModel";
import vendorModel from "models/vendorModel";
export default function dashboard({ summery }) {
    return (
        <AdminLayout>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {summery?.map((item, index) => {
                    return <Card key={index} className='mt-[30px]'>
                        <CardHeader color="orange" className="relative h-20 text-center">
                            <span className="text-[3rem]">{item.count}</span>
                        </CardHeader>
                        <CardBody className="flex items-center justify-center py-3">
                            <Link className="font-bold uppercase dark:text-black" href={item.link}> {item.title} </Link>
                        </CardBody>
                    </Card>
                })}
            </div>
        </AdminLayout>
    );
}

export async function getServerSideProps({ params }) {
    try {
        await dbConnect();
        const vendorCount = await vendorModel.estimatedDocumentCount();
        const projectCount = await projectModel.estimatedDocumentCount();
        const memberCount = await membershipModel.estimatedDocumentCount();
        const petitionCount = await petitionModel.estimatedDocumentCount();
        const volunteerCount = await volunteerModel.estimatedDocumentCount();
        const summery = [
            {
                count: petitionCount,
                title: 'Total Petitions',
                link: '/dashboard/petition'
            },
            {
                count: memberCount,
                title: 'Total Member',
                link: '/dashboard/member'
            },
            {
                count: volunteerCount,
                title: 'Total Volunteer',
                link: '/dashboard/volunteer'
            },
            {
                count: vendorCount,
                title: 'Total Vendor',
                link: '/dashboard/vendor'
            },
            {
                count: projectCount,
                title: 'Total Project',
                link: '/dashboard/project'
            },
        ]
        return { props: { summery } }
    } catch (error) {
        return { props: { summery: [] } }
    }
}