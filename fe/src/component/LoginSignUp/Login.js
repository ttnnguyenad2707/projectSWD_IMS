

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Outlet, NavLink, useParams, redirect } from 'react-router-dom';

const Login = () => {
    const initialValues = {
        fullname: '',
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        fullname: Yup.string().required('Fullname is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const handleSubmit = (values) => {
        console.log(values);
        // Perform registration logic here
    };

    return (
        <div className="container">
            <div className="row">
                <h1 className=' text-center'>Login</h1>
                <div className="col-12">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            {/* <div className="mb-3">
                                <label htmlFor="fullname" className="form-label">Fullname</label>
                                <Field type="text" className="form-control" id="fullname" name="fullname" />
                                <ErrorMessage name="fullname" component="div" className="text-danger" />
                            </div> */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <Field type="email" className="form-control" id="email" name="email" />
                                <ErrorMessage name="email" component="div" className="text-danger" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <Field type="password" className="form-control" id="password" name="password" />
                                <ErrorMessage name="password" component="div" className="text-danger" />
                            </div>

                            <div className=" justify-content-center text-center mt-3 ">
                                <button
                                    className=' w-100 my-2 col-md-11 btn btn-dark btn-lg btn-Login m-control-lg '
                                    type="submit">Login</button>
                            </div>
                            <div className=" justify-content-center text-center mt-3 ">
                                <button
                                    className=' w-100 my-2 col-md-11 btn btn-danger btn-lg btn-Login m-control-lg '
                                    type="submit">Login with google</button>
                            </div>

                            <div className="my-3">
                                <p className="font-semibold text-center text-gray-600 text-xl ">
                                    Do not have a account ?
                                    <h5 className="font-semibold text-gray-900 text-xl tracking-[-0.40px] w-auto">
                                        <NavLink to={`/register`} style={{ color: '#e25e3e' }}> Register</NavLink>
                                    </h5>
                                </p>

                            </div>
                        </Form>
                    </Formik>
                </div>

            </div>

        </div>
    );
};

export default Login;