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

const MyFieldAndErrorContainer = styled.div`
   display: flex;
   flex-flow: column nowrap;
   align-items: center;
   min-height: 5rem;
   width: 100%;

   input, select {
      background-color: transparent;
      color: whitesmoke;
      width: 90%;
      height: 3.25rem;
      padding-left: 0.5rem;
      border: solid 2px whitesmoke;
      border-radius: 4px;
      font-size: 2rem;
      outline: none;

      &:focus{
         border: solid 4px whitesmoke;
      }
   }
   
   input {
      &::placeholder{
         font-size: 1rem;
         font-style: italic;
         color: rgba(255, 255, 255, 0.6);
      }

      /* Chrome/Opera/Safari */
      &::-webkit-input-placeholder { 
         color: rgba(255, 255, 255, 0.6);
      }

      /* Firefox 19+ */
      &::-moz-placeholder { 
         color: rgba(255, 255, 255, 0.6);
      }

      /* IE 10+ */
      &:-ms-input-placeholder { 
         color: rgba(255, 255, 255, 0.6);
      }

      &:-moz-placeholder { /* Firefox 18- */
         color: rgba(255, 255, 255, 0.6);
      }

   }

   select{
      font-size: 1rem;
      
      /* Remove arrows from select */
      /* Firefox */
      -moz-appearance: none;
      /* Chrome */
      -webkit-appearance: none;
      /* IE10 */
      &::-ms-expand {
         display: none;
      }
   }

   option{
      /* Firefox Only*/
      background-color: whitesmoke;
      color: ${props => props.theme.accent};
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
      background-color: ${props => props.theme.neutral};
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
                           .moreThan(0, "Minimum count not reached")
                           .lessThan(5001, "Maximum count exceeded, please use 5000")
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

                              <MyFieldAndErrorContainer id="myFieldAndErrorContainer">
                                 <Field 
                                    type="text" 
                                    name="companyName" 
                                    placeholder="Company Name"
                                 />
                                 <ErrorMessage id="formik-error-message" name="companyName" component="div" />
                              </MyFieldAndErrorContainer>

                              <MyFieldAndErrorContainer>
                                 <Field 
                                    type="text" 
                                    name="contactName" 
                                    placeholder="Contact Name"
                                 />
                                 <ErrorMessage id="formik-error-message" name="contactName" component="div" />
                              </MyFieldAndErrorContainer>

                              <MyFieldAndErrorContainer>
                                 <Field 
                                    type="text" 
                                    name="phone" 
                                    placeholder="Phone Ex.(124) 456-789"
                                 />
                                 <ErrorMessage id="formik-error-message" name="phone" component="div" />
                              </MyFieldAndErrorContainer>

                              <MyFieldAndErrorContainer>
                                 <Field 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email"
                                 />
                                 <ErrorMessage id="formik-error-message" name="email" component="div" />
                              </MyFieldAndErrorContainer>

                              <MyFieldAndErrorContainer>
                                 <Field 
                                    type="text" 
                                    name="address" 
                                    placeholder="Address"
                                 />
                                 <ErrorMessage id="formik-error-message" name="address" component="div" />
                              </MyFieldAndErrorContainer>

                              <MyFieldAndErrorContainer>
                                 <Field 
                                    type="text" 
                                    name="employeeCount" 
                                    placeholder="Number of Employees"
                                 />
                                 <ErrorMessage id="formik-error-message" name="employeeCount" component="div" />
                              </MyFieldAndErrorContainer>

                              <MyFieldAndErrorContainer id="myFieldAndErrorContainer">
                                 <Field component="select" name="assistanceSought">
                                    <option value="" disabled defaultValue>Select your option</option>
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
                              </MyFieldAndErrorContainer>
                              
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
