import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import AdminLayout from '@/components/Admin/AdminLayout';
import { Card, CardHeader } from "@material-tailwind/react";
import axios from "axios";

export default function index() {
  const [data, setData] = useState([])
  const [isFetching, setFetching] = useState(false);
  const vendorHeader = [
    {
      name: 'Register ID',
      selector: (row) => row.RegistrationId
    },
    {
      name: 'Name',
      selector: (row) => <div>{row.FirstName}  {row.LastName}</div>
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
      name: 'Birthday',
      selector: (row) => row.Birthday
    }
  ];

  useEffect(() => {
    setFetching(true);
    axios.get('/api/vendor').then(({ data }) => {
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
          <h2>Vendor List</h2>
        </CardHeader>
        <DataTable columns={vendorHeader} data={data} customStyles={customStyles} progressPending={isFetching} />
      </Card>
    </AdminLayout>
  );
}
