import React from 'react'
import PrivacyPolicySection from '../components/Privacy/PrivacyPolicySection'
import InformationCollect from '../components/Privacy/InformationCollect'
import InformationUseSection from '../components/Privacy/InformationUseSection'
import DynamicSection from '../components/Privacy/DynamicSection'
import SharingInformationSection from '../components/Privacy/SharingInformationSection '
import PrivacySectionData from '../components/Privacy/PrivacySectionData'
import FintechSection from '../components/About/FintechSection';

export const metadata = {
    title: 'Privacy & Cookie Policy - ',
    description:
      'At Market Mavens, we are committed to safeguarding your privacy. This Privacy & Cookie Policy explains how we collect, use, and protect your personal information, as well as how we use cookies and similar technologies on our website.',
  };

const page = () => {
  return (
    <>
    <PrivacyPolicySection />
    <InformationCollect />
    <InformationUseSection />
    <DynamicSection />
    <SharingInformationSection />
    <PrivacySectionData />
    <FintechSection
        title="Contact Us"
        description="If you have any questions or concerns about this Privacy & Cookie Policy or how we handle your
personal information, please contact us."
        buttonText="Book a Consultation"
      />
    </>
  )
}

export default page