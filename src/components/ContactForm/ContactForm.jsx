import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { fields } from "./fields";
import { initialValues } from './initialValues';

// import styles from './ContactForm.module.css';

class ContactForm extends Component {
    
    state = {
    name: '',
    number: ''
    }
  
    handleChange = (evt) => {
      const { name, value } = evt.currentTarget;
      this.setState({
        [name]: value,
      });
    }
  
   handleSubmit = (event) => {
     event.preventDefault();
     this.props.onSubmit(this.state);
     this.resetForm();
   }
  
  resetForm = () => {
    this.setState({
      name: '',
      number: ''
    })
  }
    render() {
      return (
        <Formik
          onSubmit={this.handleSubmit}
          initialValues={initialValues}
        >
          <Form>
      <label >
          Name
        <Field
            value={this.state.name}
            onChange={this.handleChange}
            {...fields.caseValueName}
            required
         /> 
        </label>
            
         <label >
        Number  
        <Field
        value={this.state.number}
        onChange={this.handleChange}
        {...fields.caseValueNumber}  
        required
        /> 
        </label>
      <button {...fields.caseValueButton}>Add contact </button>
            </Form>
          </Formik>
    )
     }  
};

export default ContactForm;
