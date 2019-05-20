import React, { Component } from 'react'
import { Layout, Card, CardContent, CardTitle, CardText } from './_ContentStyledComponents'
import { Formik, Form, Field, ErrorMessage } from 'formik'// 38.2
import * as Yup from 'yup'
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
   max-width: 25rem;
   
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
      background-color: whitesmoke;
      color: ${props => props.theme.accent}
   }
   &:focus{
      border: solid 3px whitesmoke;
   }
   &:disabled{
      background-color: grey;
   }
   
`

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
                        employeeCount: '',
                        assistanceSought: ''
                     }}
                     validationSchema = { Yup.object().shape({
                        phone: Yup.string()
                           .min(11, "Incorrect number of characters")
                           .matches(/\([0-9]{3}\) [0-9]{3}-[0-9]{4}/, "Incorrect Format"),
                        email: Yup.string()
                           .email()
                           .required("Required"),
                        employeeCount: Yup.number()
                           .moreThan(0, "Not enough")
                           .lessThan(5001, "Max count exceeded, please use 5000")
                     })}
                    
                     onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                           alert(
                              `Fake Submit Complete, Your Entered Values -
                              ${JSON.stringify(values, null, 2)}
                              `
                           )
                           setSubmitting(false)
                        }, 2000)
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
                                    placeholder="Phone Number Ex. (124) 456-789"
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
                                 <Field component="select" name="assistanceSought">
                                    <option value="" disabled selected>Select your option</option>
                                    <option value="requestForInitial">Request For Initial Fee On-Site Consulation</option>
                                    <option value="generalEmploymentLaw">General Employment Law Compliance Inquiry</option>
                                    <option value="employmentContractDrafting">Employment Contract-Drafting</option>
                                    <option value="employmentContractReview">Employment Contract-Review Existing</option>
                                    <option value="employeeBenefitsInquiry">Employee Benefits Inquiry</option>
                                    <option value="nonCompeteAgreement">Non-Compete Agreement</option>
                                    <option value="nonSolicitationAgreement">Non-Solicitation Agreement</option>
                                    <option value="proposedReleaseSeverance">Proposed Release/Severance Agreement</option>
                                    <option value="terminationReview">Termination Review</option>
                                    <option value="eeo">EEOC Charge Filed</option>
                                    <option value="dol">DOL Investigation Inquiry</option>
                                    <option value="dhs">DHS/ICE Investiagion/Inquiry</option>
                                    <option value="ncs">NC State Litigation Filed</option>
                                    <option value="scs">SC State Litigation Filed</option>
                                    <option value="federalLitigationFiled">Federal Litigation Filed</option>
                                    <option value="other">Other</option>
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
