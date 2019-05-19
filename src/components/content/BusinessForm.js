import React, { Component } from 'react'
import { Layout, Card, CardContent, CardTitle, CardText } from './_ContentStyledComponents'
import { Formik, Form, Field, ErrorMessage } from 'formik';// 38.2
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
   
   input, select{
      background-color: transparent;
      color: whitesmoke;
      width: 25rem;
      height: 3.25rem;
      padding-left: 0.5rem;
      border: solid 2px whitesmoke;
      border-radius: 4px;
      font-size: 2rem;
      outline: none;
   }
   input:focus, select:focus{
      border: solid 3px whitesmoke;
   }
   input::placeholder{
      color: whitesmoke;
      font-size: 1rem;
      font-style: italic;
   }

   select{
      font-size: 1rem;
   }

   #formik-error-message{
      color: ${props => props.theme.error};
      padding-left: 0.5rem;
      font-weight: bold;
   }
`

const MyFormButton = styled.button`
   background-color: transparent;
   color: whitesmoke;
   width: 12rem;
   height: 4rem;
   margin: 2rem;
   border: solid 2px whitesmoke;
   border-radius: 4px;
   outline: none;

   font-size: 1.5rem;
   font-weight: bold;
   letter-spacing: 0.25rem;

   &:hover{
      background-color: white;
      color: ${props => props.theme.accent}
   }
   &:focus{
      border: solid 3px whitesmoke;
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
                        companyName: '',
                        contactName: '',
                        phone: '',
                        email: '',
                        address: '',
                        businessType: null,
                        employeeCount: '',
                        assistanceType: ''
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
                                    type="text" 
                                    name="companyName" 
                                    placeholder="Company Name"
                                 />
                                 <ErrorMessage id="formik-error-message" name="companyName" component="div" />
                              </InputAndErrorBlock>

                              <InputAndErrorBlock>
                                 <Field 
                                    type="text" 
                                    name="contactName" 
                                    placeholder="Contact Name"
                                 />
                                 <ErrorMessage id="formik-error-message" name="contactName" component="div" />
                              </InputAndErrorBlock>

                              <InputAndErrorBlock>
                                 <Field 
                                    type="text" 
                                    name="phone" 
                                    placeholder="Phone Number"
                                 />
                                 <ErrorMessage id="formik-error-message" name="phone" component="div" />
                              </InputAndErrorBlock>

                              <InputAndErrorBlock>
                                 <Field 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email"
                                 />
                                 <ErrorMessage id="formik-error-message" name="email" component="div" />
                              </InputAndErrorBlock>

                              <InputAndErrorBlock>
                                 <Field 
                                    type="text" 
                                    name="address" 
                                    placeholder="Address"
                                 />
                                 <ErrorMessage id="formik-error-message" name="address" component="div" />
                              </InputAndErrorBlock>

                              <InputAndErrorBlock>
                                 <Field 
                                    type="text" 
                                    name="employeeCount" 
                                    placeholder="Number of Employees"
                                 />
                                 <ErrorMessage id="formik-error-message" name="employeeCount" component="div" />
                              </InputAndErrorBlock>

                              <InputAndErrorBlock>
                                 <Field component="select" name="businessType">
                                    <option value="" disabled selected>Select your option</option>
                                    <option value="option1">Request For Initial Fee On-Site Consulation</option>
                                    <option value="option2">General Employment Law Compliance Inquiry</option>
                                    <option value="option3">Employment Contract-Drafting</option>
                                    <option value="option4">Employment Contract-Review Existing</option>
                                    <option value="option5">Employee Benefits Inquiry</option>
                                    <option value="option6">Non-Compete Agreement</option>
                                    <option value="option7">Non-Solicitation Agreement</option>
                                    <option value="option8">Proposed Release/Severance Agreement</option>
                                    <option value="option9">Termination Review</option>
                                    <option value="option10">EEOC Charge Filed</option>
                                    <option value="option11">DOL Investigation Inquiry</option>
                                    <option value="option12">DHS/ICE Investiagion/Inquiry</option>
                                    <option value="option13">NC State Litigation Filed</option>
                                    <option value="option14">SC State Litigation Filed</option>
                                    <option value="option15">Federal Litigation Filed</option>
                                    <option value="option16">Other</option>
                                 </Field>
                                 <ErrorMessage id="formik-error-message" name="businessType" component="div" />
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
