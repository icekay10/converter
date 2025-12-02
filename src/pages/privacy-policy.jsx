import Head from 'next/head';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - UnitConvert | Your Data Protection</title>
        <meta 
          name="description" 
          content="UnitConvert's Privacy Policy: Learn how we protect your data, our commitment to privacy, and how we handle information. No data collection, no tracking." 
        />
        <meta name="keywords" content="privacy policy, data protection, unit converter privacy, no data collection, privacy commitment" />
        <link rel="canonical" href="https://www.unitsboard.com/privacy-policy" />
      </Head>

      <div className={styles.mainContainer}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Privacy <span>Policy</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Your privacy is our priority. Learn how we protect your data.
            </p>
          </div>
        </section>

        <div className={styles.contentWrapper}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Introduction</h2>
            </div>
            
            <div className={styles.contentText}>
              <p className={styles.paragraph}>
                At UnitsBoard, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                and use our services. UnitConvert is completely free to use and does not require account creation or personal 
                information for basic functionality.
              </p>
              <p className={styles.paragraph}>
                By using UnitsBoard, you agree to the terms of this Privacy Policy. If you do not agree with the terms, 
                please do not access or use our services. We reserve the right to modify this Privacy Policy at any time, 
                and we encourage you to review it periodically for changes.
              </p>
            </div>
          </section>

          <section className={`${styles.section} ${styles.altSection}`}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Information We Collect</h2>
            </div>
            
            <div className={styles.contentText}>
              <p className={styles.paragraph}>
                <strong>No Personal Data Collection:</strong> UnitsBoard operates on a strict no-data-collection principle. 
                We do not collect, store, or process any personal information from our users. Your conversions and calculations 
                remain entirely on your device.
              </p>
              <p className={styles.paragraph}>
                <strong>Anonymous Usage Analytics:</strong> We may collect completely anonymous, aggregated usage data to help 
                us understand how our service is used and improve user experience. This data cannot be traced back to individual users.
              </p>
              <div className={styles.featureGrid}>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🔒</div>
                  <h3 className={styles.featureTitle}>No Data Storage</h3>
                  <p className={styles.featureDescription}>
                    Your conversion data never leaves your browser. We don't store any calculation history or personal information.
                  </p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🚫</div>
                  <h3 className={styles.featureTitle}>No Tracking</h3>
                  <p className={styles.featureDescription}>
                    We don't use cookies, tracking pixels, or any other user tracking technologies. Your privacy is guaranteed.
                  </p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🌐</div>
                  <h3 className={styles.featureTitle}>No Account Required</h3>
                  <p className={styles.featureDescription}>
                    Use our service immediately without creating an account. No email, no password, no personal details needed.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>How We Use Information</h2>
            </div>
            
            <div className={styles.contentText}>
              <p className={styles.paragraph}>
                Since we don't collect personal data, there's no personal information to use or share. Our service is designed 
                to work entirely client-side, meaning all calculations happen in your browser without sending data to our servers.
              </p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <strong>Local Processing:</strong> All unit conversions are processed locally on your device
                </li>
                <li className={styles.bulletItem}>
                  <strong>No Server Storage:</strong> Conversion data is never stored on our servers
                </li>
                <li className={styles.bulletItem}>
                  <strong>Anonymous Analytics:</strong> Only aggregated, non-identifiable data for service improvement
                </li>
                <li className={styles.bulletItem}>
                  <strong>No Third-Party Sharing:</strong> We don't share any data with third parties
                </li>
              </ul>
            </div>
          </section>

          <section className={`${styles.section} ${styles.altSection}`}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Data Security</h2>
            </div>
            
            <div className={styles.contentText}>
              <p className={styles.paragraph}>
                We implement appropriate technical and organizational security measures to protect any anonymous data we collect. 
                However, since we don't collect personal information, the risk of data breaches affecting user privacy is minimized.
              </p>
              <p className={styles.paragraph}>
                Our security measures include regular security assessments, secure server infrastructure, and following 
                industry best practices for web application security.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Third-Party Services</h2>
            </div>
            
            <div className={styles.contentText}>
              <p className={styles.paragraph}>
                UnitsBoard may use third-party services for hosting and analytics. These services only receive anonymous, 
                aggregated data and are bound by their own privacy policies and data protection agreements.
              </p>
              <p className={styles.paragraph}>
                We carefully select third-party providers who share our commitment to privacy and data protection.
              </p>
            </div>
          </section>

          <section className={`${styles.section} ${styles.altSection}`}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Changes to This Privacy Policy</h2>
            </div>
            
            <div className={styles.contentText}>
              <p className={styles.paragraph}>
                We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically 
                for any changes. We will notify you of any significant changes by posting the new Privacy Policy on this page 
                and updating the "effective date" at the top.
              </p>
              <p className={styles.paragraph}>
                Your continued use of our service after we post any modifications to the Privacy Policy on this page 
                constitutes your acknowledgment of the modifications and your consent to abide by and be bound by the 
                modified Privacy Policy.
              </p>
              <p className={styles.paragraph}>
                If we make any material changes to this Privacy Policy, we will notify you either through the email address 
                you have provided us, or by placing a prominent notice on our website.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Contact Us</h2>
            </div>
            
            <div className={styles.contentText}>
              <p className={styles.paragraph}>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
              </p>
              
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;