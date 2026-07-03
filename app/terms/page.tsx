import type { Metadata } from 'next';
import LegalPageLayout, { LegalSectionBlock, type LegalSection } from '@/components/ui/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Terms & Conditions — EDUING.in',
  description: 'Read the Terms and Conditions for using EDUING.in, the unified university admissions platform.',
  openGraph: {
    title: 'Terms & Conditions — EDUING.in',
    description: 'Terms and Conditions for using EDUING.in platform.',
  },
};

const sections: LegalSection[] = [
  {
    title: '1. Acceptance of Terms',
    content:
      'By accessing and using EDUING.in (\u201Cthe Platform\u201D), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use the Platform. These terms apply to all users, including students, universities, and visitors.',
  },
  {
    title: '2. Eligibility',
    content:
      'You must be at least 16 years of age to create an account on EDUING.in. Users under 18 must have consent from a parent or legal guardian. By creating an account, you represent that you meet these eligibility requirements. University accounts must be created by authorized institutional representatives.',
  },
  {
    title: '3. Student Responsibilities',
    list: [
      'Provide accurate and truthful personal and academic information',
      'Upload genuine, unaltered documents and certificates',
      'Keep your account credentials secure and confidential',
      'Respond to communications from universities in a timely manner',
      'Not misuse the Platform for any purpose other than its intended use',
      'Maintain updated contact information on your profile',
    ],
  },
  {
    title: '4. University Partner Responsibilities',
    list: [
      'Provide accurate institutional and program information',
      'Process applications in a fair and timely manner',
      'Update application statuses promptly on the Platform',
      'Comply with all applicable education regulations',
      'Maintain confidentiality of student application data',
      'Not discriminate against applicants on prohibited grounds',
    ],
  },
  {
    title: '5. Prohibited Activities',
    content: 'The following activities are strictly prohibited:',
    list: [
      'Uploading fake, forged, or tampered documents',
      'Providing false academic credentials or personal information',
      'Creating multiple accounts for the same individual',
      'Spamming universities with irrelevant applications',
      'Attempting to hack, disrupt, or manipulate the Platform',
      'Scraping or harvesting data from the Platform',
      'Impersonating another user or institution',
    ],
  },
  {
    title: '6. Intellectual Property',
    content:
      'EDUING.in owns all intellectual property rights in and to the Platform, including but not limited to the website design, logos, trademarks, software, and content. Users retain ownership of their uploaded documents and personal data but grant EDUING.in a license to use this content solely for the purpose of facilitating the admissions process.',
  },
  {
    title: '7. Limitation of Liability',
    content:
      'EDUING.in acts as a facilitator between students and universities. We do not guarantee admission to any institution. We are not liable for admission decisions made by universities, delays in application processing, or any loss arising from use of the Platform. The Platform is provided \u201Cas is\u201D without warranties of any kind.',
  },
  {
    title: '8. Account Termination',
    content:
      'We reserve the right to suspend or terminate accounts that violate these Terms, engage in prohibited activities, or are inactive for an extended period. Users may delete their accounts at any time through their profile settings.',
  },
  {
    title: '9. Governing Law & Dispute Resolution',
    content:
      'These Terms are governed by the laws of India, specifically the State of Karnataka. Any disputes arising from these Terms or use of the Platform shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India. Parties agree to attempt mediation before pursuing litigation.',
  },
  {
    title: '10. Changes to Terms',
    content:
      'EDUING.in reserves the right to modify these Terms at any time. Material changes will be communicated via email and/or a prominent notice on the Platform. Continued use of the Platform after changes constitutes acceptance of the revised Terms.',
  },
];

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions" effectiveDate="April 2026" id="terms">
      {sections.map((section, i) => (
        <LegalSectionBlock key={i} section={section} />
      ))}

      <div className="border-t border-white/[0.08] pt-4">
        <h2 className="mb-3 text-xl font-bold text-white">Contact</h2>
        <p className="text-[15px] leading-relaxed text-white/55">
          For questions about these Terms, contact us at:
          <br />
          <strong className="text-white">Email:</strong>{' '}
          <a href="mailto:eduing.in2026@gmail.com" className="text-accent-lighter transition-colors hover:text-white">
            eduing.in2026@gmail.com
          </a>
          <br />
          <strong className="text-white">Location:</strong> Bengaluru, Karnataka, India
        </p>
      </div>
    </LegalPageLayout>
  );
}
