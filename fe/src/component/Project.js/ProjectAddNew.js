import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input, Select, DatePicker, Button } from 'antd';
import moment from 'moment';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { getListClass } from '../../services/product.service';



const AddProjectForm = () => {
    const [user] = useOutletContext();
    useEffect(() => {
        getListClasss()
    }, [])
    const { Option } = Select;
    const [listclass, setListClass] = useState([])
    // const [files, setFiles] = useState([]);
    const initialValues = {
        ProjectCode: '',
        ProjectName: '',
        Description: '',
        group: '',
       
       
    };


    const getListClasss = async () => {
        const res = await getListClass()
        setListClass(res.data.data)
    }
    console.log("listclass", listclass);
    console.log("user",user);

    const handleSubmit = (values) => {
        console.log('Submitted values:', {...values,TeacherId : user.id});
        // Xử lý dữ liệu ở đây
    };
    const nav = useNavigate();

    return (
        <div className="container  ">
            <div className="my-5 ">

                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ setFieldValue }) => (
                        <Form>
                            <div className="row">
                                <div className="col-6">
                                    <div>
                                        <label htmlFor="ProjectCode">Project Code:</label>
                                        <Field type="text" name="ProjectCode" as={Input} />
                                    </div>
                                    <div>
                                        <label htmlFor="name">ProjectName:</label>
                                        <Field type="text" name="ProjectName" as={Input} />
                                    </div>
                                    <div>
                                        <label htmlFor="Description">Description:</label>
                                        <Field type="text" name="Description" as={Input} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <label htmlFor="group">Group:</label>
                                        <Field
                                            name="group"
                                            style={{ width: '100%' }}
                                            as={Select}
                                            onChange={(value) => setFieldValue('group', value)}
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

export default AddProjectForm;