import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact — EDUING.in',
  description: "Get in touch with the EDUING.in team for support or university partnerships.",
};

export default function ContactPage() {
  return <ContactForm />;
}
