import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ReviewForm = ({ review, onSave }) => {
    const initialValues = {
        title: '',
        author: '',
        reviewText: '',
        rating: 0
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('Required'),
        author: Yup.string().required('Required'),
        reviewText: Yup.string().required('Required'),
        rating: Yup.number().min(1).max(5).required('Required')
    });

    const [formData, setFormData] = useState(initialValues);

    useEffect(() => {
        if (review) {
            setFormData(review);
        }
    }, [review]);

    const handleSubmit = (values, { setSubmitting }) => {
        onSave(values);
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="form-group">
                        <label>Title</label>
                        <Field type="text" name="title" className="form-control" />
                        <ErrorMessage name="title" component="div" className="text-danger" />
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <Field type="text" name="author" className="form-control" />
                        <ErrorMessage name="author" component="div" className="text-danger" />
                    </div>
                    <div className="form-group">
                        <label>Review</label>
                        <Field as="textarea" name="reviewText" className="form-control" />
                        <ErrorMessage name="reviewText" component="div" className="text-danger" />
                    </div>
                    <div className="form-group">
                        <label>Rating</label>
                        <Field type="number" name="rating" className="form-control" min="1" max="5" />
                        <ErrorMessage name="rating" component="div" className="text-danger" />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        Save
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default ReviewForm;
