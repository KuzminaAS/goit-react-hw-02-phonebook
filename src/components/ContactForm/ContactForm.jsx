import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { fields } from "./fields";
import { initialValues } from './initialValues';

// import styles from './ContactForm.module.css';

const ContactForm = ({onSubmit}) => {

    const handleSubmit = (values, {resetForm}) => {
        onSubmit(values);
        resetForm();
    }

    return (
        <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues} >
            <Form>
                <label>
                    Name
                    <Field {...fields.name} />
                </label>

                <label>
                    Number
                    <Field {...fields.number} />
                </label>
                <button {...fields.caseValueButton}>Add contact</button>
            </Form>
        </Formik>
    )
};

export default ContactForm;
