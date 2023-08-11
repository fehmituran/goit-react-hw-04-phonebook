
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import {
    FormContainer,
    FormField,
    Label,
    Input,
    Span,
    Button,
    ButtonField,
  } from './ContactForm.styled';



const ContactForm = ({onSubmit}) => {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")


    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
          case 'name':
            setName(value);
            break;
          case 'number':
            setNumber(value);
            break;
          default:
            return;
        }
      };

      const resetForm = () => {
        setName('');
        setNumber('');
      };

      const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ name, number });
        resetForm();
      };

     
    
    return (
        <Formik >
          <Form onSubmit={handleSubmit} >
            <FormContainer >
              <FormField>
                <Label>
                  <Span>Name</Span>
                  <Input
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                  />
                </Label>
              </FormField>
              <FormField>
                <Label>
                  <Span>Phone Number</Span>
                  <Input
                    type="tel"
                    placeholder="Enter phone number"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    required
                  />
                </Label>
              </FormField>
              <ButtonField>
                <Button type="submit">Add Contact</Button>
              </ButtonField>
            </FormContainer>
          </Form>
        </Formik>
      );
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
export default ContactForm
