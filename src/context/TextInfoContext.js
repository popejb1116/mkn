import React, { Component } from 'react'

const TextInfoContext = React.createContext()

class TextInfoProvider extends Component {

   state = {

      //TODO: LINKS
      home: [
         "The Law Office of Mark N. Kerkhoff, PLLC is an exclusive employment law firm representing small to mid-size businesses and select individuals across North and South Carolina.",
         "As a sole practitioner, I am honored to maintain a Martindale-Hubbell Ratting of 'AV Preeminent' Peer Review Rated, the highest rating available as to ethical standards and professional ability in the prestigious Martindale-Hubbell system, in addition to recognition for multiple years in the Super Lawyers Rising Stars edition.  My firm strives to provide sophisticated and aggressive employment law litigation counsel as well as value centered HR solutions for small to mid-size employers.",
         "- With experience at one of the largest labor and employment law defense firms in the nation, my firm represents select businesses seeking aggressive, diligent, and value centered employment law defense litigation counsel. My firm defends small to mid-size employers both in court and before administrative agencies such as the Equal Employment Opportunity Commission, Department of Labor, and other state and federal agencies.  I also represent a limited number of individual employees in court with highly meritorious employment law litigation claims.",
         " - My practice means employment contracts.  A central focus of my practice is the drafting, preparation, review, and enforcement of employment contracts such as agreements not to compete, confidentiality agreements, severance agreements, non-solicitation documents, apprenticeship documents, independent contractor arrangements, and literally all other contracts arising out of the employment relationship.",
         " - My firm provides human resources consulting services to small and mid-sized businesses seeking to prevent costly employment disputes and avoid protracted litigation. I frequently advise businesses with comprehensive, step-by-step plans to assure compliance with the myraid of dynamic employment regulations in today's modern regulatory environment. This includes reviews of high risk employee terminations, reviews of existing employee handbooks, the formulation of employment policies, responses to individual employee challenges, and regulatory compliance audits.  My firm offers an initial complimentary on-site human resources consultation along with a free initial compliance analysis to small and mid-sized employers.",
         " to contact us today."
      ],

      // TODO: EMBEDED LINKS
      litigation: [
         "My firm is committed to excellence and professionalism in the thoughtful, diligent, and aggressive litigation of employment law matters in federal and state courts.  As a solo practitioner, I frequently defend small to medium sized employers in employment law litigation and also aggressively prosecute a handful of highly meritorious employee claims each year.  I strive to objectively analyze my clients' challenges from both sides of the issue without bias or puffery. I believe this gives me a very unique perspective in the world of employment law.  My firm is able to approach potential litigation from both sides of the issue, advise clients accordingly, and many times anticipate and thwart our opponents' approach either in litigation or before claims are ever filed."
      ],

      contracts: [
         "My firm frequently advises small to mid-size businesses on contractual arrangements and works closely with management to prepare highly customized employment agreements.  These contracts often include complex compensation arrangements, detailed performance expectations, and other unique terms and conditions with one goal in mind: to memorialize the business owner's goals and expectations, minimize risk, and maximize an employee's potential to accomplish employer expectations through the proper employment framework.",
         "These type of employment contracts may include, for example, a highly complex commission compensation arrangement for an experienced doctor; a renewable for cause contract with a modified termination provision following an initial term for a board appointed executive director; a conditional ownership purchase option integrated into an employment contract for a business partner employee; an agreement of non-competition and non-solicitation for a current employee along with a release of prior claims; or an offer letter memorializing at-will employment with appropriate language to create a fixed-salary fluctuating workweek arrangement under federal wage and hour regulations.",
         "Quite simply, my firm prepares, drafts, and reviews a wide variety of employment contracts with an eye towards attention to detail, creativity, and a strong grounding in contract law.",
         "I also frequently review many of these same types of contracts for individual employees, including non-competition agreements, non-solicitation agreements, severance agreements, or standard employment contracts, in addition to the negotiation of these agreements with a positive approach to the new employment relationship.",
         "My firm's experience on both sides of contractual disputes gives me a very unique perspective.",
         "I am able to review and analyze an employer's contract with knowledge and experience in the disputes or claims an individual employee may claim under the contract.",
         "I am able to review an employee's contract with an eye towards the defenses or claims the employer will raise to the contract's enforceability.",
         "Ask our clients.  Ask our opponents.  MKN means employment contracts."
      ],

      // TODO: EMBEDED LINKS
      hr_consulting: [
         "My firm fundamentally understands the challenges facing human resources officials and small to mid-size business owners.  As a small business owner with a business management and marketing background, I am able to leverage my business knowledge and years of employment law litigation experience to advise employers on all facets of personnel, human resources, and employment law legal matters.",
         "I frequently advise businesses on the risk, viability, and recommended course of action regarding employee terminations.",
         "My firm regularly prepares and drafts employee handbooks ranging from the creation of a blank document from scratch, after consultation with a growing business, to mid-level legal reviews of existing handbooks, all the way to a higher level in-depth analysis of a single complicated policy - such as an exempt salary deduction policy, overtime pay policy for dual role employees, disability accommodation policy, or a fluctuating workweek arrangement for non-exempt salaried employees.",
         "My firm conducts internal investigations as to employee complaints, including sexual harassment or retaliation, and provides opinions as to prompt and appropriate remedial action.",
         "My firm conducts compliance audits to assure compliance with the panoply of ever changing employment laws such as I-9 or E-Verify work authorization document retention, payroll records retention, employee time keeping practices, and literally all other employment law considerations affecting the modern day employer.",
         "My firm offers a complimentary no-obligation on-site business human resources consultation and a no-cost initial compliance summary to new business clients.",
         "Fill out our business employer information form to schedule a complimentary on site consultation today."
      ],

      research: [
         "Modern small to mid-size business employers need reliable answers to intricate, highly complex legal compliance questions.  My firm provides legal research opinions on a unique and wide variety of legal issues facing business and non-profit firm clients.  Various businesses have retained my firm to conduct highly complex and intricate special research projects. Recently, for example, these projects have included: the compilation of ownership computations, research, and ultimate legal opinion as to the applicability of the Patient Protection and Affordable Care Act ('PPACA') to multiple joint or common employers; the nationwide status of case law interpreting and applying constitutional protections to visitors on public educational property; and the implications of organizations' alternative pay arrangements to individuals subject to social security income (SSI) earnings limitation thresholds.",
         "My firm strives to deliver professional excellence in all aspects of special research projects and seeks to significantly reduce organizational clients' investment and overall cost in these matters."
      ],

      attorney_profile: [
         "Attorney Mark N. Kerkhoff formed The Law Office of Mark N. Kerkhoff, PLLC in June of 2010.",
         "Since the firm's inception, he has been honored by Business North Carolina Magazine as a member of the 'Legal Elite' in 'Employment' and 'Young Guns' as well as recognized in the Super Lawyers Rising Stars Edition, an honor and selection conferred upon less than 2.5% of attorneys in the entire State of North Carolina.  He also maintains a Martindale-Hubbell Rating of AV Preeminent Peer Review Rated.",
         "Prior to forming his boutique employment law firm, Mr. Kerkhoff limited his practice to employment law litigation with a larger plaintiff's employment law litigation firm.  He also spent two summers in the Labor & Employment Practice Group at one of the largest defense litigation firms in the nation, where he gained significant experience on the defense side of employment law litigation matters.  Additionally, Mr. Kerkhoff gained invaluable experience prior to his graduation from law school, magna cum laude, as a law school clerk to two different federal judges in the Western District of North Carolina.",
         "Mr. Kerkhoff draws upon his diverse work experience in the Midwest to truly relate to each business owner and client.  For example, Mr. Kerkhoff not only worked in retail management but also as a line worker in a Ford supplier’s automotive parts sorting factory; as a semi-pro baseball player and member of the Indiana Outlaws all time homeruns list; as a meat cutter in a small town butcher shop on Indiana's Ohio River; as a lumberyard associate in rural Northeast Missouri; and as a shop technician in a steel tower manufacturing plant in Southern Indiana.",
         "In his free time, Mr. Kerkhoff enjoys competitive shooting, fishing, building and mechanics, and trains Brazilian Jiu-jitsu as a purple belt under the Royce Gracie team Fight to Win.",
         "Mr. Kerkhoff is a licensed member of the Missouri, North Carolina, and South Carolina Bars."
      ]

   }

   render() {
      return (
         <TextInfoContext.Provider value={{
            paragraphs: this.state
         }} >
            {this.props.children}
         </TextInfoContext.Provider>
      )
   }
}

export { TextInfoContext, TextInfoProvider }