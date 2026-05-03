import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Terms & Conditions — EDUING.in',
  description: 'Read the Terms and Conditions for using EDUING.in, the unified university admissions platform.',
  openGraph: {
    title: 'Terms & Conditions — EDUING.in',
    description: 'Terms and Conditions for using EDUING.in platform.',
  },
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using EDUING.in (\u201Cthe Platform\u201D), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use the Platform. These terms apply to all users, including students, universities, and visitors.',
  },
  {
    title: '2. Eligibility',
    content: 'You must be at least 16 years of age to create an account on EDUING.in. Users under 18 must have consent from a parent or legal guardian. By creating an account, you represent that you meet these eligibility requirements. University accounts must be created by authorized institutional representatives.',
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
    content: 'EDUING.in owns all intellectual property rights in and to the Platform, including but not limited to the website design, logos, trademarks, software, and content. Users retain ownership of their uploaded documents and personal data but grant EDUING.in a license to use this content solely for the purpose of facilitating the admissions process.',
  },
  {
    title: '7. Limitation of Liability',
    content: 'EDUING.in acts as a facilitator between students and universities. We do not guarantee admission to any institution. We are not liable for admission decisions made by universities, delays in application processing, or any loss arising from use of the Platform. The Platform is provided \u201Cas is\u201D without warranties of any kind.',
  },
  {
    title: '8. Account Termination',
    content: 'We reserve the right to suspend or terminate accounts that violate these Terms, engage in prohibited activities, or are inactive for an extended period. Users may delete their accounts at any time through their profile settings.',
  },
  {
    title: '9. Governing Law & Dispute Resolution',
    content: 'These Terms are governed by the laws of India, specifically the State of Karnataka. Any disputes arising from these Terms or use of the Platform shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India. Parties agree to attempt mediation before pursuing litigation.',
  },
  {
    title: '10. Changes to Terms',
    content: 'EDUING.in reserves the right to modify these Terms at any time. Material changes will be communicated via email and/or a prominent notice on the Platform. Continued use of the Platform after changes constitutes acceptance of the revised Terms.',
  },
];

export default function TermsPage() {
  return (
    <section className="section-padding" style={{ background: '#08080A', paddingTop: '160px' }} id="terms">
      <div className="mx-auto" style={{ maxWidth: '900px' }}>
        <AnimatedSection>
          <span className="section-label">LEGAL</span>
          <h1 className="section-title mb-2" style={{ fontSize: '40px' }}>Terms & Conditions</h1>
          <p className="text-[15px] mb-12" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Last Updated: April 2026
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mob-card">
            <div className="flex flex-col gap-10">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-[20px] font-bold text-white mb-3">{section.title}</h2>
                  {section.content && (
                    <p className="text-[15px] leading-relaxed mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {section.content}
                    </p>
                  )}
                  {section.list && (
                    <ul className="list-disc list-inside text-[15px] leading-relaxed flex flex-col gap-2 ml-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {section.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                <h2 className="text-[20px] font-bold text-white mb-3">Contact</h2>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  For questions about these Terms, contact us at:<br />
                  <strong className="text-white">Email:</strong>{' '}
                  <a href="mailto:aaryanlsichey007@gmail.com" className="hover:text-white transition-colors" style={{ color: '#818CF8' }}>
                    aaryanlsichey007@gmail.com
                  </a><br />
                  <strong className="text-white">Location:</strong> Bengaluru, Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
