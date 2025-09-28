import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

// Social links data from your resume
const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/mdmunna84880', icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
        </svg>
    )},
    { name: 'LinkedIn', href: 'https://linkedin.com/in/mdmunna84880', icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
    )},
    { name: 'X (Twitter)', href: 'https://x.com/mdmunna84880', icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    )},
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable the button
    // setStatus('Sending...');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log('SUCCESS!', result.text);
      setStatus('SUCCESS');
      form.current.reset();
    }, (error) => {
      console.log('FAILED...', error.text);
      setStatus('FAILED');
    })
    .finally(() => {
      // This will run after success OR failure
      setIsSubmitting(false); // Re-enable the button
      setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-indigo-900 sm:text-4xl">Let's Connect</h2>
          <p className="mt-4 text-lg text-gray-500">I'm open to new opportunities and collaborations. Feel free to reach out.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">Contact Directly</h3>
                <div className="space-y-4 text-gray-600">
                <p className="flex items-center"><svg className="w-5 h-5 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><a href="mailto:mdmunna19434@gmail.com" className="hover:text-cyan-500">mdmunna19434@gmail.com</a></p>
                <p className="flex items-center"><svg className="w-5 h-5 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>+91 7050498963</p>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">Find me on</h3>
                <div className="flex space-x-6">{socialLinks.map((item) => (<a key={item.name} href={item.href} className="text-gray-400 hover:text-cyan-500 transition-transform duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer"><span className="sr-only">{item.name}</span><item.icon className="h-7 w-7" aria-hidden="true" /></a>))}</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              {/* Interactive Form Fields */}
              <div className="relative">
                <input type="text" name="user_name" id="user_name" required className="peer block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Full Name" />
                <label htmlFor="user_name" className="absolute left-2 -top-2.5 bg-white px-1 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm">Full Name</label>
              </div>
              <div className="relative">
                <input type="email" name="user_email" id="user_email" required className="peer block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Email" />
                <label htmlFor="user_email" className="absolute left-2 -top-2.5 bg-white px-1 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
              </div>
              <div className="relative">
                <input type="text" name="subject" id="subject" required className="peer block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Subject" />
                <label htmlFor="subject" className="absolute left-2 -top-2.5 bg-white px-1 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm">Subject</label>
              </div>
              <div className="relative">
                <textarea name="message" id="message" rows={4} required className="peer block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-2 -top-2.5 bg-white px-1 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm">Message</label>
              </div>
              
              <div className="text-center">
                <motion.button
  whileHover={{ scale: isSubmitting ? 1 : 1.05 }} // Disable hover effect when submitting
  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}   // Disable tap effect when submitting
  type="submit"
  disabled={isSubmitting} // Disable button when submitting
  className={`inline-flex justify-center py-3 px-12 border border-transparent shadow-sm text-base font-medium rounded-md text-white transition-colors duration-300 ${
    isSubmitting 
      ? 'bg-gray-400 cursor-not-allowed' 
      : 'bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
  }`}
>
  {isSubmitting ? 'Sending...' : 'Send Message'}
</motion.button>
              </div>
            </form>
          </motion.div>
        </div>
        
        <AnimatePresence>
            {(status === 'SUCCESS' || status === 'FAILED') && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className={`fixed bottom-10 right-10 p-4 rounded-lg shadow-xl text-white ${status === 'SUCCESS' ? 'bg-green-500' : 'bg-red-500'}`}
                >
                {status === 'SUCCESS' ? 'Message sent successfully!' : 'Failed to send. Please try again.'}
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;