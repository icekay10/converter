'use client';
import Link from 'next/link';
import Head from 'next/head';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | UnitsBoard - World's Most Accurate Unit Converter</title>
        <meta 
          name="description" 
          content="The page you're looking for doesn't exist. Return to UnitsBoard for 99.99% accurate free unit conversions." 
        />
        <meta name="robots" content="noindex, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>

      <div className="notFoundPage">
        <main className="notFoundMain">
          <div className="notFoundContainer">
            <div className="mainContainer">
              
              {/* Hero Section */}
              <section className="heroSection">
                <div className="heroContent">
                  <h1 className="heroTitle">
                    404 - Page <span>Not Found</span>
                  </h1>
                  <p className="heroSubtitle">
                    The page you're looking for seems to have gone missing
                  </p>
                </div>
              </section>

              <div className="contentWrapper">
                {/* Mission Section */}
                <section className="section">
                  <div className="sectionHeader">
                    <h2 className="sectionTitle">What Might Have Happened?</h2>
                    <p className="sectionSubtitle">We'll help you get back to accurate conversions</p>
                  </div>
                  
                  <div className="missionContent">
                    <div className="missionText">
                      <p className="paragraph">
                        Don't worry! The page may have been moved, deleted, or there might be a typo in the URL. 
                        While we fix this, why not return to our world-class unit converter?
                      </p>
                      <p className="paragraph">
                        At UnitsBoard, we maintain <strong>99.99% accuracy</strong> in all conversions. 
                        Our algorithms are continuously refined and tested against international standards to ensure 
                        you get reliable results every time.
                      </p>
                    </div>
                    
                    <div className="accuracyBadge">
                      <div className="accuracyIcon">⚠️</div>
                      <div className="accuracyText">
                        <div className="accuracyTitle">Page Not Found</div>
                        <div className="accuracyDescription">But our converter works perfectly!</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Features Section */}
                <section className="section featuresSection">
                  <div className="sectionHeader">
                    <h2 className="sectionTitle">Why Choose UnitsBoard?</h2>
                    <p className="sectionSubtitle">Features that set us apart</p>
                  </div>
                  
                  <div className="featuresGrid">
                    <div className="featureCard">
                      <div className="featureIcon">💎</div>
                      <h3 className="featureTitle">Completely Free</h3>
                      <p className="featureDescription">No subscriptions, no premium features, no hidden costs.</p>
                    </div>
                    
                    <div className="featureCard">
                      <div className="featureIcon">🎯</div>
                      <h3 className="featureTitle">99.99% Accuracy</h3>
                      <p className="featureDescription">Verified against international standards for maximum precision.</p>
                    </div>
                    
                    <div className="featureCard">
                      <div className="featureIcon">⚡</div>
                      <h3 className="featureTitle">Lightning Fast</h3>
                      <p className="featureDescription">Instant conversions with no loading times or delays.</p>
                    </div>
                    
                    <div className="featureCard">
                      <div className="featureIcon">📱</div>
                      <h3 className="featureTitle">Fully Responsive</h3>
                      <p className="featureDescription">Works perfectly on all devices from smartphones to desktops.</p>
                    </div>
                    
                    <div className="featureCard">
                      <div className="featureIcon">🔒</div>
                      <h3 className="featureTitle">No Data Collection</h3>
                      <p className="featureDescription">We don't track, store, or sell your conversion data.</p>
                    </div>
                    
                    <div className="featureCard">
                      <div className="featureIcon">🌍</div>
                      <h3 className="featureTitle">Global Standards</h3>
                      <p className="featureDescription">Built on internationally recognized measurement standards.</p>
                    </div>
                  </div>
                </section>

                {/* Technology Section */}
                <section className="section">
                  <div className="sectionHeader">
                    <h2 className="sectionTitle">Our Technology</h2>
                    <p className="sectionSubtitle">Behind our accuracy guarantee</p>
                  </div>
                  
                  <div className="techContent">
                    <div className="techCard">
                      <div className="techIcon">🔬</div>
                      <h3 className="techTitle">Scientifically Validated</h3>
                      <p className="techDescription">
                        Our algorithms are based on internationally recognized scientific formulas 
                        and validated against NIST and SI standards.
                      </p>
                    </div>
                    
                    <div className="techCard">
                      <div className="techIcon">🔄</div>
                      <h3 className="techTitle">Continuous Testing</h3>
                      <p className="techDescription">
                        Every conversion is automatically tested against thousands of known values to ensure 
                        consistency and accuracy.
                      </p>
                    </div>
                    
                    <div className="techCard">
                      <div className="techIcon">📈</div>
                      <h3 className="techTitle">High Precision</h3>
                      <p className="techDescription">
                        Maintains precision up to 10 decimal places for scientific and engineering applications.
                      </p>
                    </div>
                    
                    <div className="techCard">
                      <div className="techIcon">🌐</div>
                      <h3 className="techTitle">Regular Updates</h3>
                      <p className="techDescription">
                        We continuously update to reflect changes in international standards.
                      </p>
                    </div>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="section">
                  <div className="sectionHeader">
                    <h2 className="sectionTitle">Get Back to Accurate Conversions</h2>
                    <p className="sectionSubtitle">Try our 99.99% accurate unit converter</p>
                  </div>
                  
                  <div className="ctaWrapper">
                    <Link href="/" className="ctaButton">
                      Convert Units Now
                    </Link>
                    <p className="ctaSubtext">
                      Free, accurate, and instant - experience precision unit conversion
                    </p>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        /* CSS Variables matching About-us page styling */
        :root {
          --primary-bg: #ffffff;
          --text-primary: #374151;
          --text-secondary: #6b7280;
          --accent-color: #2563eb;
          --accent-hover: #1d4ed8;
          --border-color: #e5e7eb;
          --card-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          --card-shadow-hover: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --feature-bg: #f8fafc;
        }

        /* Base Styles - Mobile First */
        .notFoundPage {
          background-color: var(--primary-bg);
          color: var(--text-primary);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
        }

        .notFoundMain {
          flex: 1;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 1rem;
          width: 100%;
          margin-top: 1rem;
        }

        .notFoundContainer {
          width: 100%;
          margin: 0 auto;
        }

        .mainContainer {
          width: 100%;
        }

        /* Hero Section */
        .heroSection {
          text-align: center;
          padding: 3rem 1rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 0.75rem;
          margin-bottom: 2rem;
        }

        .heroContent {
          max-width: 800px;
          margin: 0 auto;
        }

        .heroTitle {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .heroTitle span {
          color: #ffd700;
        }

        .heroSubtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Content Wrapper */
        .contentWrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Section Styles */
        .section {
          margin-bottom: 3rem;
        }

        .sectionHeader {
          text-align: center;
          margin-bottom: 2rem;
        }

        .sectionTitle {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .sectionSubtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
        }

        /* Mission Content */
        .missionContent {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
        }

        @media (min-width: 768px) {
          .missionContent {
            flex-direction: row;
            align-items: flex-start;
          }
        }

        .missionText {
          flex: 2;
        }

        .paragraph {
          margin-bottom: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Accuracy Badge */
        .accuracyBadge {
          flex: 1;
          background: var(--feature-bg);
          border-radius: 0.75rem;
          padding: 1.5rem;
          text-align: center;
          border: 2px dashed var(--accent-color);
          min-width: 250px;
        }

        .accuracyIcon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .accuracyTitle {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .accuracyDescription {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        /* Features Grid */
        .featuresSection {
          background: var(--feature-bg);
          padding: 2rem;
          border-radius: 0.75rem;
        }

        .featuresGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .featuresGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .featuresGrid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .featureCard {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: var(--card-shadow);
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
        }

        .featureCard:hover {
          transform: translateY(-4px);
          box-shadow: var(--card-shadow-hover);
        }

        .featureIcon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .featureTitle {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .featureDescription {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
        }

        /* Technology Content */
        .techContent {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .techContent {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .techContent {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .techCard {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: var(--card-shadow);
          border: 1px solid var(--border-color);
          text-align: center;
        }

        .techIcon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .techTitle {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .techDescription {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
        }

        /* CTA Section */
        .ctaWrapper {
          text-align: center;
          padding: 2rem;
          background: var(--feature-bg);
          border-radius: 0.75rem;
          border: 2px dashed var(--accent-color);
        }

        .ctaButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: var(--accent-color);
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.125rem;
          transition: all 0.2s ease-in-out;
          border: none;
          cursor: pointer;
          min-height: 3.5rem;
          min-width: 16rem;
          margin-bottom: 1rem;
        }

        .ctaButton:hover {
          background-color: var(--accent-hover);
          transform: translateY(-2px);
          box-shadow: var(--card-shadow-hover);
        }

        .ctaSubtext {
          color: var(--text-secondary);
          font-size: 0.95rem;
          max-width: 500px;
          margin: 0 auto;
        }

        /* ===== RESPONSIVE BREAKPOINTS ===== */

        /* Small Phones (320px - 374px) */
        @media (max-width: 374px) {
          .notFoundMain {
            padding: 0.5rem;
            margin-top: 0.5rem;
          }

          .heroSection {
            padding: 2rem 0.75rem 1.5rem;
          }

          .heroTitle {
            font-size: 1.75rem;
          }

          .heroSubtitle {
            font-size: 1rem;
          }

          .sectionTitle {
            font-size: 1.5rem;
          }

          .ctaButton {
            width: 100%;
            min-width: auto;
            padding: 0.875rem 1rem;
          }

          .featuresSection {
            padding: 1.5rem;
          }

          .accuracyBadge {
            min-width: auto;
          }
        }

        /* Medium Phones (375px - 424px) */
        @media (min-width: 375px) and (max-width: 424px) {
          .heroTitle {
            font-size: 2rem;
          }

          .heroSubtitle {
            font-size: 1.125rem;
          }
        }

        /* Large Phones (425px - 767px) */
        @media (min-width: 425px) and (max-width: 767px) {
          .heroTitle {
            font-size: 2.25rem;
          }
        }

        /* Tablets (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .notFoundMain {
            padding: 1.5rem;
            margin-top: 1.5rem;
          }

          .heroTitle {
            font-size: 3rem;
          }

          .heroSubtitle {
            font-size: 1.375rem;
          }

          .contentWrapper {
            padding: 0 2rem;
          }
        }

        /* Desktop (1024px - 1439px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .notFoundMain {
            padding: 2rem;
            margin-top: 2rem;
          }

          .heroTitle {
            font-size: 3.5rem;
          }

          .contentWrapper {
            padding: 0 3rem;
          }
        }

        /* Large Desktop (1440px and above) */
        @media (min-width: 1440px) {
          .notFoundMain {
            padding: 2.5rem;
            margin-top: 2.5rem;
          }

          .heroTitle {
            font-size: 4rem;
          }

          .contentWrapper {
            padding: 0 4rem;
          }
        }

        /* ===== ACCESSIBILITY & ENHANCEMENTS ===== */

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .ctaButton,
          .featureCard {
            transition: none;
          }
          
          .ctaButton:hover,
          .featureCard:hover {
            transform: none;
          }
        }

        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
          :root {
            --primary-bg: #1f2937;
            --text-primary: #f9fafb;
            --text-secondary: #d1d5db;
            --border-color: #374151;
            --card-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
            --card-shadow-hover: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
            --feature-bg: #374151;
          }

          .heroSection {
            background: linear-gradient(135deg, #4c51bf 0%, #702459 100%);
          }

          .featureCard,
          .techCard {
            background: #2d3748;
          }

          .accuracyBadge,
          .ctaWrapper {
            background: #4a5568;
          }
        }

        /* High Contrast Support */
        @media (prefers-contrast: high) {
          .ctaButton {
            border: 2px solid currentColor;
          }
          
          .featureCard,
          .techCard {
            border-width: 2px;
          }

          .accuracyBadge,
          .ctaWrapper {
            border-width: 3px;
          }
        }

        /* Focus States */
        .ctaButton:focus-visible {
          outline: 2px solid var(--accent-color);
          outline-offset: 2px;
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .ctaButton:hover,
          .featureCard:hover {
            transform: none;
          }
          
          .ctaButton:active {
            transform: scale(0.98);
          }
        }

        /* Landscape Orientation Optimizations */
        @media (max-height: 500px) and (orientation: landscape) {
          .notFoundMain {
            padding: 0.75rem;
            margin-top: 0.75rem;
            align-items: flex-start;
          }
          
          .heroSection {
            padding: 1.5rem 1rem;
          }
          
          .heroTitle {
            font-size: 1.75rem;
          }
          
          .section {
            margin-bottom: 1.5rem;
          }
        }

        /* Safe area insets for notched devices */
        @supports(padding: max(0px)) {
          .notFoundMain {
            padding-left: max(1rem, env(safe-area-inset-left));
            padding-right: max(1rem, env(safe-area-inset-right));
            padding-top: max(1rem, env(safe-area-inset-top));
          }
          
          .heroSection {
            padding-left: max(1rem, env(safe-area-inset-left));
            padding-right: max(1rem, env(safe-area-inset-right));
          }
        }
      `}</style>
    </>
  );
};

export default Custom404;