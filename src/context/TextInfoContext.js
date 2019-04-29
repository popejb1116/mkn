import React, { Component } from 'react'

const TextInfoContext = React.createContext()

class TextInfoProvider extends Component {

   state = {

      //TODO: LINKS
      home_paragraphs: [
         "The Law Office of Mark N. Kerkhoff, PLLC is an exclusive employment law firm representing small to mid-size businesses and select individuals across North and South Carolina.",
         "As a sole practitioner, I am honored to maintain a Martindale-Hubbell Ratting of 'AV Preeminent' Peer Review Rated, the highest rating available as to ethical standards and professional ability in the prestigious Martindale-Hubbell system, in addition to recognition for multiple years in the Super Lawyers Rising Stars edition.  My firm strives to provide sophisticated and aggressive employment law litigation counsel as well as value centered HR solutions for small to mid-size employers.",
         "- With experience at one of the largest labor and employment law defense firms in the nation, my firm represents select businesses seeking aggressive, diligent, and value centered employment law defense litigation counsel. My firm defends small to mid-size employers both in court and before administrative agencies such as the Equal Employment Opportunity Commission, Department of Labor, and other state and federal agencies.  I also represent a limited number of individual employees in court with highly meritorious employment law litigation claims.",
         " - My practice means employment contracts.  A central focus of my practice is the drafting, preparation, review, and enforcement of employment contracts such as agreements not to compete, confidentiality agreements, severance agreements, non-solicitation documents, apprenticeship documents, independent contractor arrangements, and literally all other contracts arising out of the employment relationship.",
         " - My firm provides human resources consulting services to small and mid-sized businesses seeking to prevent costly employment disputes and avoid protracted litigation. I frequently advise businesses with comprehensive, step-by-step plans to assure compliance with the myraid of dynamic employment regulations in today's modern regulatory environment. This includes reviews of high risk employee terminations, reviews of existing employee handbooks, the formulation of employment policies, responses to individual employee challenges, and regulatory compliance audits.  My firm offers an initial complimentary on-site human resources consultation along with a free initial compliance analysis to small and mid-sized employers.",
         " to contact us today."
      ],
      
      // TODO: EMBEDED LINKS
      litigation_paragraphs: [
         "My firm is committed to excellence and professionalism in the thoughtful, diligent, and aggressive litigation of employment law matters in federal and state courts.  As a solo practitioner, I frequently defend small to medium sized employers in employment law litigation and also aggressively prosecute a handful of highly meritorious employee claims each year.  I strive to objectively analyze my clients' challenges from both sides of the issue without bias or puffery.  I believe this gives me a very unique perspective in the world of employment law.  My firm is able to approach potential litigation from both sides of the issue, advise clients accordingly, and many times anticipate and thwart our opponents' approach either in litigation or before claims are ever filed."
      ],

      contracts_paragraphs: [
         "My firm frequently advises small to mid-size businesses on contractual arrangements and works closely with management to prepare highly customized employment agreements.  These contracts often include complex compensation arrangements, detailed performance expectations, and other unique terms and conditions with one goal in mind: to memorialize the business owner's goals and expectations, minimize risk, and maximize an employee's potential to accomplish employer expectations through the proper employment framework.",
         "These type of employment contracts may include, for example, a highly complex commission compensation arrangement for an experienced doctor; a renewable for cause contract with a modified termination provision following an initial term for a board appointed executive director; a conditional ownership purchase option integrated into an employment contract for a business partner employee; an agreement of non-competition and non-solicitation for a current employee along with a release of prior claims; or an offer letter memorializing at-will employment with appropriate language to create a fixed-salary fluctuating workweek arrangement under federal wage and hour regulations.",
         "Quite simply, my firm prepares, drafts, and reviews a wide variety of employment contracts with an eye towards attention to detail, creativity, and a strong grounding in contract law.",
         "I also frequently review many of these same types of contracts for individual employees, including non-competition agreements, non-solicitation agreements, severance agreements, or standard employment contracts, in addition to the negotiation of these agreements with a positive approach to the new employment relationship.",
         "My firm's experience on both sides of contractual disputes gives me a very unique perspective.",
         "I am able to review and analyze an employer's contract with knowledge and experience in the disputes or claims an individual employee may claim under the contract.",
         "I am able to review an employee's contract with an eye towards the defenses or claims the employer will raise to the contract's enforceability.",
         "Ask our clients.  Ask our opponents.  MKN means employment contracts."
      ],

      hr_consulting_paragraphs: [
         "",
      ],

      research_paragraphs: [
         "",
      ],

      attorney_profile_paragraphs: [
         "",
      ]

   }

   render() {
      return (
         <TextInfoContext.Provider value={{
            state: this.state
         }} >
            {this.props.children}
         </TextInfoContext.Provider>
      )
   }
}

export { TextInfoContext, TextInfoProvider }