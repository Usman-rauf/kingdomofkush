import Link from "next/link";
import { push } from 'next/router'
import { MdDescription } from "react-icons/md";
import { AppContext } from "@/context/AppProvider";
import React, { useContext, useState } from 'react';
import useSweetAlert from '@/assets/plugins/sweetalert2';
import AdminLayout from '@/components/Admin/AdminLayout';
import {
  Card,
  Input,
  Button,
  Select,
  Option,
  CardBody,
  Textarea,
  CardHeader,
} from '@material-tailwind/react';
import axios from 'axios';

export default function index() {
  const [file, setFile] = useState(null);
  const { locationList } = useContext(AppContext);
  const { showSuccess, showError } = useSweetAlert();
  const [isFatching, setIsFatching] = useState(false);
  const [isUploadMode, setIsUploadMode] = useState(false);
  const [currentCountry, setCurrentCountry] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file && isUploadMode) return;
    setIsFatching(true);
    const formData = new FormData();
    formData.append("country", currentCountry);
    formData.append("uploadMode", isUploadMode);
    formData.append("title", e.target.title.value);
    formData.append("category", e.target.category.value);
    formData.append("videoUrl", e.target.videoUrl.value);
    formData.append("kushInvolvement", e.target.kushInvolvement.value);
    formData.append("projectDescription", e.target.projectDescription.value);
    formData.append("thumbnail", isUploadMode ? file : e.target.thumbnail.value);
    axios.post('/api/project', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(({ data }) => {
      showSuccess.fire(data.status).then(() => {
        push('/dashboard/project');
      });
    }).catch(() => {
      showError.fire(`Something went wrong`)
    }).finally(() => setIsFatching(false))
  };
  return (
    <AdminLayout title={"Create Project"}>
      <Card className="w-full mt-10">
        <CardHeader
          color="deep-orange"
          className="flex justify-between p-2">
          <div className="mt-1">
            <h2>Add a project</h2>
          </div>
          <Link href="/dashboard/project/">
            <Button size="sm" color="amber" className="flex ml-auto justify-center items-center gap-1">
              <div className="flex align-baseline gap-1">
                <MdDescription />
                <small className="uppercase">Project List</small>
              </div>
            </Button>
          </Link>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardBody className="text-center gap-6  grid grid-cols-1">
            <Input
              required
              name="title"
              label="Title"
              disabled={isFatching} />
            <Input
              type='url'
              name="videoUrl"
              label="Video Url"
              disabled={isFatching} />
            <div className="grid grid-cols-4 gap-1">
              <div className="col-span-3">
                {isUploadMode ?
                  <Input
                    required
                    type='file'
                    name="thumbnail"
                    accept="image/*"
                    label="Thubmnail"
                    disabled={isFatching}
                    onChange={(e) => setFile(e.target.files[0])} /> :
                  <Input
                    required
                    type='url'
                    name="thumbnail"
                    label="Thubmnail Url"
                    disabled={isFatching} />
                }
              </div>
              <Input
                required
                name="category"
                label="Category"
                disabled={isFatching} />
              <div>
                <Button
                  size="sm"
                  className="w-full"
                  disabled={isFatching}
                  color={isUploadMode ? 'amber' : 'deep-orange'}
                  onClick={() => setIsUploadMode(!isUploadMode)}>
                  {isUploadMode ? "Upload Mode" : "Url Mode"}
                </Button>
              </div>
            </div>
            <Select
              required
              disabled={isFatching}
              label="Select Location"
              onChange={(country) => { setCurrentCountry(country); }}>
              {locationList.map((item, index) => (
                <Option key={index} value={item.slug}>{item.name}</Option>
              ))}
            </Select>

            <Textarea
              required
              disabled={isFatching}
              name="projectDescription"
              label="Project Description"
            />
            <Textarea
              required
              disabled={isFatching}
              name="kushInvolvement"
              label="Kush Involvement"
            />
            <div className="xl:w-[30%] w-[50%]">
              <Button type="submit" className="w-full" size="md" color="amber" disabled={isFatching}>
                {isFatching ? <span className="animate-ping">loading..</span> : `Add project`}
              </Button>
            </div>
          </CardBody>
        </form>
      </Card>
    </AdminLayout>
  );
}
