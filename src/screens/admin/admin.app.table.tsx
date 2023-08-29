'use client';
//Style bi loi
import { Table, Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import CreateModal from '@/screens/admin/admin.create.modal';
import { useState } from 'react';

interface IProps {
    blogs: IBlog[]
};

const AdminAppTable = (props: IProps) => {
    const {blogs} = props;
    // console.log(">>> Check props blogs: ...", blogs );
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    return (
        <>
            <div 
                className='mb-3'
                style={{ display: "flex", justifyContent: "space-between"}}>
                <h3>CRUD Blogs Table</h3>
                
                <Button variant='primary' 
                onClick={() => setShowModalCreate(true)}>
                Add New
                </Button>
            </div>
            <Table bordered hover size="sm">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs?.map(blog => {
                        return (
                                <tr key={blog.id}>
                                    <td>{blog.id}</td>
                                    <td>{blog.title}</td>
                                    <td>{blog.author}</td>
                                    <td>
                                        <Button variant='secondary'/*className="mx-3"*/>Edit
                                        </Button>
                                        <Button variant='warning' className='mx-3'>View
                                        </Button>
                                        <Button variant='danger' /*className="mx-3"*/>Delete
                                        </Button>
                                    </td>
                                </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </Table>
            <CreateModal
                showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
                />
        </>
    )
};

export default AdminAppTable;