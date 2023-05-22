import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import AdminLayout from '@/components/Admin/AdminLayout';
import { Button, Card, CardHeader } from "@material-tailwind/react";
import axios from "axios";

export default function index() {
  const [data, setData] = useState([])
  const [isFetching, setFetching] = useState(false);
  const volunteerHeader = [
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
    }
  ];
  useEffect(() => {
    setFetching(true);
    axios.get('/api/volunteer').then(({ data }) => {
      setData(data.list.map(item => ({
        country: item.Country,
        name: item.FirstName + ' ' + item.LastName,
        registerId: item.RegistrationId,
        id: item._id.toString(),
        mobile: item.Phone,
        email: item.Email,
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
          <h2>Volunteer List</h2>
        </CardHeader>
        <DataTable columns={volunteerHeader} data={data} customStyles={customStyles} progressPending={isFetching} />
      </Card>
    </AdminLayout>
  );
}
