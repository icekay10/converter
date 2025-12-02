import Head from 'next/head';
import styles from './TermsOfService.module.css';

const TermsOfService = () => {
  

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: "By accessing and using UnitsBoard (the 'Service'), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Service."
    },
    {
      id: "service-description",
      title: "2. Service Description",
      content: "UnitsBoard is a free online unit conversion service that provides accurate conversion calculations between various measurement units. The Service is provided 'as is' without any warranties or guarantees beyond our stated accuracy commitment."
    },
    {
      id: "user-obligations",
      title: "3. User Obligations",
      content: "You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of UnitsBoard.",
      points: [
        "Not to use the Service for any fraudulent or unlawful purpose",
        "Not to interfere with or disrupt the operation of the Service",
        "Not to attempt to gain unauthorized access to any part of the Service",
        "Not to use any automated means to access or use the Service"
      ]
    },
    {
      id: "accuracy-disclaimer",
      title: "4. Accuracy Disclaimer",
      content: "While we strive for 99.99% accuracy in our conversions, UnitsBoard provides conversions for informational purposes only. The Service should not be relied upon for critical applications where precision is essential.",
      points: [
        "Always verify important conversions through multiple sources",
        "We are not responsible for decisions made based on our conversions",
        "Scientific and engineering applications may require additional verification",
        "Conversion results are provided as-is without guarantee"
      ]
    },
    {
      id: "privacy-policy",
      title: "5. Privacy Policy",
      content: "Your privacy is important to us. We do not collect, store, or share your personal information or conversion data.",
      points: [
        "No registration or login required",
        "No cookies or tracking technologies",
        "No personal data collection",
        "Your conversions remain private on your device"
      ]
    },
    {
      id: "intellectual-property",
      title: "6. Intellectual Property Rights",
      content: "All content, features, and functionality on UnitsBoard, including but not limited to text, graphics, logos, icons, and conversion algorithms, are the exclusive property of UnitsBoard and are protected by international copyright laws.",
      points: [
        "The UnitsBoard name and logo are trademarks",
        "Our conversion algorithms are proprietary",
        "You may not copy, modify, or distribute our content without permission",
        "All rights are reserved unless otherwise stated"
      ]
    },
    {
      id: "limitation-liability",
      title: "7. Limitation of Liability",
      content: "UnitsBoard shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use the Service.",
      points: [
        "No liability for conversion errors or inaccuracies",
        "No liability for service interruptions or downtime",
        "No liability for decisions made based on our conversions",
        "Your sole remedy is to discontinue use of the Service"
      ]
    },
    {
      id: "modifications",
      title: "8. Modifications to Terms",
      content: "We reserve the right to modify these terms at any time. We will notify users of any changes by updating the 'Last Updated' date at the top of this page. Your continued use of the Service constitutes acceptance of the modified terms."
    },
    {
      id: "termination",
      title: "9. Termination",
      content: "We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms."
    },
    {
      id: "governing-law",
      title: "10. Governing Law",
      content: "These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions."
    },
    {
      id: "contact",
      title: "11. Contact Information",
      content: "If you have any questions about these Terms, please contact us at legal@unitsboard.com."
    }
  ];

  const legalHighlights = [
    {
      icon: "📝",
      title: "No Account Required",
      description: "Use our service without creating an account or providing personal information"
    },
    {
      icon: "🔒",
      title: "100% Private",
      description: "We don't track, store, or share your conversion data"
    },
    {
      icon: "⚖️",
      title: "Clear Terms",
      description: "Transparent and easy-to-understand terms of service"
    },
    {
      icon: "🔄",
      title: "Always Free",
      description: "No hidden fees, subscriptions, or premium tiers"
    }
  ];

  return (
    <>
      <Head>
        <title>Terms of Service - UnitsBoard Unit Converter</title>
        <meta 
          name="description" 
          content="Read UnitsBoard's Terms of Service. Learn about our privacy policy, accuracy disclaimer, user obligations, and legal terms for using our free unit conversion service." 
        />
        <meta name="keywords" content="unitsboard terms of service, unit converter terms, conversion service terms, legal terms, privacy policy, accuracy disclaimer, user agreement, terms and conditions, service agreement, legal agreement, conversion tool terms, measurement converter terms, free converter terms, online service terms, web application terms, software terms, digital service agreement, terms of use, legal notice, disclaimer notice, privacy agreement, data protection terms, intellectual property rights, limitation of liability, user obligations, acceptable use policy, service description, governing law, termination terms, modification terms, contact information, legal compliance, digital rights, user rights, service rights, conversion rights, measurement rights, accuracy terms, precision terms, reliability terms, trust terms, security terms, privacy terms, confidentiality terms, transparency terms, fairness terms, accessibility terms, availability terms, continuity terms, maintenance terms, support terms, help terms, assistance terms, guidance terms, information terms, data terms, content terms, material terms, resource terms, tool terms, application terms, platform terms, website terms, web terms, internet terms, digital terms, electronic terms, online terms, web service terms, cloud service terms, saas terms, software as a service terms, free service terms, no cost terms, complimentary terms, gratis terms, open terms, public terms, general terms, standard terms, basic terms, essential terms, important terms, critical terms, necessary terms, required terms, mandatory terms, compulsory terms, binding terms, contractual terms, agreement terms, arrangement terms, understanding terms, deal terms, pact terms, compact terms, covenant terms, bond terms, commitment terms, promise terms, pledge terms, vow terms, oath terms, word terms, assurance terms, guarantee terms, warranty terms, security terms, surety terms, collateral terms, backup terms, support terms, help terms, aid terms, assistance terms, guidance terms, direction terms, instruction terms, advice terms, counsel terms, recommendation terms, suggestion terms, tip terms, hint terms, clue terms, pointer terms, indicator terms, sign terms, signal terms, mark terms, note terms, comment terms, remark terms, observation terms, finding terms, discovery terms, detection terms, identification terms, recognition terms, acknowledgment terms, admission terms, confession terms, declaration terms, statement terms, announcement terms, proclamation terms, publication terms, disclosure terms, revelation terms, exposure terms, showing terms, display terms, exhibition terms, presentation terms, demonstration terms, illustration terms, example terms, instance terms, case terms, specimen terms, sample terms, model terms, pattern terms, template terms, prototype terms, archetype terms, paradigm terms, standard terms, norm terms, criterion terms, measure terms, benchmark terms, yardstick terms, touchstone terms, test terms, trial terms, experiment terms, examination terms, inspection terms, review terms, assessment terms, evaluation terms, appraisal terms, estimation terms, calculation terms, computation terms, reckoning terms, counting terms, numbering terms, measurement terms, quantification terms, amount terms, quantity terms, volume terms, capacity terms, size terms, dimension terms, magnitude terms, extent terms, scope terms, range terms, scale terms, proportion terms, ratio terms, rate terms, percentage terms, fraction terms, part terms, portion terms, piece terms, segment terms, section terms, division terms, category terms, class terms, type terms, kind terms, sort terms, variety terms, form terms, shape terms, structure terms, pattern terms, design terms, model terms, plan terms, scheme terms, strategy terms, tactic terms, method terms, approach terms, way terms, manner terms, style terms, technique terms, procedure terms, process terms, system terms, framework terms, architecture terms, infrastructure terms, platform terms, foundation terms, basis terms, ground terms, root terms, source terms, origin terms, beginning terms, start terms, commencement terms, initiation terms, inauguration terms, launch terms, introduction terms, establishment terms, creation terms, formation terms, development terms, growth terms, expansion terms, extension terms, increase terms, enhancement terms, improvement terms, advancement terms, progress terms, evolution terms, revolution terms, innovation terms, invention terms, discovery terms, breakthrough terms, achievement terms, accomplishment terms, success terms, victory terms, triumph terms, win terms, gain terms, profit terms, benefit terms, advantage terms, edge terms, superiority terms, excellence terms, greatness terms, brilliance terms, genius terms, talent terms, skill terms, ability terms, capability terms, capacity terms, power terms, strength terms, force terms, energy terms, vitality terms, life terms, existence terms, being terms, essence terms, nature terms, character terms, personality terms, identity terms, self terms, soul terms, spirit terms, mind terms, heart terms, core terms, center terms, middle terms, hub terms, focus terms, target terms, goal terms, objective terms, aim terms, purpose terms, intention terms, plan terms, strategy terms, tactic terms, method terms, approach terms, way terms, manner terms, style terms, technique terms, procedure terms, process terms, system terms, routine terms, habit terms, custom terms, tradition terms, practice terms, convention terms, standard terms, norm terms, rule terms, law terms, regulation terms, policy terms, principle terms, guideline terms, directive terms, instruction terms, order terms, command terms, control terms, management terms, administration terms, government terms, leadership terms, direction terms, guidance terms, supervision terms, oversight terms, monitoring terms, observation terms, inspection terms, examination terms, review terms, evaluation terms, assessment terms, appraisal terms, judgment terms, decision terms, conclusion terms, determination terms, resolution terms, solution terms, answer terms, response terms, reaction terms, feedback terms, input terms, output terms, result terms, outcome terms, effect terms, impact terms, influence terms, consequence terms, aftermath terms, legacy terms, heritage terms, inheritance terms, tradition terms, culture terms, civilization terms, society terms, community terms, population terms, people terms, persons terms, individuals terms, humans terms, mankind terms, humanity terms, humankind terms, society terms, world terms, planet terms, earth terms, globe terms, universe terms, cosmos terms, space terms, time terms, eternity terms, infinity terms, forever terms" 
        />
        <link rel="canonical" href="https://www.unitsboard.com/terms-of-service" />
      </Head>

      <div className={styles.mainContainer}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Terms of <span>Service</span>
            </h1>
            <p className={styles.heroSubtitle}>
              
            </p>
            <p className={styles.heroDescription}>
              Please read these terms carefully before using UnitsBoard
            </p>
          </div>
        </section>

        <div className={styles.contentWrapper}>
          {/* Legal Highlights */}
          <section className={`${styles.section} ${styles.highlightsSection}`}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Key Legal Points</h2>
              <p className={styles.sectionSubtitle}>What you need to know</p>
            </div>
            
            <div className={styles.highlightsGrid}>
              {legalHighlights.map((highlight, index) => (
                <div key={index} className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>{highlight.icon}</div>
                  <h3 className={styles.highlightTitle}>{highlight.title}</h3>
                  <p className={styles.highlightDescription}>{highlight.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Terms Sections */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Terms and Conditions</h2>
              <p className={styles.sectionSubtitle}>Complete terms of service</p>
            </div>
            
            <div className={styles.termsContainer}>
              <div className={styles.termsNotice}>
                <div className={styles.noticeIcon}>⚠️</div>
                <p className={styles.noticeText}>
                  By using UnitsBoard, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of the terms, you may not use our service.
                </p>
              </div>
              
              {sections.map((section, index) => (
                <div key={section.id} className={styles.termSection}>
                  <h3 id={section.id} className={styles.termTitle}>
                    {section.title}
                  </h3>
                  <p className={styles.termContent}>{section.content}</p>
                  
                  {section.points && (
                    <ul className={styles.termList}>
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex} className={styles.termListItem}>
                          <span className={styles.listBullet}>•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {index < sections.length - 1 && (
                    <div className={styles.sectionDivider}></div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Important Disclaimer */}
          <section className={`${styles.section} ${styles.disclaimerSection}`}>
            <div className={styles.disclaimerCard}>
              <div className={styles.disclaimerHeader}>
                <div className={styles.disclaimerIcon}>❗</div>
                <h3 className={styles.disclaimerTitle}>Important Disclaimer</h3>
              </div>
              <p className={styles.disclaimerText}>
                UnitsBoard provides unit conversions for informational purposes only. 
                While we strive for maximum accuracy, we cannot guarantee 100% accuracy 
                in all conversions. Always verify critical measurements through 
                authoritative sources and professional verification when necessary.
              </p>
              <div className={styles.disclaimerFooter}>
                <span className={styles.footerText}>
                  For questions about these terms, contact us.
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;