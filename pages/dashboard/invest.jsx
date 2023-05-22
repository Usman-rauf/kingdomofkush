import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import AdminLayout from '@/components/Admin/AdminLayout';
import { Card, CardHeader } from "@material-tailwind/react";
import axios from "axios";

export default function index() {
  const [data, setData] = useState([])
  const [isFetching, setFetching] = useState(false);
  const investHeader = [
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
      name: 'Amount',
      selector: (row) => row.Amount
    },
    {
      name: 'StartTime',
      selector: (row) => row.StartTime
    },
    {
      name: 'Investor Type',
      selector: (row) => row.InvestorType
    },
    {
      name: 'Locations',
      selector: (row) => row.Locations
    }
  ];

  useEffect(() => {
    setFetching(true);
    axios.get('/api/invest').then(({ data }) => {
      setData(data.list.map(item => ({
        Name: item.FirstName + ' ' + item.LastName,
        Locations: item.InvestmentLocation,
        StartTime: item.InvestmentStartTime,
        Amount: `$${item.InvestmentAmount}`,
        InvestorType: item.InvestorType,
        id: item._id.toString(),
        Phone: item.Phone,
        Email: item.Email,
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
          <h2>Invest List</h2>
        </CardHeader>
        <DataTable columns={investHeader} data={data} customStyles={customStyles} progressPending={isFetching} />
      </Card>
    </AdminLayout>
  );
}
