import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { Space, Table, Tag } from 'antd';
import { getSubjectlist, getSubject, newSubject, removeSubject, updateSubject,activeSubject,deactiveSubject } from '../../services/subjectService';
import { ToastContainer, toast } from 'react-toastify';
const SubjectList = () => {
    const [dataIndex, setDataIndex] = useState();
    const [subject, setSubject] = useState();
    const [datareset, setdatareset] = useState();
    const [distinguish, setdistinguish] = useState();
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const inputName = useRef();
    const inputDescription = useRef();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const getsubjectList = async () => {
        try {
            const data = (await getSubjectlist()).data.data
            setDataIndex(data)
        } catch (error) {

        }
    }

    const getSubjectbyID = async () => {
        try {
            const data = (await getSubject()).data.data
            console.log(data);
        } catch (error) {

        }
    }

    const activesubject = async (id) => {
        try {
            const data = (await activeSubject(id))
            console.log(data);
            setdatareset(data)
        } catch (error) {

        }
    }
    const deactivesubject = async (id) => {
        try {
            const data = (await deactiveSubject(id))
            console.log(data);
            setdatareset(data)
        } catch (error) {

        }
    }
    const addSubject = async (name, description) => {
        try {
            const inData = {
                "name": name,
                "description": description,
                "status": true
            }
            const data = (await newSubject(inData))
            setdatareset(data)
            toast.success('Thêm dữ liệu thành công')
            console.log(data);
        } catch (error) {
            toast.warning('Xảy ra lỗi khi thêm dữ liệu')
        }
    }

    const updatesubject = async (name, description) => {
        try {
            const inData = {
                "id": subject.id,
                "name": name,
                "description": description,
                "status": true
            }
            const data = (await updateSubject(inData))
            setdatareset(data)
            toast.success('Thêm dữ liệu thành công')
            console.log(data);
        } catch (error) {
            toast.warning('Xảy ra lỗi khi thêm dữ liệu')
        }
    }
    const removesubject = async (id, name) => {
        console.log(id);
        const result = window.confirm('Bạn có chắc chắn muốn xóa môn ' + name + ' này không?');
        if (result) {
            const data = {
                "subjectId": id
            }
            try {
                const subject = (await removeSubject(data))
                console.log(subject);
                setdatareset(subject)
                toast.success('Đã xóa thành công')
            } catch (error) {

            }
        }
        else {
            toast.warning('Mục đã được xóa không thành công!')
        }
    }
    const clickNewSubject = () => {
        setdistinguish("Add");
        handleShow()
    }
    const clickUpdateSubject = (record) => {
        setdistinguish("Update");
        setSubject(record)
        handleShow()
    }

    const clickActiveSubject = (record) => {
        activesubject(record.id)
    }
    const clickDeActiveSubject = (record) => {
        deactivesubject(record.id)
    }
    const clickDetailSubject = (record) => {
        setSubject(record)
        handleShow2()
    }
    const handleSubmit = (name) => {
        if (name == "Add") {
            const name = inputName.current.value;
            const description = inputDescription.current.value;
            addSubject(name, description)
            handleClose()
        }
        else {
            const name = inputName.current.value;
            const description = inputDescription.current.value;
            console.log(description, "hihi");
            updatesubject(name, description)
            handleClose()
        }


    }
    useEffect(() => {
        getsubjectList();
    }, [datareset])
    const data = [
        {
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: '5%'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'Namejob',
            width: '10%'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'Description',
            width: '25%'
        },
        {
            title: 'Created at',
            dataIndex: 'createdAt',
            key: 'Status',
            width: '10%',
            render: (text, record) => {
                return (
                    <span style={{ color: 'red' }}>{text}</span>
                )
            }

        },
        {
            title: 'Update at',
            dataIndex: 'updatedAt',
            key: 'Status',
            width: '10%',
            render: (text, record) => {


                return (
                    <span style={{ color: 'blue' }}>{text}</span>
                )

            }

        },
        {

            title: 'Status',
            dataIndex: 'status',
            key: 'action',
            width: '10%',
            render: (text, record) => {
                if (text == 1) {
                    return (
                        <span style={{ color: 'red' }}>Active</span>
                    )
                }
                else {
                    return (
                        <span style={{ color: 'blue' }}>Deactive</span>
                    )
                }
            }
        },
        {

            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button variant="primary" onClick={() => clickUpdateSubject(record)}>Update</Button>
                    <Button variant="warning" onClick={() => removesubject(record.id, record.name)}>Delete</Button>
                    {record.status == 1 ? (<Button variant="danger" onClick={() => clickDeActiveSubject(record)}>Deactive</Button>):(<Button variant="success" onClick={() => clickActiveSubject(record)}>Active</Button>)}
                    <Button variant="info" onClick={() => clickDetailSubject(record)}>Detail</Button>
                </Space>
            ),
            width: '30%'

        },
    ];

    const paginationConfig = {
        pageSize: 10, // Số lượng mục hiển thị trên mỗi trang
        showSizeChanger: true, // Cho phép thay đổi số lượng mục trên mỗi trang
    };
    return (
        <Container>
            <Button variant="primary" className='d-flex justify-content-end mb-4 mt-4' onClick={clickNewSubject}>Add Subject</Button>
            <Table dataSource={dataIndex} columns={columns} pagination={paginationConfig}>
            </Table>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    {distinguish === "Add" ? (<Modal.Title>Add New Subject</Modal.Title>) : (<Modal.Title>Update Subject</Modal.Title>)}
                </Modal.Header>

                {distinguish === "Add" ? (<Modal.Body>
                    <div className='d-flex gap-2'>
                        <label for="name" className='me-4'>Name</label>
                        <input type='text' placeholder='Name' ref={inputName} id='name' style={{ width: '80%', height: '30px' }} />
                    </div>
                    <div className='d-flex gap-2 mt-3'>
                        <label for="Description">Description</label>
                        <input type='text' placeholder='Name' ref={inputDescription} id='Description' style={{ width: '80%', height: '30px' }} />
                    </div>
                </Modal.Body>)
                    :
                    (<Modal.Body>
                        <div className='d-flex gap-2'>
                            <label for="name" className='me-4'>Name</label>
                            <input type='text' placeholder={subject?.name} ref={inputName} id='name' style={{ width: '80%', height: '30px' }} />
                        </div>
                        <div className='d-flex gap-2 mt-3'>
                            <label for="Description">Description</label>
                            <input type='text' placeholder={subject?.description} ref={inputDescription} id='Description' style={{ width: '80%', height: '30px' }} />
                        </div>
                        <div className='d-flex gap-2 mt-3'>
                            <label for="Assignted">Assignted</label>
                            <input type='text' placeholder='Assignted' id='Description' style={{ width: '80%', height: '30px' }} />
                        </div>
                    </Modal.Body>)}
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {distinguish === "Add" ? (<Button variant="primary" onClick={() => handleSubmit("Add")}>Add</Button>) : (<Button variant="primary" onClick={() => handleSubmit("Update")}>Update</Button>)}
                </Modal.Footer>
            </Modal>
            <Modal
                show={show2}
                onHide={handleClose2}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{subject?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {subject?.description}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default SubjectList