import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import '../styles/ContactForm.css';

const countryCodes = [
  { code: 'in', label: 'IN +91' },
  { code: 'af', label: 'AF +93' },
  { code: 'al', label: 'AL +355' },
  { code: 'dz', label: 'DZ +213' },
  { code: 'as', label: 'AS +1684' },
  { code: 'ad', label: 'AD +376' },
  { code: 'ao', label: 'AO +244' },
  { code: 'ai', label: 'AI +1264' },
  { code: 'ag', label: 'AG +1268' },
  { code: 'ar', label: 'AR +54' },
  { code: 'am', label: 'AM +374' },
  { code: 'aw', label: 'AW +297' },
  { code: 'au', label: 'AU +61' },
  { code: 'at', label: 'AT +43' },
  { code: 'az', label: 'AZ +994' },
  { code: 'bs', label: 'BS +1242' },
  { code: 'bh', label: 'BH +973' },
  { code: 'bd', label: 'BD +880' },
  { code: 'bb', label: 'BB +1246' },
  { code: 'by', label: 'BY +375' },
  { code: 'be', label: 'BE +32' },
  { code: 'bz', label: 'BZ +501' },
  { code: 'bj', label: 'BJ +229' },
  { code: 'bm', label: 'BM +1441' },
  { code: 'bt', label: 'BT +975' },
  { code: 'bo', label: 'BO +591' },
  { code: 'ba', label: 'BA +387' },
  { code: 'bw', label: 'BW +267' },
  { code: 'br', label: 'BR +55' },
  { code: 'bn', label: 'BN +673' },
  { code: 'bg', label: 'BG +359' },
  { code: 'bf', label: 'BF +226' },
  { code: 'bi', label: 'BI +257' },
  { code: 'kh', label: 'KH +855' },
  { code: 'cm', label: 'CM +237' },
  { code: 'ca', label: 'CA +1' },
  { code: 'cv', label: 'CV +238' },
  { code: 'ky', label: 'KY +1345' },
  { code: 'cf', label: 'CF +236' },
  { code: 'td', label: 'TD +235' },
  { code: 'cl', label: 'CL +56' },
  { code: 'cn', label: 'CN +86' },
  { code: 'co', label: 'CO +57' },
  { code: 'km', label: 'KM +269' },
  { code: 'cd', label: 'CD +243' },
  { code: 'cg', label: 'CG +242' },
  { code: 'cr', label: 'CR +506' },
  { code: 'hr', label: 'HR +385' },
  { code: 'cu', label: 'CU +53' },
  { code: 'cy', label: 'CY +357' },
  { code: 'cz', label: 'CZ +420' },
  { code: 'dk', label: 'DK +45' },
  { code: 'dj', label: 'DJ +253' },
  { code: 'dm', label: 'DM +1767' },
  { code: 'do', label: 'DO +1809' },
  { code: 'ec', label: 'EC +593' },
  { code: 'eg', label: 'EG +20' },
  { code: 'sv', label: 'SV +503' },
  { code: 'gq', label: 'GQ +240' },
  { code: 'er', label: 'ER +291' },
  { code: 'ee', label: 'EE +372' },
  { code: 'et', label: 'ET +251' },
  { code: 'fj', label: 'FJ +679' },
  { code: 'fi', label: 'FI +358' },
  { code: 'fr', label: 'FR +33' },
  { code: 'ga', label: 'GA +241' },
  { code: 'gm', label: 'GM +220' },
  { code: 'ge', label: 'GE +995' },
  { code: 'de', label: 'DE +49' },
  { code: 'gh', label: 'GH +233' },
  { code: 'gr', label: 'GR +30' },
  { code: 'gd', label: 'GD +1473' },
  { code: 'gt', label: 'GT +502' },
  { code: 'gn', label: 'GN +224' },
  { code: 'gw', label: 'GW +245' },
  { code: 'gy', label: 'GY +592' },
  { code: 'ht', label: 'HT +509' },
  { code: 'hn', label: 'HN +504' },
  { code: 'hk', label: 'HK +852' },
  { code: 'hu', label: 'HU +36' },
  { code: 'is', label: 'IS +354' },
  { code: 'id', label: 'ID +62' },
  { code: 'ir', label: 'IR +98' },
  { code: 'iq', label: 'IQ +964' },
  { code: 'ie', label: 'IE +353' },
  { code: 'il', label: 'IL +972' },
  { code: 'it', label: 'IT +39' },
  { code: 'jm', label: 'JM +1876' },
  { code: 'jp', label: 'JP +81' },
  { code: 'jo', label: 'JO +962' },
  { code: 'kz', label: 'KZ +7' },
  { code: 'ke', label: 'KE +254' },
  { code: 'ki', label: 'KI +686' },
  { code: 'kp', label: 'KP +850' },
  { code: 'kr', label: 'KR +82' },
  { code: 'kw', label: 'KW +965' },
  { code: 'kg', label: 'KG +996' },
  { code: 'la', label: 'LA +856' },
  { code: 'lv', label: 'LV +371' },
  { code: 'lb', label: 'LB +961' },
  { code: 'ls', label: 'LS +266' },
  { code: 'lr', label: 'LR +231' },
  { code: 'ly', label: 'LY +218' },
  { code: 'li', label: 'LI +423' },
  { code: 'lt', label: 'LT +370' },
  { code: 'lu', label: 'LU +352' },
  { code: 'mo', label: 'MO +853' },
  { code: 'mk', label: 'MK +389' },
  { code: 'mg', label: 'MG +261' },
  { code: 'mw', label: 'MW +265' },
  { code: 'my', label: 'MY +60' },
  { code: 'mv', label: 'MV +960' },
  { code: 'ml', label: 'ML +223' },
  { code: 'mt', label: 'MT +356' },
  { code: 'mh', label: 'MH +692' },
  { code: 'mr', label: 'MR +222' },
  { code: 'mu', label: 'MU +230' },
  { code: 'mx', label: 'MX +52' },
  { code: 'fm', label: 'FM +691' },
  { code: 'md', label: 'MD +373' },
  { code: 'mc', label: 'MC +377' },
  { code: 'mn', label: 'MN +976' },
  { code: 'me', label: 'ME +382' },
  { code: 'ma', label: 'MA +212' },
  { code: 'mz', label: 'MZ +258' },
  { code: 'mm', label: 'MM +95' },
  { code: 'na', label: 'NA +264' },
  { code: 'nr', label: 'NR +674' },
  { code: 'np', label: 'NP +977' },
  { code: 'nl', label: 'NL +31' },
  { code: 'nz', label: 'NZ +64' },
  { code: 'ni', label: 'NI +505' },
  { code: 'ne', label: 'NE +227' },
  { code: 'ng', label: 'NG +234' },
  { code: 'no', label: 'NO +47' },
  { code: 'om', label: 'OM +968' },
  { code: 'pk', label: 'PK +92' },
  { code: 'pw', label: 'PW +680' },
  { code: 'pa', label: 'PA +507' },
  { code: 'pg', label: 'PG +675' },
  { code: 'py', label: 'PY +595' },
  { code: 'pe', label: 'PE +51' },
  { code: 'ph', label: 'PH +63' },
  { code: 'pl', label: 'PL +48' },
  { code: 'pt', label: 'PT +351' },
  { code: 'qa', label: 'QA +974' },
  { code: 'ro', label: 'RO +40' },
  { code: 'ru', label: 'RU +7' },
  { code: 'rw', label: 'RW +250' },
  { code: 'kn', label: 'KN +1869' },
  { code: 'lc', label: 'LC +1758' },
  { code: 'vc', label: 'VC +1784' },
  { code: 'ws', label: 'WS +685' },
  { code: 'sm', label: 'SM +378' },
  { code: 'st', label: 'ST +239' },
  { code: 'sa', label: 'SA +966' },
  { code: 'sn', label: 'SN +221' },
  { code: 'rs', label: 'RS +381' },
  { code: 'sc', label: 'SC +248' },
  { code: 'sl', label: 'SL +232' },
  { code: 'sg', label: 'SG +65' },
  { code: 'sk', label: 'SK +421' },
  { code: 'si', label: 'SI +386' },
  { code: 'sb', label: 'SB +677' },
  { code: 'so', label: 'SO +252' },
  { code: 'za', label: 'ZA +27' },
  { code: 'es', label: 'ES +34' },
  { code: 'lk', label: 'LK +94' },
  { code: 'sd', label: 'SD +249' },
  { code: 'sr', label: 'SR +597' },
  { code: 'sz', label: 'SZ +268' },
  { code: 'se', label: 'SE +46' },
  { code: 'ch', label: 'CH +41' },
  { code: 'sy', label: 'SY +963' },
  { code: 'tw', label: 'TW +886' },
  { code: 'tj', label: 'TJ +992' },
  { code: 'tz', label: 'TZ +255' },
  { code: 'th', label: 'TH +66' },
  { code: 'tl', label: 'TL +670' },
  { code: 'tg', label: 'TG +228' },
  { code: 'to', label: 'TO +676' },
  { code: 'tt', label: 'TT +1868' },
  { code: 'tn', label: 'TN +216' },
  { code: 'tr', label: 'TR +90' },
  { code: 'tm', label: 'TM +993' },
  { code: 'tv', label: 'TV +688' },
  { code: 'ug', label: 'UG +256' },
  { code: 'ua', label: 'UA +380' },
  { code: 'ae', label: 'AE +971' },
  { code: 'gb', label: 'GB +44' },
  { code: 'us', label: 'US +1' },
  { code: 'uy', label: 'UY +598' },
  { code: 'uz', label: 'UZ +998' },
  { code: 'vu', label: 'VU +678' },
  { code: 'va', label: 'VA +39' },
  { code: 've', label: 'VE +58' },
  { code: 'vn', label: 'VN +84' },
  { code: 'ye', label: 'YE +967' },
  { code: 'zm', label: 'ZM +260' },
  { code: 'zw', label: 'ZW +263' },
  // Add more country codes as needed
];


