import { Card, CardHeader } from "@material-tailwind/react";
import AdminLayout from '@/components/Admin/AdminLayout';
import DataTable from 'react-data-table-component';
import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function index() {
  const [data, setData] = useState([])
  const [isFetching, setFetching] = useState(false);
  const memberHeader = [
    {
      name: 'Register ID',
      selector: (row) => row.registrationId
    },
    {
      name: 'Name',
      selector: (row) => <div>{row.Title} {row.FirstName} {row.MiddleName}  {row.LastName}</div>
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
      name: 'Country',
      selector: (row) => row.Country
    },
  ];

  useEffect(() => {
    setFetching(true);
    axios.get('/api/membership').then(({ data }) => {
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
          color="blue"
          variant="gradient"
          className="flex h-10 pt-2 pl-2">
          <h2>Member List</h2>
        </CardHeader>
        <DataTable columns={memberHeader} data={data} customStyles={customStyles} progressPending={isFetching} />
      </Card>
    </AdminLayout>
  );
}
