
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input, Select, DatePicker, Button } from 'antd';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const initialValues = {
    projectCode: '',
    name: '',
    description: '',
    group: '',
    assignTo: '',
    dateStart: null,
    dateEnd: null,
};

const handleSubmit = (values) => {
    console.log('Submitted values:', values);
    // Xử lý dữ liệu ở đây
};

const ProjectDetailAndUpdate = () => {
    
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
                                        <label htmlFor="projectCode">Project Code:</label>
                                        <Field type="text" name="projectCode" as={Input} />
                                    </div>
                                    <div>
                                        <label htmlFor="name">Name:</label>
                                        <Field type="text" name="name" as={Input} />
                                    </div>
                                    <div>
                                        <label htmlFor="description">Description:</label>
                                        <Field type="text" name="description" as={Input} />
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
                                            <Option value="group1">Group 1</Option>
                                            <Option value="group2">Group 2</Option>
                                            <Option value="group3">Group 3</Option>
                                        </Field>
                                    </div>
                                    <div>
                                        <label htmlFor="assignTo">Assign To:</label>
                                        <Field
                                            name="assignTo"
                                            style={{ width: '100%' }}
                                            as={Select}
                                            onChange={(value) => setFieldValue('assignTo', value)}
                                        >
                                            <Option value="user1">User 1</Option>
                                            <Option value="user2">User 2</Option>
                                            <Option value="user3">User 3</Option>
                                        </Field>
                                    </div>
                                    <div>
                                        <label htmlFor="dateStart">Date Start:</label>
                                        <Field
                                            name="dateStart"
                                            as={DatePicker}
                                            onChange={(value) =>
                                                setFieldValue('dateStart', value ? moment(value) : null)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="dateEnd">Date End:</label>
                                        <Field
                                            name="dateEnd"
                                            as={DatePicker}
                                            onChange={(value) =>
                                                setFieldValue('dateEnd', value ? moment(value) : null)
                                            }
                                        />
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