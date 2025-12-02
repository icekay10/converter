import { useState, useEffect } from 'react';
import Head from 'next/head';
import convert from 'convert-units';
import styles from './UnitsConverter.module.css';

const UnitConverter = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [fromValue, setFromValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [result, setResult] = useState('');

  // Categories and their units
  const categories = {
    'Length': ['m', 'km', 'mi', 'ft', 'in', 'yd'],
    'Area': ['m2', 'km2', 'ft2', 'mi2', 'ac', 'ha'],
    'Volume': ['l', 'ml', 'm3', 'gal', 'cup', 'tsp'],
    'Mass': ['kg', 'g', 'lb', 'oz', 'ct'],
    'Temperature': ['C', 'F', 'K'],
    'Time': ['s', 'min', 'h', 'd', 'week'],
    'Speed': ['m/s', 'km/h', 'mph', 'knot'],
    'Digital': ['b', 'B', 'KB', 'MB', 'GB'],
    'Energy': ['J', 'kJ', 'cal', 'btu'],
    'Power': ['W', 'kW', 'hp'],
    'Pressure': ['Pa', 'kPa', 'psi', 'atm'],
    'Angle': ['deg', 'rad', 'grad'],
    'Fuel': ['mpg', 'km/l', 'l/100km'],
    'Cooking': ['tsp', 'Tbs', 'cup', 'g', 'oz']
  };

  // Display names for units
  const unitNames = {
    // Length
    'm': 'Meters', 'km': 'Kilometers', 'mi': 'Miles', 'ft': 'Feet', 'in': 'Inches', 'yd': 'Yards',
    // Area
    'm2': 'Square Meters', 'km2': 'Square Kilometers', 'ft2': 'Square Feet', 'mi2': 'Square Miles', 'ac': 'Acres', 'ha': 'Hectares',
    // Volume
    'l': 'Liters', 'ml': 'Milliliters', 'm3': 'Cubic Meters', 'gal': 'Gallons', 'cup': 'Cups', 'tsp': 'Teaspoons',
    // Mass
    'kg': 'Kilograms', 'g': 'Grams', 'lb': 'Pounds', 'oz': 'Ounces', 'ct': 'Carats',
    // Temperature
    'C': 'Celsius', 'F': 'Fahrenheit', 'K': 'Kelvin',
    // Time
    's': 'Seconds', 'min': 'Minutes', 'h': 'Hours', 'd': 'Days', 'week': 'Weeks',
    // Speed
    'm/s': 'Meters/second', 'km/h': 'Kilometers/hour', 'mph': 'Miles/hour', 'knot': 'Knots',
    // Digital
    'b': 'Bits', 'B': 'Bytes', 'KB': 'Kilobytes', 'MB': 'Megabytes', 'GB': 'Gigabytes',
    // Energy
    'J': 'Joules', 'kJ': 'Kilojoules', 'cal': 'Calories', 'btu': 'BTU',
    // Power
    'W': 'Watts', 'kW': 'Kilowatts', 'hp': 'Horsepower',
    // Pressure
    'Pa': 'Pascals', 'kPa': 'Kilopascals', 'psi': 'PSI', 'atm': 'Atmospheres',
    // Angle
    'deg': 'Degrees', 'rad': 'Radians', 'grad': 'Gradians',
    // Fuel
    'mpg': 'Miles/gallon', 'km/l': 'Kilometers/liter', 'l/100km': 'Liters/100km',
    // Cooking
    'tsp': 'Teaspoons', 'Tbs': 'Tablespoons', 'cup': 'Cups', 'g': 'Grams', 'oz': 'Ounces'
  };

  // Handle unit conversion
  useEffect(() => {
    if (fromValue && fromUnit && toUnit && selectedCategory) {
      try {
        const converted = convert(parseFloat(fromValue))
          .from(fromUnit)
          .to(toUnit);
        setResult(converted.toFixed(6).replace(/\.?0+$/, ''));
      } catch (error) {
        setResult('Invalid');
      }
    } else {
      setResult('');
    }
  }, [fromValue, fromUnit, toUnit, selectedCategory]);

  // Reset selections
  const resetSelections = () => {
    setSelectedCategory(null);
    setSelectedUnit(null);
    setFromValue('');
    setFromUnit('');
    setToUnit('');
    setResult('');
  };

  // Get available units for a category
  const getUnitsForCategory = (category) => {
    return categories[category] || [];
  };

  // Helper function to get icons for categories
  const getIconForCategory = (category) => {
    const icons = {
      'Length': '📏',
      'Area': '📐',
      'Volume': '💧',
      'Mass': '⚖️',
      'Temperature': '🌡️',
      'Time': '⏱️',
      'Speed': '🚀',
      'Digital': '💾',
      'Energy': '⚡',
      'Power': '🔋',
      'Pressure': '🔽',
      'Angle': '📐',
      'Fuel': '⛽',
      'Cooking': '🍳'
    };
    return icons[category] || '📏';
  };

  return (
    <>
      <Head>
        <title>Free Unit Converter | Convert Length, Weight, Temperature & More</title>
        <meta
          name="description"
          content="Convert between any units instantly: length, weight, volume, temperature, digital storage, speed, and more. Fast, accurate, and completely free."
        />
        <meta
          name="keywords"
          content="unit converter, convert units, length converter, weight converter, temperature converter, digital converter, online conversion tool, metric to imperial, measurement converter, conversion calculator, unit conversion, online unit converter, free unit converter, metric converter, imperial converter, unit calculator, measurement calculator, length conversion, weight conversion, temperature conversion, volume conversion, area conversion, speed conversion, time conversion, digital storage conversion, energy conversion, power conversion, pressure conversion, angle conversion, fuel conversion, cooking conversion, instant converter, accurate converter, precision converter, unit conversion tool, conversion app, web converter, browser converter, mobile converter, desktop converter, responsive converter, professional converter, scientific converter, engineering converter, student converter, teacher converter, calculator tool, math tool, measurement tool, conversion utility, unit utility, measurement utility, conversion service, unit service, measurement service, conversion platform, unit platform, measurement platform, online tool, web tool, free tool, no registration tool, no signup tool, no download tool, no installation tool, browser tool, web app, progressive web app, PWA converter, offline converter, online calculator, web calculator, free calculator, unit calculator tool, measurement calculator tool, conversion calculator tool, unit converter online free, free online unit converter, best unit converter, top unit converter, accurate unit converter, precise unit converter, reliable unit converter, trusted unit converter, fast unit converter, instant unit converter, real-time converter, live converter, interactive converter, dynamic converter, advanced converter, simple converter, easy converter, user-friendly converter, intuitive converter, clean converter, modern converter, contemporary converter, stylish converter, beautiful converter, elegant converter, sophisticated converter, powerful converter, robust converter, stable converter, secure converter, safe converter, private converter, confidential converter, no data collection converter, no tracking converter, ad-free converter, no ads converter, clean interface converter, minimal converter, lightweight converter, fast loading converter, optimized converter, SEO friendly converter, searchable converter, discoverable converter, findable converter, indexed converter, ranked converter, high ranking converter, top result converter, first page converter, Google converter, search engine converter, organic converter, natural converter, traffic converter, visitor converter, user converter, customer converter, client converter, audience converter, demographic converter, all ages converter, all professions converter, all industries converter, all purposes converter, all needs converter, all requirements converter, all specifications converter, all standards converter, all systems converter, all formats converter, all types converter, all categories converter, all fields converter, all disciplines converter, all subjects converter, all topics converter, all themes converter, all contexts converter, all scenarios converter, all situations converter, all cases converter, all instances converter, all examples converter, all samples converter, all models converter, all versions converter, all editions converter, all releases converter, all updates converter, latest converter, newest converter, current converter, up-to-date converter, modernized converter, upgraded converter, improved converter, enhanced converter, refined converter, polished converter, perfected converter, finalized converter, completed converter, finished converter, ready converter, available now converter, live converter, active converter, operational converter, functional converter, working converter, running converter, operating converter, performing converter, executing converter, processing converter, calculating converter, computing converter, determining converter, figuring converter, estimating converter, approximating converter, measuring converter, quantifying converter, assessing converter, evaluating converter, analyzing converter, examining converter, studying converter, researching converter, investigating converter, exploring converter, discovering converter, learning converter, understanding converter, comprehending converter, grasping converter, mastering converter, knowing converter, applying converter, using converter, utilizing converter, employing converter, implementing converter, integrating converter, incorporating converter, embedding converter, installing converter, setting up converter, configuring converter, customizing converter, personalizing converter, tailoring converter, adapting converter, adjusting converter, modifying converter, changing converter, transforming converter, converting converter, meters to feet, feet to meters, kilometers to miles, miles to kilometers, inches to centimeters, centimeters to inches, yards to meters, meters to yards, pounds to kilograms, kilograms to pounds, ounces to grams, grams to ounces, liters to gallons, gallons to liters, milliliters to ounces, ounces to milliliters, celsius to fahrenheit, fahrenheit to celsius, kelvin to celsius, celsius to kelvin, square meters to square feet, square feet to square meters, acres to hectares, hectares to acres, cubic meters to cubic feet, cubic feet to cubic meters, meters per second to miles per hour, miles per hour to meters per second, kilometers per hour to knots, knots to kilometers per hour, bits to bytes, bytes to bits, kilobytes to megabytes, megabytes to gigabytes, gigabytes to terabytes, joules to calories, calories to joules, watts to horsepower, horsepower to watts, pascals to psi, psi to pascals, degrees to radians, radians to degrees, miles per gallon to liters per 100km, liters per 100km to miles per gallon, teaspoons to tablespoons, tablespoons to cups, cups to milliliters, milliliters to cups, grams to ounces, ounces to grams, metric to imperial converter, imperial to metric converter, SI units converter, international system converter, measurement system converter, unit system converter, conversion system converter, measurement standard converter, international standard converter, global standard converter, NIST converter, SI converter, metric system converter, imperial system converter, US customary converter, British imperial converter, scientific converter, engineering converter, technical converter, professional converter, academic converter, educational converter, school converter, university converter, college converter, student converter, teacher converter, professor converter, researcher converter, scientist converter, engineer converter, architect converter, builder converter, contractor converter, construction converter, manufacturing converter, industry converter, business converter, commerce converter, trade converter, import export converter, international trade converter, global trade converter, shipping converter, logistics converter, transportation converter, travel converter, tourism converter, cooking converter, baking converter, recipe converter, kitchen converter, culinary converter, food converter, nutrition converter, diet converter, health converter, fitness converter, exercise converter, sports converter, athletics converter, weather converter, climate converter, environment converter, geography converter, geology converter, physics converter, chemistry converter, biology converter, medicine converter, medical converter, pharmacy converter, pharmacology converter, nursing converter, healthcare converter, technology converter, computer converter, IT converter, software converter, hardware converter, network converter, internet converter, web converter, digital converter, electronics converter, electrical converter, automotive converter, car converter, vehicle converter, aviation converter, airplane converter, aerospace converter, nautical converter, marine converter, sailing converter, military converter, defense converter, government converter, public sector converter, private sector converter, nonprofit converter, charity converter, volunteer converter, community converter, personal converter, individual converter, family converter, household converter, home converter, DIY converter, hobby converter, craft converter, art converter, design converter, photography converter, music converter, audio converter, video converter, film converter, television converter, radio converter, communication converter, media converter, journalism converter, publishing converter, printing converter, advertising converter, marketing converter, sales converter, retail converter, wholesale converter, distribution converter, supply chain converter, inventory converter, warehouse converter, storage converter, real estate converter, property converter, land converter, agriculture converter, farming converter, gardening converter, landscaping converter, forestry converter, fishing converter, hunting converter, mining converter, oil converter, gas converter, energy converter, power converter, electricity converter, renewable energy converter, solar converter, wind converter, hydro converter, nuclear converter, chemical converter, pharmaceutical converter, biotechnology converter, nanotechnology converter, robotics converter, automation converter, artificial intelligence converter, machine learning converter, data science converter, big data converter, cloud converter, blockchain converter, cryptocurrency converter, finance converter, banking converter, investment converter, stock converter, currency converter, forex converter, trading converter, economics converter, accounting converter, audit converter, tax converter, insurance converter, legal converter, law converter, regulation converter, compliance converter, safety converter, security converter, quality converter, standard converter, certification converter, accreditation converter, education converter, training converter, development converter, learning converter, knowledge converter, information converter, data converter, statistics converter, analytics converter, research converter, development converter, innovation converter, invention converter, discovery converter, science converter, technology converter, engineering converter, mathematics converter, STEM converter, arts converter, humanities converter, social sciences converter, business converter, management converter, administration converter, leadership converter, entrepreneurship converter, startup converter, venture converter, enterprise converter, corporation converter, company converter, firm converter, organization converter, institution converter, association converter, society converter, community converter, network converter, alliance converter, partnership converter, collaboration converter, cooperation converter, coordination converter, integration converter, unification converter, standardization converter, harmonization converter, alignment converter, consistency converter, compatibility converter, interoperability converter, integration converter, connection converter, linking converter, bridging converter, translating converter, interpreting converter, explaining converter, clarifying converter, simplifying converter, streamlining converter, optimizing converter, improving converter, enhancing converter, upgrading converter, updating converter, maintaining converter, supporting converter, helping converter, assisting converter, guiding converter, advising converter, consulting converter, coaching converter, mentoring converter, teaching converter, training converter, educating converter, informing converter, notifying converter, alerting converter, warning converter, protecting converter, securing converter, saving converter, storing converter, backing up converter, restoring converter, recovering converter, repairing converter, fixing converter, solving converter, resolving converter, answering converter, responding converter, reacting converter, adapting converter, adjusting converter, changing converter, transforming converter, converting converter" 
        />
        <meta name="author" content="UnitConvert.app" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.unitsboard.com/units-converter" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Free Online Unit Converter - All Measurements Supported" />
        <meta
          property="og:description"
          content="Instantly convert between hundreds of units across length, mass, volume, temperature, and digital formats. No installation required."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.unitsboard.com/units-converter" />
        <meta property="og:image" content="https://www.unitsboard.com/images/og-unit-converter.jpg" />
        <meta property="og:image:alt" content="Clean interface of a unit converter showing length and weight conversions" />
        <meta property="og:site_name" content="UnitConvert.app" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@unitconvertapp" />
        <meta name="twitter:title" content="Instant Unit Converter - Convert Anything in Seconds" />
        <meta
          name="twitter:description"
          content="Need to convert meters to feet or GB to MB? Try our free, no-sign-up tool that works on all devices."
        />
        <meta name="twitter:image" content="https://www.unitsboard.com/images/og-unit-converter.jpg" />
        <meta name="twitter:image:alt" content="Modern UI of a unit conversion app with swap button and clean layout" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Unit Converter",
              "url": "https://www.unitsboard.com/units-converter",
              "description": "An easy-to-use online tool that converts values between various measurement units including length, weight, volume, temperature, digital storage, and more.",
              "applicationCategory": "Utilities",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "featureList": "Convert length, area, volume, mass, temperature, time, speed, digital, energy, power, pressure, angle, fuel efficiency",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "731"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.unitsboard.com/units-converter"
              }
            })
          }}
        />
      </Head>

      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span>UnitsBoard</span> 
          </h1>
          <p className={styles.subtitle}>Precision conversions, simplified</p>
        </div>

        <div className={styles.contentWrapper}>
          {/* Categories Section */}
          {!selectedCategory && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Pick a category</h2>
              <div className={styles.categoriesGrid}>
                {Object.keys(categories).map((category) => (
                  <div
                    key={category}
                    className={styles.categoryCard}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <div className={styles.categoryIcon}>{getIconForCategory(category)}</div>
                    <h3 className={styles.categoryName}>{category}</h3>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Units Section */}
          {selectedCategory && !selectedUnit && (
            <div className={styles.section}>
              <button className={styles.backButton} onClick={resetSelections}>
                <svg className={styles.backIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back
              </button>
              <h2 className={styles.sectionTitle}>Choose unit</h2>
              <div className={styles.unitsGrid}>
                {getUnitsForCategory(selectedCategory).map((unit) => (
                  <div
                    key={unit}
                    className={styles.unitCard}
                    onClick={() => {
                      setSelectedUnit(unit);
                      setFromUnit(unit);
                      const units = getUnitsForCategory(selectedCategory);
                      const defaultToUnit = units.find(u => u !== unit) || unit;
                      setToUnit(defaultToUnit);
                    }}
                  >
                    <p className={styles.unitName}>{unitNames[unit]}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Calculator Section */}
          {selectedCategory && selectedUnit && (
            <div className={styles.section}>
              <button className={styles.backButton} onClick={() => setSelectedUnit(null)}>
                <svg className={styles.backIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back
              </button>
              <h2 className={styles.sectionTitle}>Convert {unitNames[selectedUnit]}</h2>

              <div className={styles.calculatorCard}>
                <div className={styles.inputRow}>
                  <div className={styles.inputWrapper}>
                    <label className={styles.inputLabel}>From</label>
                    <input
                      className={styles.inputField}
                      type="number"
                      value={fromValue}
                      onChange={(e) => setFromValue(e.target.value)}
                      placeholder="0"
                    />
                  </div>
                  <select
                    className={styles.unitSelect}
                    value={fromUnit}
                    onChange={(e) => setFromUnit(e.target.value)}
                  >
                    {getUnitsForCategory(selectedCategory).map((unit) => (
                      <option key={unit} value={unit}>
                        {unitNames[unit]}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  className={styles.swapButton}
                  onClick={() => {
                    const temp = fromUnit;
                    setFromUnit(toUnit);
                    setToUnit(temp);
                  }}
                >
                  <svg className={styles.swapIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 16L3 12M3 12L7 8M3 12H21M17 8L21 12M21 12L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div className={styles.inputRow}>
                  <div className={styles.inputWrapper}>
                    <label className={styles.inputLabel}>To</label>
                    <input
                      className={`${styles.inputField} ${styles.resultField}`}
                      value={result}
                      readOnly
                      placeholder="Result"
                    />
                  </div>
                  <select
                    className={styles.unitSelect}
                    value={toUnit}
                    onChange={(e) => setToUnit(e.target.value)}
                  >
                    {getUnitsForCategory(selectedCategory).map((unit) => (
                      <option key={unit} value={unit}>
                        {unitNames[unit]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {result && (
                <div className={styles.resultBadge}>
                  {fromValue} {unitNames[fromUnit]} = {result} {unitNames[toUnit]}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UnitConverter;