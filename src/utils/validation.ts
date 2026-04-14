import { ContactFormData, ContactFormErrors } from '../types';

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  // Improved email validation regex - requires at least 2 char TLD
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(data.email)) {
    errors.email = 'Please enter a valid email';
  }
  if (!data.subject.trim()) errors.subject = 'Subject is required';
  if (!data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.values(errors).some((error) => error !== undefined);
}
