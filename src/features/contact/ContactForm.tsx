"use client";

import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ContactFormData, ContactFormErrors } from '../../types';
import { validateContactForm, hasErrors } from '../../utils/validation';
import { FormField } from './FormField';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes dynamically
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate field on blur
  const handleBlur = (field: keyof ContactFormData) => {
    const validationErrors = validateContactForm(formData);
    setErrors((prev) => ({ ...prev, [field]: validationErrors[field] }));
  };

  // Handle form submission and API integration
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Prevent double submission
    if (isSubmitting) return;

    // Validate all fields before submission
    const validationErrors = validateContactForm(formData);
    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Send data to Next.js API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      // Handle API response
      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
      
      // Differentiate error types
      if (error instanceof TypeError) {
        toast.error('Network connection failed. Please check your internet connection.');
      } else if (error instanceof SyntaxError) {
        toast.error('Server returned invalid response. Please try again.');
      } else {
        toast.error('Failed to send message. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="bg-white p-8 rounded-lg shadow-lg relative"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        <FormField
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={() => handleBlur('name')}
          error={errors.name}
          label="Full Name"
        />
        <FormField
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur('email')}
          error={errors.email}
          label="Email"
        />
        <FormField
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onBlur={() => handleBlur('subject')}
          error={errors.subject}
          label="Subject"
        />
        <FormField
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur('message')}
          error={errors.message}
          label="Message"
          rows={4}
        />

        <div className="text-center">
          <motion.button
            whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex justify-center py-3 px-12 border border-transparent shadow-sm text-base font-medium rounded-md text-white transition-colors duration-300 ${
              isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-500 hover:bg-indigo-600'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};
