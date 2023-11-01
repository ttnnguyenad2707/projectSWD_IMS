
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Outlet, NavLink, useParams, redirect } from 'react-router-dom';
import { register } from '../../services/auth.service';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const initialValues = {
        fullname: '',
        phone: '',
        email: '',
        password: ''
    };

    const nav = useNavigate();
 
    const validationSchema = Yup.object({
        fullname: Yup.string().required('fullname is required'),
        email: Yup.string()
            .email('Invalid email address')
            .test('fpt-email', 'Only @fpt.edu.vn email addresses are allowed', function (value) {
                if (value) {
                    return value.endsWith('@fpt.edu.vn');
                }
                return true;
            })
            .required('email is required'),
        phone: Yup.string()
            .matches(/^\d{10}$/, 'Phone number must be 10 digits')
            .required('Phone number is required'),
            password: Yup.string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, 'Password must contain at least one lowercase letter, one uppercase letter, and one digit')
            .required('password is required')
    });

    const handleSubmit = async (values) => {
        console.log(values);
        const data = {
            ...values,
        }
        try {
            const res = await register(data)
            console.log("res", res)
            toast.success(res.data.message)
            nav("/login")
        } catch (error) {
            console.log(error);
        }
        // Perform registration logic here
    };

    return (
        <div className="container">
            <div className="row">
                <h1 className=' text-center'>Register</h1>
                <div className="col-12">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="fullname" className="form-label">fullname</label>
                                <Field type="text" className="form-control" id="fullname" name="fullname" />
                                <ErrorMessage name="fullname" component="div" className="text-danger" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">phone</label>
                                <Field type="text" className="form-control" id="phone" name="phone" />
                                <ErrorMessage name="phone" component="div" className="text-danger" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">email</label>
                                <Field type="email" className="form-control" id="email" name="email" />
                                <ErrorMessage name="email" component="div" className="text-danger" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">password</label>
                                <Field type="password" className="form-control" id="password" name="password" />
                                <ErrorMessage name="password" component="div" className="text-danger" />
                            </div>
                            <div className=" justify-content-center text-center mt-3 ">
                                <button
                                    className=' w-100 my-2 col-md-11 btn btn-dark btn-lg btn-Login m-control-lg '
                                    type="submit">Register</button>
                            </div>
                            <div className=" justify-content-center text-center mt-3 ">
                                <button
                                    className=' w-100 my-2 col-md-11 btn btn-danger btn-lg btn-Login m-control-lg '
                                    type="submit">Register with google</button>
                            </div>

                            <div className="my-3">
                                <p className="font-semibold text-center text-gray-600 text-xl ">
                                    Alraeady an account?
                                    <h5 className="font-semibold text-gray-900 text-xl tracking-[-0.40px] w-auto">
                                        <NavLink to={`/login`} style={{ color: '#e25e3e' }}>  Login</NavLink>
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

export default Register;