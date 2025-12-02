import { useState } from 'react';
import Head from 'next/head';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Using FormSubmit.co endpoint - replace with your actual email
      const response = await fetch('https://formsubmit.co/ajax/your-email@example.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>Contact UnitConvert - Get in Touch</title>
        <meta 
          name="description" 
          content="Contact UnitConvert team for support, feedback, or partnership inquiries. We're here to help with all your unit conversion needs." 
        />
        <meta name="keywords" content="contact unitconvert, unit converter support, feedback, contact form" />
        <link rel="canonical" href="https://www.unitconvertershub.com/contact" />
      </Head>

      <div className={styles.contactContainer}>
        <div className={styles.formWrapper}>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Get in Touch</h2>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Name</label>
                <input
                  className={styles.formInput}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div className={styles.formField}>
                <label className={styles.formLabel}>Email</label>
                <input
                  className={styles.formInput}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
              
              <div className={styles.formField}>
                <label className={styles.formLabel}>Subject</label>
                <input
                  className={styles.formInput}
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                />
              </div>
              
              <div className={styles.formField}>
                <label className={styles.formLabel}>Message</label>
                <textarea
                  className={styles.formTextarea}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  required
                  placeholder="Your message..."
                />
              </div>
              
              <button 
                className={styles.submitButton} 
                type="submit" 
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'success' && (
                <div className={`${styles.statusMessage} ${styles.success}`}>
                  Message sent successfully!
                </div>
              )}
              
              {status === 'error' && (
                <div className={`${styles.statusMessage} ${styles.error}`}>
                  Error sending message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;