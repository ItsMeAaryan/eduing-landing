import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Privacy Policy — EDUING.in',
  description: 'Read the EDUING.in Privacy Policy. Learn how we collect, use, and protect your personal data.',
  openGraph: {
    title: 'Privacy Policy — EDUING.in',
    description: 'Learn how EDUING.in collects, uses, and protects your personal data.',
  },
};

const sections = [
  {
    title: '1. Introduction',
    content: 'EDUING.in (\u201Cwe,\u201D \u201Cour,\u201D or \u201Cus\u201D) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform at eduing.in and our mobile applications.',
  },
  {
    title: '2. Information We Collect',
    content: 'We collect the following types of information:',
    list: [
      'Personal Information: Name, email address, phone number, date of birth',
      'Academic Information: 10th & 12th marks, entrance exam scores, preferred programs',
      'Documents: Marksheets, ID proofs, photographs, entrance exam scorecards',
      'Usage Data: Pages visited, features used, application activity',
      'Device Information: Browser type, IP address, operating system',
    ],
  },
  {
    title: '3. How We Use Your Information',
    list: [
      'To facilitate the university admissions process',
      'To create and manage your student profile',
      'To share your application with universities you apply to',
      'To provide real-time application tracking and notifications',
      'To improve our platform and user experience',
      'To communicate important updates about your applications',
      'To generate aggregate analytics (non-personal) for platform improvement',
    ],
  },
  {
    title: '4. Third-Party Services',
    content: 'We use Google Firebase for authentication, database (Firestore), and file storage. Google\u2019s privacy practices are governed by Google\u2019s Privacy Policy. We do not sell your personal data to any third party. Your documents and academic information are only shared with universities you explicitly apply to.',
  },
  {
    title: '5. Data Retention',
    content: 'We retain your personal data for as long as your account is active or as needed to provide our services. You may request deletion of your account and all associated data at any time. Upon account deletion, we will remove your data within 30 days, except where retention is required by law.',
  },
  {
    title: '6. Your Rights',
    content: 'You have the right to:',
    list: [
      'Access your personal data stored on our platform',
      'Update or correct inaccurate information',
      'Delete your account and all associated data',
      'Withdraw consent for data processing at any time',
      'Export your data in a portable format',
    ],
  },
  {
    title: '7. Data Security',
    content: 'We implement industry-standard security measures through Firebase\u2019s enterprise-grade infrastructure. All data is encrypted at rest and in transit using AES-256 and TLS 1.2+ encryption. Access to user data is restricted and monitored.',
  },
  {
    title: '8. Cookies',
    content: 'We use essential cookies to maintain your session and preferences. We do not use third-party advertising cookies. Analytics cookies are used in aggregate form only.',
  },
  {
    title: '9. Changes to This Policy',
    content: 'We may update this Privacy Policy periodically. We will notify you of any material changes via email or a prominent notice on our platform. Your continued use of EDUING.in after changes constitutes acceptance of the updated policy.',
  },
  {
    title: '10. Governing Law',
    content: 'This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.',
  },
];

export default function PrivacyPage() {
  return (
    <section className="section-padding" style={{ background: '#08080A', paddingTop: '160px' }} id="privacy">
      <div className="mx-auto" style={{ maxWidth: '900px' }}>
        <AnimatedSection>
          <span className="section-label">LEGAL</span>
          <h1 className="section-title mb-2" style={{ fontSize: '40px' }}>Privacy Policy</h1>
          <p className="text-[15px] mb-12" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Effective Date: April 2026
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mob-card">
            <div className="flex flex-col gap-10">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-[20px] font-bold text-white mb-3">{section.title}</h2>
                  {section.content && (
                    <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {section.content}
                    </p>
                  )}
                  {section.list && (
                    <ul className="list-disc list-inside text-[15px] leading-relaxed flex flex-col gap-2 ml-2 mt-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {section.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                <h2 className="text-[20px] font-bold text-white mb-3">Contact Us</h2>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  If you have questions about this Privacy Policy, contact us at:<br />
                  <strong className="text-white">Email:</strong>{' '}
                  <a href="mailto:eduing.in2026@gmail.com" className="hover:text-white transition-colors" style={{ color: '#818CF8' }}>
                    eduing.in2026@gmail.com
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
