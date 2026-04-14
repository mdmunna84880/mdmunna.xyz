import React from 'react';
import { Section } from '../../components/layout/Section';
import { Heading } from '../../components/ui/Heading';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

const Contact = () => {
  return (
    <Section id="contact">
      <Heading 
        title="Let's Connect" 
        subtitle="I'm open to new opportunities and collaborations. Feel free to reach out."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <ContactInfo />
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
