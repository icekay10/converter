import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerLogo}>
            <span>UnitsBoard</span>
          </h3>
          <p className={styles.footerDescription}>
            The world's most accurate free unit converter. 
            99.99% precision guaranteed for all your conversion needs.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <span className={styles.socialIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.01C21.04 4.45 20.01 4.75 18.94 4.89C20.01 4.27 20.82 3.24 21.2 2C20.2 2.58 19.1 2.99 17.94 3.24C16.99 2.29 15.64 1.74 14.14 1.74C11.63 1.74 9.59 3.78 9.59 6.29C9.59 6.67 9.63 7.04 9.71 7.39C6.49 7.21 3.61 5.66 1.75 3.29C1.34 4.04 1.1 4.89 1.1 5.79C1.1 7.5 1.97 9.02 3.27 9.91C2.42 9.88 1.61 9.65 0.89 9.27V9.33C0.89 11.56 2.44 13.44 4.49 13.89C4.09 14 3.67 14.06 3.24 14.06C2.92 14.06 2.61 14.03 2.31 13.97C2.93 15.82 4.62 17.17 6.61 17.21C5.07 18.45 3.09 19.17 0.95 19.17C0.56 19.17 0.18 19.15 -0.2 19.11C1.81 20.44 3.97 21.15 6.29 21.15C14.13 21.15 18.33 14.12 18.33 7.84C18.33 7.64 18.33 7.44 18.32 7.25C19.36 6.52 20.24 5.59 20.93 4.53L22 4.01Z" fill="currentColor"/>
                </svg>
              </span>
            </a>
            <a href="#" className={styles.socialLink} aria-label="GitHub">
              <span className={styles.socialIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.55C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.665 3.735 16.65C4.68 16.635 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.065 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C20.565 21.795 24 17.295 24 12C24 5.37 18.63 0 12 0Z" fill="currentColor"/>
                </svg>
              </span>
            </a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <span className={styles.socialIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="currentColor"/>
                </svg>
              </span>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Email">
              <span className={styles.socialIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerTitle}>Quick Links</h4>
          <Link href="/" className={styles.footerLink}>
            Home
          </Link>
          <Link href="/units-converter" className={styles.footerLink}>
            Converter
          </Link>
          <Link href="/units-details" className={styles.footerLink}>
            Unit Details
          </Link>
          <Link href="/about" className={styles.footerLink}>
            About Us
          </Link>
          <Link href="/contact" className={styles.footerLink}>
            Contact
          </Link>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerTitle}>Legal</h4>
          <Link href="/privacy-policy" className={styles.footerLink}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className={styles.footerLink}>
            Terms of Service
          </Link>
          
          <div className={styles.accuracyBadge}>
            <div className={styles.accuracyIcon}>✓</div>
            <div className={styles.accuracyText}>
              <div className={styles.accuracyTitle}>99.99% Accuracy</div>
              <div className={styles.accuracySubtitle}>Verified & Guaranteed</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © {currentYear} UnitsBoard. All rights reserved. 100% Free • 99.99% Accuracy
        </p>
        <div className={styles.footerNav}>
          <Link href="/privacy-policy" className={styles.footerSmallLink}>
            Privacy Policy
          </Link>
          <span className={styles.separator}>•</span>
          <Link href="/terms" className={styles.footerSmallLink}>
            Terms
          </Link>
          <span className={styles.separator}>•</span>
          <Link href="/contact" className={styles.footerSmallLink}>
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;