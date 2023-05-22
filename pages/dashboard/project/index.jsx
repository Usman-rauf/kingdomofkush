import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { BsEye } from 'react-icons/bs';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import AdminLayout from '@/components/Admin/AdminLayout';
import useSweetAlert from "@/assets/plugins/sweetalert2";
import {
  Card,
  Button,
  Dialog,
  CardHeader,
} from "@material-tailwind/react";
export default function index() {
  const [data, setData] = useState([])
  const [project, setProject] = useState({});
  const [isShow, setIsShow] = useState(false);
  const [isFetching, setFetching] = useState(false);
  const { showConfirm, showSuccess, showError } = useSweetAlert();
  const animation = {
    mount: { scale: 1, y: 0 },
    unmount: { scale: 0.9, y: -100 },
  }
  const projectHeader = [
    {
      name: 'Thumbnail',
      maxWidth: '180px',
      selector: (row) => <div className="py-2">
        <Image width={80} height={50} alt={row.title} src={row.thumbnail ?? '/images/project.jpg'} className="rounded" />
      </div>
    },
    {
      name: 'Title',
      selector: (row) => row.title
    },
    {
      name: 'Country',
      selector: (row) => row.country
    },
    {
      name: 'Involvement',
      selector: (row) => row.kushInvolvement
    },
    {
      name: 'Status',
      selector: (row) => row.Active ? 'Active' : 'Inactive'
    },
    {
      name: 'Action',
      maxWidth: '100px',
      selector: (row) => <div className="flex justify-center items-center gap-1">
        <button onClick={() => handleShow(row)} className="flex gap-1 bg-yellow-700 px-2 py-1 rounded-sm font-bold">
          <BsEye className="font-bold" />
          <small className="uppercase">View</small>
        </button>
      </div>
    }
  ];
  useEffect(() => {
    const fetchProjectList = () => {
      setFetching(true);
      axios.get('/api/project').then(({ data }) => {
        setData(data.list);
      }).finally(() => setFetching(false));
    }
    fetchProjectList();
  }, [])
  useEffect(() => {
    if (isShow) return;
    setProject({});
    setFetching(false);
  }, [isShow])

  const handleShow = (item) => {
    setProject(item);
    setIsShow(true);
  }

  const handleDelete = () => {
    setIsShow(false);
    showConfirm.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
    }).then((result) => {
      if (result.isConfirmed) {
        setFetching(true)
        axios.delete(`/api/project`, { params: { id: project._id } }).then(({ data }) => {
          showSuccess.fire('Project Deleted Successfully').then(() => {
            console.log(setData.indexOf(project));
          });
        }).finally(() => setFetching(false));
      }
    })
  }

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
          color="deep-orange"
          className="flex justify-between p-2">
          <div className="mt-1">
            <h2>Project List</h2>
          </div>
          <Link href="/dashboard/project/create">
            <Button
              size="sm"
              color="amber"
              className="flex ml-auto justify-center items-center gap-1">
              <BsEye />
              <small className="uppercase">Add Project</small>
            </Button>
          </Link>
        </CardHeader>
        <DataTable columns={projectHeader} data={data} customStyles={customStyles} progressPending={isFetching} />
      </Card>

      <Dialog
        size="md"
        open={isShow}
        animate={animation}>
        {Object.keys(project).length !== 0 && <div className="p-2">
          <div className="flex gap-2">
            <Image width={320} height={200} alt={project.title} src={row.thumbnail ?? '/images/project.jpg'} className="rounded" />
            <div className="w-full">
              <h2 className="font-lg"><b className="font-bold">Title:</b> {project.title}</h2>
              <h2 className="font-lg"><b className="font-bold">Country:</b> {project.country}</h2>
              <div className="flex justify-between mt-5">
                <button onClick={() => window.open(project.videoUrl)} className="bg-green-500 text-white px-3 py-1 font-bold">
                  Video Link
                </button>
                <button onClick={() => window.open('/project/' + project.slug)} className="bg-green-500 text-white px-3 py-1 font-bold">
                  Project Link
                </button>
              </div>
            </div>
          </div>
          <div className="my-2">
            <h2 className="font-lg"><b className="font-bold">Description:</b> {project.projectDescription}</h2>
            <hr />
            <h2 className="font-lg"><b className="font-bold">Involvement:</b> {project.kushInvolvement}</h2>
          </div>
          <div className="flex justify-between mt-2">
            <button disabled={isFetching} onClick={handleDelete} className="bg-red text-white px-3 py-1 rounded">
              {isFetching ? 'Deleting...' : 'Delete'}
            </button>
            <button onClick={() => setIsShow(false)} className="bg-green-500 text-white px-3 py-1 rounded">Close</button>
          </div>
        </div>}
      </Dialog>
    </AdminLayout>
  );
}
