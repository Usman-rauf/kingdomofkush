import axios from "axios";
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import AdminLayout from '@/components/Admin/AdminLayout';
import { Card, CardHeader } from "@material-tailwind/react";
export default function replay() {
    const [data, setData] = useState([])
    const [isFetching, setFetching] = useState(false);
    const contactHeader = [
        {
            name: 'Name',
            selector: (row) => row.Name
        },
        {
            name: 'Mobile',
            selector: (row) => row.Phone
        },
        {
            name: 'Email',
            selector: (row) => row.Email
        },
        {
            name: 'Message',
            selector: (row) => row.Message
        }
    ];
    useEffect(() => {
        setFetching(true);
        axios.get('/api/project/replay').then(({ data }) => {
            setData(data.list);
        }).finally(() => setFetching(false));
    }, [])
    const customStyles = {
        rows: {
            style: {
                backgroundColor: '#fff',
                fontSize: '14px',
                color: '#333'
            }
        },
        headRow: {
            style: {
                boxShadow: 'none',
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#374151',
                textTransform: 'uppercase',
                backgroundColor: '#F9FAFB',
            }
        }
    };
    return (
        <AdminLayout>
            <Card className="mt-[30px]">
                <CardHeader
                    color="amber"
                    variant="gradient"
                    className="flex h-10 pt-2 pl-2">
                    <h2>Replay List</h2>
                </CardHeader>
                <DataTable columns={contactHeader} data={data} customStyles={customStyles} progressPending={isFetching} />
            </Card>
        </AdminLayout>
    );
}
