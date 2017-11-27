const en = require('./constants');
/*
 * @params arr, val eg: ([1, 2, 3, 4], val)
 * @returns object eg: {a: val, 2: val, 3: val, 4: val}
 */
const arrayToHash = (arr, value) => {
    return arr.reduce((acc, item) => {
        acc[item] = value;
        return acc;
    }, {});
};

/*
 * @params (from, to)
 * @returns Array between from and to
 */
const range = (from, to) => {
    return new Array(to - from).fill().map((_, element) => element + from);
};

const DAYS_IN_A_MONTH = Object.assign({}, arrayToHash(en.MONTHS_OF_31, 31), arrayToHash(en.MONTHS_OF_30, 30)); //except Feb

// Checks if a value is within a range (inclusive)
const number = (value) => {
    const between = (min, max) => {
        return value >= min && value <= max;
    };
    return {
        between: between
    };
};

const noOfDaysInaMonth = (month, leapYear) => {
    if(month === 2){
        return leapYear ? 29 : 28;
    }else{
        return DAYS_IN_A_MONTH[month];
    }
}

const noOfLeapYearsInaRange = (fromYear, toYear) => {
    const noOfDivisiblesInaRange = (fromYear, toYear, number) => {
        return parseInt(toYear/number) - parseInt(fromYear/number);
    };

    const [DIVISIBLE_4S, DIVISIBLE_100S, DIVISIBLE_400S] = en.LEAP_YEAR_FACTORS.map(num => noOfDivisiblesInaRange(fromYear, toYear, num));
    return DIVISIBLE_4S - DIVISIBLE_100S + DIVISIBLE_400S;
};

const isLeapYear = (year)  => {
    if(year % 100 === 0){
        return year % 400 === 0;
    }else{
        return year % 4 === 0;
    }
};

module.exports = {
    number,
    range,
    isLeapYear,
    noOfLeapYearsInaRange,
    noOfDaysInaMonth,
};
