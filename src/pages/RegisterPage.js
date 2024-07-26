import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../services/authService';

const RegisterPage = () => {
    const navigate = useNavigate();

    const initialValues = {
        username: '',
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required')
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const data = await register(values);
            localStorage.setItem('token', data.token);
            navigate('/login');
        } catch (error) {
            console.error('Registration failed', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="container">
            <h1>Register</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label>Username</label>
                            <Field type="text" name="username" className="form-control" />
                            <ErrorMessage name="username" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <Field type="email" name="email" className="form-control" />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <Field type="password" name="password" className="form-control" />
                            <ErrorMessage name="password" component="div" className="text-danger" />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            Register
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterPage;