const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: 'in',
    phoneNumber: '',
    message: '',
    referral: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phoneNumber') {
      const sanitizedValue = value.replace(/[^0-9]/g, ''); // Allow only numbers
      setFormData((prevData) => ({ ...prevData, [name]: sanitizedValue }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      // Add form data to Firestore collection 'contacts'
      await addDoc(collection(db, 'contacts'), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneCode: formData.phoneCode,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
        referral: formData.referral,
        submittedAt: new Date(),
      });

      setSuccessMessage('Your message has been sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneCode: 'in',
        phoneNumber: '',
        message: '',
        referral: ''
      });
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      console.error('Error adding document: ', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container" id="contact-form">
      <div className="form-left">
        <h1>Unlock Your Potential with Strategic Innovation.</h1>
        <h2>Let's change the game of business, <span>Your Success Starts Here.</span></h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name here..."
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name here..."
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email here..."
            required
          />
          <div className="phone-input">
            <select
              name="phoneCode"
              value={formData.phoneCode}
              onChange={handleChange}
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>{country.label}</option>
              ))}
            </select>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number here..."
              inputMode="numeric"
              pattern="[0-9]*"
              required
            />
          </div>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message here..."
            required
          />
          <input
            type="text"
            name="referral"
            value={formData.referral}
            onChange={handleChange}
            placeholder="Where did you hear about us?"
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
      <div className="form-right">
        <ul>
          <li><a href="https://calendly.com/ajursinsights/30min">Schedule a <span>   </span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGUlEQVR4nO2ZT0sbQRiHFwqeelOvPZfizprECBEqGkKadqfuUNh7D82H8KAmKLoI6kl6EKSttmDazFhBKgjdQD9AUbyIt9LFg+DNS3J4ZQlKyJ9xHd1kB+YHv9vCPg/DLLzvapqKioqKSjdznh1ZqVV0eOxW3SGv5uoOnLzoCw3eSyULXir56PC1xrq6Eyp82ALVin7eiYFQ0o8p+YmZtSUMH/oJVHRox4B/vHtuUnKGGQG/wvC9EDB3pzKYkssb+MAC7eC7LYCZ9QEzq9oIH0igE3y3BOyS/QRT4jSDBxLgwXdDwC7ZT+uXtT08V+Au+LAF/h0gMMvkmAffUeBoMrNyF3yYAn/3EKTnY1xwrsAzx4MgFQ0P/lcJwWghDmgmLpdA1dVh45MBw7N1eKkErn7rML0+fAsulcDFIYL3q7EWeCkETvd1yC22giMZBP6UDRgrdoZHURbY+WpAfI4Pj6IsMLGRATSbkFcAMwKZzzkwCiPyCmBG4NU3E+ILo/IK+H39fQqSyyl5BfyaZQtSay/lFcB+KYHxj2kwZhKSCrB605tZMOYSDxMYzFcgSIO8QKTZ7TcQKyblFcCMQG7nrfhAEwUBzIj4SBkVAU10qI+SgNBaJYoC91psRVUg8GpxMO96PReg5D9vuWsya9ek5EvbBwbyrtNrAZNZS5pw7JO+ugT/JEIBp8Tzvzp2yQ7vB4eKioqKitaUa89b1JSYMsZ6AAAAAElFTkSuQmCC" alt="google-meet"/><span className="arrow">↗</span></a></li>
          <li><a href="mailto:ajursinsights@gmail.com">Send us an <span>  </span> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACv0lEQVR4nO2UT2jTYByG48F5c4ieJ47RBE0rbZItcT2VHYQWWoebx11ksEPPehC92YA35wSvnpyDVoUetNrmYGvRKiK7bG6oW77uIqOCcyVx/eSbjWY1af70r/C98N7Kr++TPC1B4ODg4ODg6FLyeE7kKepugSTLeZLcyZNkseDxTBNdzk+JnlYluqjk6B0l5y2rOfoOzFDHrceT5GqBoqBBl0rDw4OdHg4zzKAi0Uuq5IX/NEevNIXYf/LG47WuFSmK6dR4JetlVMm7Zjj+b+fNAUhyywIAtQp4Lt7u8YDn4orkrVqMh0qOBuYAFFWzAQCBwEGZ5x59CQaPtTr86+joUSBwD9BNq/G/Abw102N2xmsAdYjPm+OjvNvxgGcCQOA+avfsAKC2DaBeBQjcFUgQh5yMLwvsLOC5qv5WrwAcKaVXBjS0ZYD5iZn3bgHsKNWoDHAB8Doz9sYUYEgEcHJuUc3RZ6tuAJopZaQMcADwI+vbvZUOVSKpGGwKgBq49g7eD8b2XAIcUKqZMsAmwPrzQPXy4zBE420BoJ66uQGvXrxeM/prtTOmDrGOavfzqsH49NNxeCEV/TPeNoDWybnFmnTGt+sGwGlV3fDvWZ8ipicODHcFoCmVYkNb3QLYfOHf1ivTMoCmVCIcX0FKdRLg5TP+U6MybQHQOjuz8AEIXKUDAJWFJ6HlZsPbAoBaFvwnAc++atd4WeDebvD+ETvj2wKAPltimMMyz4qywLWklMxz91bPjxxBN7sKoAWcY6KAZ7edP3X2mzzGXtLf6gkAilOlNGWIhvQMwIlSemX6CsBKKSNl+hLASCkzZfoWAAVpIgvsbVQzZfoawE0iGEDEb6ClRLBCCQD6/kecjMmmB4ZEWex3gHAqmjA9cPrG8sA+hMWb6AVAOBkDkWRMnHo4NdCp78fBwcHBIf67/ALECpwyy5gUBAAAAABJRU5ErkJggg==" alt="gmail-new"/><span className="arrow">↗</span></a></li>
          <li><a href="https://www.linkedin.com/company/ajursinsights/mycompany/">Connect us on <span> </span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEklEQVR4nO2YO08CQRDH11jYGisTW7X1E1jZKcTSL2EQJHJbEAsJiZ2FhZ2FpbWFDY/IO0YN3GIEiQWFxhhBER8oMGZvFVC4wJ3mbi/ZfzIh7GyW+e3Mzh2LkJCQkBDfkrKLSCJhhEkVYQIGWRVhEkKSbP9b8FjeNDBoUDG//p03P3hgJtt0AChlw0HwBJBEgjoA5CeOMlDRDqC2mCcNyJUEtBJjn/S7ERCapRL8tC8FR5dlqNbqECmUYWojZQyEZvVaxJVUgu5UOF9mmbAEwEpM2flOPb3VWTlZAsBl9Qx42BmgEDQToXwJJi11BrDVu5AzAcgR7TY63s8vZQC5j9tznF8bsHZK+7xBAI4I9BId7+ef8CZhK1iE7HUVXt8b8PDyoZTi8n4ORtyJ/pk0E2DGn4LbSg3UdFKswLg3ybLEI0Dh7gX6KZQvwZArzifAoJrfyaiXkpkAjWZTqf+57TQs7WYhcFHqOW8vdcMOOm8A6wdXLDBa4540DK8m4PD8vmte7va53dF4AhjD8Z+t0pOG2a2zrnmPrx/qryVmATSbHf6WyTAqJVTmRvkCYP6o9rWwACAiA98SJYTFISaiCyHRRv/lH1mcPWh+Gx0fxK9lLfzXBxlPV4uS/KgdgN7Pmx04br07BfRkwM5PBjIL2gFYFvymB4+JT1/wLQjZptzPG3kmJPpbckD/zgsJCQkhg/QJ3PVUWJ5Zt98AAAAASUVORK5CYII=" alt="linkedin"/> <span className="arrow">↗</span></a></li>
          <li><a href="https://x.com/AjursInsights">Follow us on <span>  </span> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEiElEQVR4nO2YX2hbVRzHb7dB06ZtcvOn+d+0adqsnS8i4lCGbOCDQxmC+OCDgoL4DwVRZCjENm3aJs2/Jrlp2jTpvxWcCHPK3mQPjvogdQ8DN+ySm383N703f5t2jJXtJzeKOHFpbnOTTsgHfo+X3+d7OOfccw6CNGnSpEmT/xtajHpS7aMdKi91Q+mhCkovdUfhpjYVM+llmZt8CQFoedS3qJPoqaqJYW1XqQ0Bj0txnT8n0GCZNQ1GPVBjNKi8TFGg9FCgcG+VSz6TBpmT/FnuSg3/81uRLX1SNJ28JLIStqqaDa2WgkMrO98iF+EoF/IaN61UY5mbGh8NFeVdaeh2kkzlpU7yQ4mdmJXYUjGxjQCRlchKLbh832b6K9A6tLJTGl7dgaGVUuj5q3CsFnltCOepscwvLORB6iBBYk+Vqyw/ndwTW4hzVTU8sbL7NCP/VwA4vlS6/JQf2g8aQI3Rn9Uij04nd1Br8jVm9FFL7D3hZOJ8pXWCDK3unvtbfvnPMiwVrxsCRQNreyMc02A0ffCRJwC1Jm4KrcmE0JIAoSV+C50MCyr2HF4unXlYfhsGF7dhIFTc0YcK7yJGOFKtv8pLn65FXjSdBNSaBEZeYIknOs3JwX2bDlwo6P4tP7hYZAKAPlgA/UJhoy+YO1VVAIz6iAt5oSW+IZ6KKasbNiMcOb5cwv9TPliA/oU86AJ56J3P/6Sdy79SaadSeWlT7fKJsMxK8hE2GJa2v6gk3zfPVA5653LQM5uhtP6MX+ujzvZgBfThANTHNcpD12R8A2GLfiXTNbhYDO8nr/Vny9UzmwGNLwPln5SXuqXyUN+pPJRH4aa+qUVeMFUOcI11gHKIUPGkPljYrVq+pn2eeJQ8dJhjV9iJBwuvD4SKF/XB3Mv6hfyr/Qu59GHJd07EodMcnWUb4AVW06ae8hMxaDdHP2UVwBCgO/uD+XuPg3yHOQb8cfw0whZdIPf1YyE/Fr2HGAn2x5j+ueyJ3vnc3cMd+Si0j+M/Igelby73wWHK88ej0DaGv4/UgnY2+4nWn9k7DPl2E36Xb7zdjdRKjz/7rBqjrzVUfgyHNlMkxIE8pVAxRwTf1nNqjDIqPVS2QfL3+eO3n+DmHuujS40deZypJYQrVN7M+QbLF3mmTQ1nAZjjstKz9UOD5KF1NPIOwjXMeVzu3rpcb3neaPhSxftuTQC0yFzkW92uNF4X+ZHwb4jx9y6k7lyEoxI7cUrqID8X21LXOZk2I+FoqxHvRRqFwIELxfZUQGIjHnAjH9M1RFwxTUgkjtSXYjuxxc2CDa/zx8Oyukp329M6mZN8W+pMrUkc5B1u5nzkPm8k7ESMOIfvrwAtKg91ltlt5DNb63IXuSlzkiWuFyxvFL/BGwlX9SxzIJTupFjmIu11kN/kjUbeYPMwVvPeL3Wm3pTaU1eZxXqg8/wYnmszRS60mqJn6re/V4FgIoai1tSLqJX4SmRNfI9aEr8KpuJRgSVeEkzF9zon47mOiXi4YyK2zjfHAsw9ts0ceYar5/kmTZo0aYLUgz8AFq4opyH4XtoAAAAASUVORK5CYII=" alt="twitter"></img><span className="arrow">↗</span></a></li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
