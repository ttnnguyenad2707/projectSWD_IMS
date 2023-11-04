

import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input, Select, DatePicker, Button } from 'antd';
import moment from 'moment';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { createProject, getDetailProject, getListClass, updateProject } from '../../services/product.service';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';



const ProjectDetailAndUpdate = () => {
    const [user] = useOutletContext();
    const nav = useNavigate();
    const { id } = useParams()

    // console.log("id",id);
    useEffect(() => {
        getListClasss()
        getProjectDetail()
    }, [])
    const token = Cookies.get('accessToken');
    const { Option } = Select;
    const [listclass, setListClass] = useState([])
    const [projectDetail, setProjectDetail] = useState([])

    // const [files, setFiles] = useState([]);

    const getProjectDetail = async () => {
        try {
            const detail = await getDetailProject(token, id)
            console.log("detail", detail);
            setProjectDetail(detail.data.data)
        } catch (error) {
            console.log(error);

        }
    }
    console.log("projectDetail", projectDetail);



    console.log("listclass", listclass);
    console.log("user", user);

    const handleSubmit = async (values) => {
        try {

            console.log("values", values);
            const data = await updateProject(values, id, token)
            console.log("data edit", data);
            toast.success(data.data.message)
            nav("/projectList")


        } catch (error) {
            console.log(error);
            toast(error.response.data.message)

        }

    };

    const getListClasss = async () => {
        try {
            const res = await getListClass(token)
            setListClass(res.data.data)
        } catch (error) {
            console.log(error);
        }

    }

    const initialValues = {
        ProjectCode: projectDetail?.ProjectCode,
        ProjectName: projectDetail?.ProjectName,
        Description: projectDetail?.Description,
        classId: projectDetail?.classes?.id,

        TeamLeader: projectDetail?.TeamLeader,
        Status: projectDetail.Status


    };
    return (
        <div className="container  ">
            <div className="my-5 ">

                <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize={true}>
                    {({ setFieldValue }) => (
                        <Form>
                            <div className="row">
                                <div className="col-6">
                                    <div>
                                        <label htmlFor="ProjectCode">Project Code:</label>
                                        <Field type="text" disabled={true} name="ProjectCode" as={Input} />
                                    </div>
                                    <div>
                                        <label htmlFor="name">ProjectName:</label>
                                        <Field type="text" name="ProjectName" as={Input} />
                                    </div>
                                    <div>
                                        <label htmlFor="Description">Description:</label>
                                        <Field type="text" name="Description" as={Input} />
                                    </div>
                                    <div>
                                        <label htmlFor="TeamLeader">TeamLeader:</label>
                                        <Field type="text" name="TeamLeader" as={Input} />
                                    </div>
                                    <div>
                                        <label htmlFor="Status">Active:</label>
                                        <Field type="checkbox" name="Status" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <label htmlFor="classId">class:</label>
                                        <Field
                                            name="classId"
                                            style={{ width: '100%' }}
                                            as={Select}

                                            onChange={(value) => setFieldValue('classId', value)}
                                        >

                                            {listclass.map((item) => (
                                                <Option key={item.id} value={item.id}>
                                                    {item.class_name}
                                                </Option>
                                            ))}
                                        </Field>
                                    </div>


                                </div>
                            </div>
                            <div className="row" >
                                <div className="col-6">
                                    <Button type="primary" htmlType="submit">
                                        Save
                                    </Button>
                                </div>
                                <div className="col-6">
                                    <Button type="default" className='btn btn-danger' onClick={() => { nav("/projectList") }}>
                                        Close
                                    </Button>
                                </div>

                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

        </div>
    );
};

export default ProjectDetailAndUpdate;