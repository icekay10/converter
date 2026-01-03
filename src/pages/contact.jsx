import Head from 'next/head';
import styles from './Contact.module.css';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact UnitsBoard - Get Help & Support</title>
        <meta 
          name="description" 
          content="Need help with unit conversions? Contact UnitsBoard support team. We're here to help with questions, feedback, and technical support." 
        />
        <meta name="keywords" content="contact UnitsBoard, unit converter support, conversion help, technical support, feedback, contact form, customer service, unit conversion questions, measurement help, conversion assistance, support team, help center, contact information" />
        <link rel="canonical" href="https://www.unitsboard.com/contact" />
      </Head>

      <div className={styles.mainContainer}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Contact <span>UnitsBoard</span>
            </h1>
            <p className={styles.heroSubtitle}>
              We're here to help with all your unit conversion needs
            </p>
          </div>
        </section>

        <div className={styles.contentWrapper}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Get in Touch</h2>
              <p className={styles.sectionSubtitle}>Have questions or feedback? We'd love to hear from you</p>
            </div>
            
            <div className={styles.contactContent}>
              <div className={styles.contactFormContainer}>
                <div className={styles.formCard}>
                  <h3 className={styles.formTitle}>Send us a Message</h3>
                  <form className={styles.contactForm}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.formLabel}>Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className={styles.formInput}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className={styles.formInput}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                      <select id="subject" className={styles.formSelect} required>
                        <option value="">Select a topic</option>
                        <option value="support">Technical Support</option>
                        <option value="feedback">Feedback & Suggestions</option>
                        <option value="bug">Report a Bug</option>
                        <option value="feature">Feature Request</option>
                        <option value="business">Business Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.formLabel}>Message</label>
                      <textarea 
                        id="message" 
                        className={styles.formTextarea}
                        placeholder="Tell us how we can help..."
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    
                    <button type="submit" className={styles.submitButton}>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              
              <div className={styles.contactInfoContainer}>
                <div className={styles.supportCard}>
                  <div className={styles.supportIcon}>📧</div>
                  <div className={styles.supportText}>
                    <div className={styles.supportTitle}>Email Support</div>
                    <div className={styles.supportDescription}>
                      <a href="mailto:support@unitsboard.com" className={styles.contactLink}>
                        support@unitsboard.com
                      </a>
                    </div>
                    <div className={styles.supportSubtext}>We aim to respond within 24 hours</div>
                  </div>
                </div>
                
                <div className={styles.supportCard}>
                  <div className={styles.supportIcon}>💬</div>
                  <div className={styles.supportText}>
                    <div className={styles.supportTitle}>Live Help</div>
                    <div className={styles.supportDescription}>
                      Available Monday - Friday, 9AM - 5PM EST
                    </div>
                    <div className={styles.supportSubtext}>Quick answers to your questions</div>
                  </div>
                </div>
                
                <div className={styles.supportCard}>
                  <div className={styles.supportIcon}>🔧</div>
                  <div className={styles.supportText}>
                    <div className={styles.supportTitle}>Technical Issues</div>
                    <div className={styles.supportDescription}>
                      Report bugs or technical problems
                    </div>
                    <div className={styles.supportSubtext}>We'll investigate and fix them promptly</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.faqSection}`}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <p className={styles.sectionSubtitle}>Quick answers to common questions</p>
            </div>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>Is UnitsBoard really free?</h3>
                <p className={styles.faqAnswer}>
                  Yes, absolutely! UnitsBoard is completely free to use with no hidden fees, 
                  subscriptions, or premium features. We believe accurate unit conversion 
                  should be accessible to everyone.
                </p>
              </div>
              
              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>How accurate are your conversions?</h3>
                <p className={styles.faqAnswer}>
                  We guarantee 99.99% accuracy on all conversions. Our algorithms are 
                  continuously tested against international standards (NIST, SI) to ensure 
                  maximum precision.
                </p>
              </div>
              
              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>Do you store my conversion data?</h3>
                <p className={styles.faqAnswer}>
                  No, we don't track, store, or sell any of your conversion data. 
                  Your privacy is important to us, and all conversions are processed 
                  securely and anonymously.
                </p>
              </div>
              
              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>Can I suggest new unit categories?</h3>
                <p className={styles.faqAnswer}>
                  Absolutely! We're always looking to expand our unit categories. 
                  Please use the contact form to suggest new units or categories you'd 
                  like to see added.
                </p>
              </div>
              
              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>How often are conversion rates updated?</h3>
                <p className={styles.faqAnswer}>
                  We update all conversion factors and standards in real-time. 
                  Whenever international standards change, we immediately update 
                  our system to reflect these changes.
                </p>
              </div>
              
              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>Is there a mobile app available?</h3>
                <p className={styles.faqAnswer}>
                  UnitsBoard is fully responsive and works perfectly on all mobile devices. 
                  You can add it to your home screen for quick access, just like a native app!
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Other Ways to Connect</h2>
              <p className={styles.sectionSubtitle}>Stay updated with the latest from UnitsBoard</p>
            </div>
            
            <div className={styles.connectGrid}>
              <div className={styles.connectCard}>
                <div className={styles.connectIcon}>📢</div>
                <h3 className={styles.connectTitle}>Follow Updates</h3>
                <p className={styles.connectDescription}>
                  Get notified about new features, unit categories, and improvements
                </p>
                <a href="#" className={styles.connectLink}>View Changelog →</a>
              </div>
              
              <div className={styles.connectCard}>
                <div className={styles.connectIcon}>💡</div>
                <h3 className={styles.connectTitle}>Share Feedback</h3>
                <p className={styles.connectDescription}>
                  Help us improve by sharing your suggestions and experiences
                </p>
                <a href="#" className={styles.connectLink}>Submit Feedback →</a>
              </div>
              
              <div className={styles.connectCard}>
                <div className={styles.connectIcon}>👥</div>
                <h3 className={styles.connectTitle}>Join Community</h3>
                <p className={styles.connectDescription}>
                  Connect with other users and share tips about unit conversions
                </p>
                <a href="#" className={styles.connectLink}>Visit Forum →</a>
              </div>
              
              <div className={styles.connectCard}>
                <div className={styles.connectIcon}>📚</div>
                <h3 className={styles.connectTitle}>Learn More</h3>
                <p className={styles.connectDescription}>
                  Explore our guides and tutorials on unit conversion best practices
                </p>
                <a href="#" className={styles.connectLink}>View Guides →</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactPage;