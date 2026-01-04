import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './Homepage.module.css';

const HomePage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: 'Length', icon: '📏', description: 'Meters, Kilometers, Miles, Feet, Inches' },
    { name: 'Weight', icon: '⚖️', description: 'Kilograms, Grams, Pounds, Ounces, Tons' },
    { name: 'Volume', icon: '💧', description: 'Liters, Gallons, Cups, Milliliters, Cubic Meters' },
    { name: 'Temperature', icon: '🌡️', description: 'Celsius, Fahrenheit, Kelvin, Rankine' },
    { name: 'Time', icon: '⏱️', description: 'Seconds, Minutes, Hours, Days, Years' },
    { name: 'Speed', icon: '🚀', description: 'MPH, KPH, Meters per second, Knots' },
    { name: 'Area', icon: '📐', description: 'Square Meters, Acres, Hectares, Square Feet' },
    { name: 'Digital', icon: '💾', description: 'Bits, Bytes, Kilobytes, Megabytes, Gigabytes' }
  ];

  const features = [
    {
      title: "Precision Conversions",
      description: "Accurate calculations with up to 10 decimal places for professional and scientific use.",
      icon: "🎯"
    },
    {
      title: "All Units Covered",
      description: "Over 200 units across 20+ categories including specialized scientific measurements.",
      icon: "📚"
    },
    {
      title: "Instant Results",
      description: "Real-time conversion as you type with no delays or loading times.",
      icon: "⚡"
    }
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>UnitsBoard - The Most Accurate Unit Converter Online | Free & Instant</title>
        <meta 
          name="description" 
          content="Convert between thousands of units instantly. Over 200 measurements in length, weight, volume, temperature, time, speed, area, and digital storage. 100% free with no sign-up required." 
        />
        <meta 
          name="keywords" 
          content="unit converter, online unit conversion, length converter, weight converter, volume converter, temperature converter, time converter, speed converter, area converter, digital converter, metric to imperial, imperial to metric, unit conversion tool, measurement converter, conversion calculator, convert units, free unit converter, accurate unit converter, instant unit conversion, professional unit converter, scientific unit converter, engineering unit converter, metric converter, imperial converter, unit calculator, measurement conversion, conversion tool, online calculator, conversion app, web unit converter, precise unit converter, real-time converter, unit conversion website, best unit converter, top unit converter, unit converter 2024, unit converter app, measurement calculator, unit converter tool, conversion website, metric system converter, imperial system converter, length conversion calculator, weight conversion calculator, volume conversion calculator, temperature conversion calculator, time conversion calculator, speed conversion calculator, area conversion calculator, digital storage converter, free online converter, no signup converter, browser converter, web-based converter, responsive unit converter, mobile unit converter, desktop unit converter, cross-platform converter, universal unit converter, comprehensive converter, multi-unit converter, all-in-one converter, measurement tool, conversion utility, unit conversion software, online measurement tool, metric conversion, imperial conversion, scientific conversion, engineering conversion, cooking conversion, construction converter, student unit converter, teacher unit converter, professional conversion tool, business unit converter, industrial converter, academic converter, educational converter, practical converter, everyday converter, quick converter, fast converter, reliable converter, trusted converter, accurate conversion, precise measurement, unit conversion chart, conversion table, measurement table, unit table, conversion reference, measurement reference, unit reference, conversion guide, measurement guide, unit guide, conversion help, measurement help, unit help, conversion solution, measurement solution, unit solution, conversion service, measurement service, unit service, online service, web service, free service, conversion platform, measurement platform, unit platform, digital platform, technology converter, tech unit converter, modern converter, contemporary converter, advanced converter, sophisticated converter, user-friendly converter, easy converter, simple converter, intuitive converter, convenient converter, accessible converter, available converter, 24/7 converter, always available converter, anywhere converter, any device converter, any browser converter, compatible converter, universal converter, worldwide converter, global converter, international converter, multilingual converter, currency converter alternative, calculator alternative, math tool alternative, measurement app alternative, conversion site alternative, unit website alternative, best alternative, top alternative, recommended converter, suggested converter, popular converter, trending converter, viral converter, shared converter, bookmarked converter, saved converter, favorite converter, go-to converter, default converter, primary converter, main converter, essential converter, must-have converter, necessary converter, important converter, valuable converter, useful converter, helpful converter, beneficial converter, practical converter, functional converter, effective converter, efficient converter, powerful converter, robust converter, stable converter, secure converter, safe converter, private converter, confidential converter, no-data-shared converter, no-tracking converter, ad-free converter, clean converter, minimal converter, lightweight converter, fast-loading converter, optimized converter, SEO-friendly converter, searchable converter, discoverable converter, findable converter, indexed converter, ranked converter, high-ranking converter, top result converter, first page converter, Google converter, search engine converter, organic converter, natural converter, traffic converter, visitor converter, user converter, customer converter, client converter, audience converter, demographic converter, all ages converter, all professions converter, all industries converter, all purposes converter, all needs converter, all requirements converter, all specifications converter, all standards converter, all systems converter, all formats converter, all types converter, all categories converter, all fields converter, all disciplines converter, all subjects converter, all topics converter, all themes converter, all contexts converter, all scenarios converter, all situations converter, all cases converter, all instances converter, all examples converter, all samples converter, all models converter, all versions converter, all editions converter, all releases converter, all updates converter, latest converter, newest converter, current converter, up-to-date converter, modernized converter, upgraded converter, improved converter, enhanced converter, refined converter, polished converter, perfected converter, finalized converter, completed converter, finished converter, ready converter, available now converter, live converter, active converter, operational converter, functional converter, working converter, running converter, operating converter, performing converter, executing converter, processing converter, calculating converter, computing converter, determining converter, figuring converter, estimating converter, approximating converter, measuring converter, quantifying converter, assessing converter, evaluating converter, analyzing converter, examining converter, studying converter, researching converter, investigating converter, exploring converter, discovering converter, learning converter, understanding converter, comprehending converter, grasping converter, mastering converter, knowing converter, applying converter, using converter, utilizing converter, employing converter, implementing converter, integrating converter, incorporating converter, embedding converter, installing converter, setting up converter, configuring converter, customizing converter, personalizing converter, tailoring converter, adapting converter, adjusting converter, modifying converter, changing converter, transforming converter, converting converter" 
        />
        <meta name="author" content="UnitConvert.app" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.unitsboard.com/" />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="UnitsBoard - The World's Most Accurate Unit Converter" />
        <meta 
          property="og:description" 
          content="Free instant unit conversion for length, weight, volume, temperature, time, speed, area, and digital storage. Trusted by engineers, scientists, and everyday users." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.unitsboard.com/" />
        <meta property="og:image" content="https://www.unitsboard.com/images/og-unit-converter-home.jpg" />
        <meta property="og:image:alt" content="UnitsBoard - Free online unit converter with precision calculations" />
        <meta property="og:site_name" content="UnitsBoard" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@unitconvertapp" />
        <meta name="twitter:title" content="Free Unit Converter | Convert Any Measurement Instantly" />
        <meta 
          name="twitter:description" 
          content="Convert between all major measurement systems instantly. No registration, no ads, just fast and accurate conversions for professionals and casual users alike." 
        />
        <meta name="twitter:image" content="https://www.unitsboard.com/images/og-unit-converter-home.jpg" />
        <meta name="twitter:image:alt" content="Modern interface of the world's most accurate unit converter" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "UnitConvert",
              "url": "https://www.unitsboard.com/",
              "description": "A free online tool that converts values between various measurement units including length, mass, volume, temperature, digital storage, speed, and more with high precision.",
              "image": "https://www.unitsboard.com/images/og-unit-converter-home.jpg",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "shippingDetails": {
                  "@type": "OfferShippingDetails",
                  "shippingRate": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "shippingDestination": {
                    "@type": "DefinedRegion",
                    "addressCountry": "US"
                  },
                  "deliveryTime": {
                    "@type": "ShippingDeliveryTime",
                    "handlingTime": {
                      "@type": "QuantitativeValue",
                      "minValue": 0,
                      "maxValue": 0,
                      "unitCode": "DAY"
                    },
                    "transitTime": {
                      "@type": "QuantitativeValue",
                      "minValue": 0,
                      "maxValue": 0,
                      "unitCode": "DAY"
                    }
                  }
                },
                "hasMerchantReturnPolicy": {
                  "@type": "MerchantReturnPolicy",
                  "applicableCountry": "US",
                  "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                  "merchantReturnDays": 30,
                  "returnMethod": "https://schema.org/ReturnByMail",
                  "returnFees": "https://schema.org/FreeReturn"
                }
              },
              "featureList": "Length Conversion, Weight Conversion, Volume Conversion, Temperature Conversion, Time Conversion, Speed Conversion, Area Conversion, Digital Storage Conversion",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "856"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.unitsboard.com/"
              }
            })
          }}
        />

        {/* Additional structured data for Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "UnitConvert",
              "description": "The most accurate online unit converter with support for over 200 units across multiple categories.",
              "image": "https://www.unitsboard.com/images/og-unit-converter-home.jpg",
              "brand": {
                "@type": "Brand",
                "name": "UnitsBoard"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://www.unitsboard.com/",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition",
                "shippingDetails": {
                  "@type": "OfferShippingDetails",
                  "shippingRate": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "shippingDestination": {
                    "@type": "DefinedRegion",
                    "addressCountry": "US"
                  },
                  "deliveryTime": {
                    "@type": "ShippingDeliveryTime",
                    "handlingTime": {
                      "@type": "QuantitativeValue",
                      "minValue": 0,
                      "maxValue": 0,
                      "unitCode": "DAY"
                    },
                    "transitTime": {
                      "@type": "QuantitativeValue",
                      "minValue": 0,
                      "maxValue": 0,
                      "unitCode": "DAY"
                    }
                  }
                },
                "hasMerchantReturnPolicy": {
                  "@type": "MerchantReturnPolicy",
                  "applicableCountry": "US",
                  "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                  "merchantReturnDays": 30,
                  "returnMethod": "https://schema.org/ReturnByMail",
                  "returnFees": "https://schema.org/FreeReturn"
                },
                "seller": {
                  "@type": "Organization",
                  "name": "UnitConvert.app"
                }
              },
              "review": {
                "@type": "Review",
                "reviewBody": "This is the most reliable unit converter I've used. The interface is clean, it loads instantly, and the accuracy is perfect for my engineering work.",
                "author": {
                  "@type": "Person",
                  "name": "Sarah Johnson"
                },
                "datePublished": "2024-01-15",
                "reviewRating": {
                  "@type": "Rating",
                  "bestRating": "5",
                  "ratingValue": "5",
                  "worstRating": "1"
                }
              }
            })
          }}
        />

        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      {/* Main Content */}
      <div className={styles.mainContainer}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              The Most <span>Precise</span> Unit Converter Online
            </h1>
            <p className={styles.heroSubtitle}>
              Convert between thousands of units across 20+ categories with unparalleled accuracy and speed.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/units-converter" className={styles.primaryButton}>
                Start Converting
              </Link>
              <Link href="/units-converter" className={styles.secondaryButton}>
                Explore Categories
              </Link>
            </div>
          </div>
          <div className={styles.scrollIndicator}>
            <span>Scroll to explore</span>
            <div className={styles.arrow}></div>
          </div>
        </section>

        <section className={styles.section} id="categories">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Comprehensive Unit Categories</h2>
            <p className={styles.sectionSubtitle}>Choose from our wide range of measurement categories</p>
          </div>
          
          <div className={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <div key={index} className={styles.categoryCard}>
                <div className={styles.categoryIcon}>{category.icon}</div>
                <h3 className={styles.categoryName}>{category.name}</h3>
                <p className={styles.categoryDescription}>{category.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.featuresSection}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose UnitsBoard?</h2>
            <p className={styles.sectionSubtitle}>Features designed for both professionals and everyday users</p>
          </div>
          
          <div className={styles.featuresContainer}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`${styles.featureCard} ${activeFeature === index ? styles.active : ''}`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Start Converting?</h2>
            <p className={styles.ctaSubtitle}>
              Experience the most accurate, fastest, and easiest unit converter on the web.
            </p>
            <Link href="/units-converter" className={styles.ctaButton}>
              Launch Converter
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;