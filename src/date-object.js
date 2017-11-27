class DateObj{
    constructor(date){
        const [day, month, year] = date.split("/");
        this.str   = `${year}${month}${day}`; // padded string in date
        this.day   = parseInt(day);
        this.month = parseInt(month);
        this.year  = parseInt(year);
    }

    equals(dateObj){
        if(dateObj instanceof DateObj){
            return this.toString() === dateObj.toString();
        }
        return false;
    }

    toString(){
        return this.str;
    }
}

module.exports = DateObj;
