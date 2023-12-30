"use client";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import useSWR from "swr";
import Button from "react-bootstrap/Button";
import Modals from "./modal";
import UpdateModal from "./updateModal";
import Link from "next/link";

type IProps = {
  blogs: IBlogs[];
};

function Tables(props: IProps) {
  const { blogs } = props;

  const [blog, setBlog] = useState<IBlogs | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  return (
    <div>
      <div className="flex justify-between items-center my-3">
        <h3>Table Blogs</h3>
        <Button variant="secondary" onClick={() => setShowModal(true)}>
          Add new
        </Button>
        <Modals showModal={showModal} setShowModal={setShowModal} />
        <UpdateModal
          showModal={showEditModal}
          setShowModal={setShowEditModal}
          blog={blog}
          setBlog={setBlog}
        />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NO</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td className="flex">
                <div className="mx-2">
                  <Link href={`/blogs/${item.id}`} className="btn btn-primary">
                    View
                  </Link>
                </div>
                <div className="mx-2">
                  <Button
                    variant="warning"
                    onClick={() => {
                      setShowEditModal(true);
                      setBlog(item);
                    }}
                  >
                    Edit
                  </Button>
                </div>
                <div className="mx-2">
                  <Button variant="danger">Delete</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Tables;
