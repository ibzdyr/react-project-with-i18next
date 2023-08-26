export const formatDateAndTime = (locale) => {
    const date = new Date();

    // Format 1: Only Date -  "July 20, 2020"
    const options1 = { year: 'numeric', month: 'long', day: 'numeric' };

    // Format 2: Day of the Week and Date - "Monday, July 20, 2020"
    const options2 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    // Format 3: Only Time - "12:20:30 PM"
    const options3 = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };

    // Format 4: Full Date and Time - "Monday, July 20, 2020, 12:20:30 PM"
    const options4 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };

    return [
        new Intl.DateTimeFormat(locale, options1).format(date),
        new Intl.DateTimeFormat(locale, options2).format(date),
        new Intl.DateTimeFormat(locale, options3).format(date),
        new Intl.DateTimeFormat(locale, options4).format(date)
    ];
};

export const formatNumbers = (locale) => {
    // Define four different numbers in the range of 1 - 1,000,000,000
    const numbers = [1, 12345.6789, 987654.321, 1000000000];

    // Format 1: No fraction digits, no grouping
    const options1 = { minimumFractionDigits: 0, maximumFractionDigits: 0, useGrouping: false };

    // Format 2: Two fraction digits, with grouping
    const options2 = { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true };

    // Format 3: Three fraction digits, with grouping
    const options3 = { minimumFractionDigits: 3, maximumFractionDigits: 3, useGrouping: true };

    // Format 4: Variable fraction digits (0-3), with grouping
    const options4 = { minimumFractionDigits: 0, maximumFractionDigits: 3, useGrouping: true };

    return numbers.map((number) => [
        new Intl.NumberFormat(locale, options1).format(number),
        new Intl.NumberFormat(locale, options2).format(number),
        new Intl.NumberFormat(locale, options3).format(number),
        new Intl.NumberFormat(locale, options4).format(number)
    ]);
};

export const formatUnits = (locale) => {
    const inches = 63;
    const pounds = 150;
    const liters = 3;

    // Default formatting options
    let formattedUnits = [
        `${inches.toFixed(2)} inches`,
        `${pounds.toFixed(2)} lbs`,
        `${liters.toFixed(2)} L`
    ];

    try {
        if (locale === 'en') {
            formattedUnits = [
                `${inches} inches`,
                `${pounds} lbs`,
                `${liters} L`
            ];
        } else if (locale === 'fr') {
            const cm = inches * 2.54;
            const kg = pounds * 0.453592;
            const cl = liters * 100;

            formattedUnits = [
                `${cm.toFixed(2)} cm`,
                `${kg.toFixed(2)} kg`,
                `${cl.toFixed(2)} cl`
            ];
        } else if (locale === 'uk') {
            const cm = inches * 2.54;
            const kg = pounds * 0.453592;
            const oz = liters * 33.814;

            formattedUnits = [
                `${cm.toFixed(2)} см`,
                `${kg.toFixed(2)} кг`,
                `${oz.toFixed(2)} унції`
            ];
        }
    } catch (e) {
        // log the error and use default formattedUnits
        console.error(`An error occurred while formatting units: ${e.message}`);
    }

    return formattedUnits;
};


