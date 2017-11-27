'use strict';

const en      = require('./constants');
const DateObj = require('./date-object');
const helper  = require('./helper');
const { number, range, isLeapYear, noOfLeapYearsInaRange, noOfDaysInaMonth } = helper; // two lines can be merged into one using import in later versions of the node.

class Calculator {
    constructor(date1, date2){
        console.log(`Date range (${date1} : ${date2})`);
        this.fromDate  = new DateObj(date1);
        this.toDate  = new DateObj(date2);
        if(this.fromDate.toString() > this.toDate.toString()) {
            [this.fromDate, this.toDate] = [this.toDate, this.fromDate];
        }
        this.validate(this.fromDate);
        this.validate(this.toDate);
    }

    calculateDifference(){
       return this.toDate.day
        - this.fromDate.day - 1
        + this.monthToDays(this.toDate.month, isLeapYear(this.toDate.year))
        - this.monthToDays(this.fromDate.month, isLeapYear(this.fromDate.year))
        + this.yearToDays(this.fromDate.year, this.toDate.year);
    }

    daysDifference() {
        if(this.fromDate.equals(this.toDate)){
            return 0;
        }
        let difference = this.calculateDifference();
        console.log('Difference in number of days:', difference);
        return difference;
    }

    yearToDays(fromYear, toYear){
        return (toYear - fromYear) * en.DAYS_IN_A_YEAR + noOfLeapYearsInaRange(fromYear, toYear);
    }

    monthToDays(months, leapYear){
        return range(1, months).reduce((sum, month) => {
            return sum +  noOfDaysInaMonth(month, leapYear);
        }, 0);
    }

    validate({day, month, year}){
        const maxDays = noOfDaysInaMonth(month, isLeapYear(year));
        if(!(number(day).between(0, maxDays) && number(month).between(0, en.MONTHS_IN_A_YEAR) && number(year).between(en.FROM_YEAR, en.TO_YEAR))){
            throw new Error('Invalid dates');
        }
    }
}

module.exports = Calculator;
