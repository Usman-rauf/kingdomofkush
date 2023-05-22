import { Card, CardHeader } from "@material-tailwind/react";
import AdminLayout from '@/components/Admin/AdminLayout';
import DataTable from 'react-data-table-component';
import React, { useEffect, useState } from 'react';
import axios from "axios";
export default function index() {
    const [data, setData] = useState([])
    const [isFetching, setFetching] = useState(false);
    const petitionHeader = [
        {
            name: 'Register ID',
            selector: (row) => row.registerId
        },
        {
            name: 'Name',
            selector: (row) => row.name
        },
        {
            name: 'Mobile',
            selector: (row) => row.mobile
        },
        {
            name: 'Email',
            selector: (row) => row.email
        },
        {
            name: 'Country',
            selector: (row) => row.country
        },
        {
            name: 'State',
            selector: (row) => row.state
        },
        {
            name: 'City',
            selector: (row) => row.city
        },
        {
            name: 'Postal Code',
            selector: (row) => row.postalcode
        },
        {
            name: 'Recent Activity',
            selector: (row) => row.recentactivity
        }
    ];
    useEffect(() => {
        setFetching(true);
        axios.get('/api/petition').then(({ data }) => {
            console.log(data);
            // RegistrationId
            // FirstName
            // LastName
            // Email
            // Phone
            // City
            // State
            // PostalCode
            // Country
            // StreetAddress
            // Signature
            // DeviceOperatingSystem
            // DeviceBrowserVersion
            // DeviceLocation
            // DeviceBrowser
            // DeviceIp
            setData(data.list.map(item => ({
                country: `${item.Country} ${item.DeviceLocation ? 'Network: ' + item.DeviceLocation : ''}`,
                name: item.FirstName + ' ' + item.LastName,
                registerId: item.RegistrationId,
                id: item._id.toString(),
                mobile: item.Phone,
                email: item.Email,
                state:item.State,
                city:item.City,
                postalcode:item.PostalCode,
                recentactivity:item.DeviceBrowser+'-'+item.DeviceOperatingSystem+'-'+item.DeviceLocation+'-'+item.DeviceIp,
            })));
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
                    color="blue"
                    variant="gradient"
                    className="flex h-10 pt-2 pl-2">
                    <h2>Petition List</h2>
                </CardHeader>
                <DataTable 
                  columns={petitionHeader} 
                  data={data} 
                  customStyles={customStyles} 
                  progressPending={isFetching} 
                  pagination
                  highlightOnHover
                  responsive
                  search
                  />
            </Card>
        </AdminLayout>
    );
}
