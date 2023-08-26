import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {formatDateAndTime, formatNumbers, formatUnits} from './helpers'

function App() {
    const {t, i18n} = useTranslation();
    const [locale, setLocale] = useState('en');

    const changeLanguage = (event) => {
        const newLocale = event.target.value;
        i18n.changeLanguage(newLocale);
        setLocale(newLocale);
    };

    const formattedDates = formatDateAndTime(locale);
    const formattedNumbers = formatNumbers(locale);
    const formattedUnits = formatUnits(locale);

    return (
        <div>
            <h1>{t('hello', 'Hello')}</h1>
            <select onChange={changeLanguage}>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="uk">Ukrainian</option>
            </select>
            <h2>Different Date/Time Formats</h2>
            <ul>
                {formattedDates.map((date, index) => (
                    <li key={index}>{date}</li>
                ))}
            </ul>
            <h2>Different Number Formats</h2>
            {formattedNumbers.map((numberFormats, index) => (
                <ul key={index}>
                    {numberFormats.map((formattedNumber, subIndex) => (
                        <li key={subIndex}>{formattedNumber}</li>
                    ))}
                </ul>
            ))}
            <h2>Different Units of Measurement</h2>
            <ul>
                {formattedUnits.map((unit, index) => (
                    <li key={index}>{unit}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
