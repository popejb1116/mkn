import React, { Component } from 'react'
import { Layout, Card, CardContent, CardTitle, CardText } from './_ContentStyledComponents'
import { Formik, Form, Field, ErrorMessage } from 'formik';// 38.2
//import { Formik } from 'formik'; //38.1
//import { Form } from 'formik'; //38.1

import styled from 'styled-components'

// JUST FOR NOW
const FormWrapper = styled.div`

   form {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      align-items: center;
      min-height: 400px;
   }
`

const InputAndErrorBlock = styled.div`
   
   min-height: 5rem;
   
   input{
      background-color: transparent;
      color: whitesmoke;
      width: 20rem;
      padding: 0.25rem 0.75rem;
      border: solid 2px white;
      border-radius: 25px;
      font-size: 2rem;
   }
   input::placeholder{
      color: whitesmoke;
      padding: 0.25rem;
      font-style: italic;
   }

   #formik-error-message{
      color: ${props => props.theme.error};
      padding-left: 1rem;
      font-weight: bold;
   }
`

const MyFormButton = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;

   background-color: transparent;
   color: whitesmoke;
   width: 12rem;
   height: 4rem;
   border: solid 2px white;
   border-radius: 25px;

   font-size: 1.5rem;
   font-weight: bold;
   letter-spacing: 0.25rem;

   &:hover{
      background-color: white;
      color: ${props => props.theme.accent}
   }
   
`

// const MyForm = styled.form`
//    display: flex;
//    flex-flow: column nowrap;
//    justify-contents: space-around;
//    align-items: center;
//    min-height: 400px;
// `

class BusinessForm extends Component {
   render() {
      return (
         <Layout>
            <Card>
               <CardContent>

                  <CardTitle>Business Infomation Submission</CardTitle>

                  <Formik
                     initialValues={{ 
                        email: '', 
                        password: '' 
                     }}
                     validate={values => {
                        let errors = {};
                        if (!values.email) {
                           errors.email = 'Required';
                        } else if (
                           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                           errors.email = 'Invalid email address';
                        }
                        return errors;
                     }}
                     onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                           alert(JSON.stringify(values, null, 2));
                           setSubmitting(false);
                        }, 400);
                     }}
                  >
                     {({ isSubmitting }) => (
                        <FormWrapper>
                           <Form>

                              <InputAndErrorBlock>
                                 <Field 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email"
                                 />
                                 <ErrorMessage id="formik-error-message" name="email" component="div" />
                              </InputAndErrorBlock>
                              
                              <InputAndErrorBlock>
                                 <Field type="password" name="password" />
                                 <ErrorMessage id="FormikErrorMessage" name="password" component="div" />
                              </InputAndErrorBlock>
                              
                              <MyFormButton type="submit" disabled={isSubmitting}>
                                 SUBMIT
                              </MyFormButton>
                           </Form>
                        </FormWrapper>
                     )}
                  </Formik>

               </CardContent>
            </Card>
         </Layout>
      )
   }
}

export default BusinessForm

// ALL COMPONENT EXAMPLE
/*
<Formik
   initialValues={{ email: '', password: '' }}
   validate={values => {
      let errors = {};
      if (!values.email) {
         errors.email = 'Required';
      } else if (
         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
         errors.email = 'Invalid email address';
      }
      return errors;
   }}
   onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
         alert(JSON.stringify(values, null, 2));
         setSubmitting(false);
      }, 400);
   }}
>
   {({ isSubmitting }) => (
      <Form>
         <Field type="email" name="email" />
         <ErrorMessage name="email" component="div" />
         
         <Field type="password" name="password" />
         <ErrorMessage name="password" component="div" />
         
         <button type="submit" disabled={isSubmitting}>
            Submit
         </button>

      </Form>
   )}
</Formik>
*/