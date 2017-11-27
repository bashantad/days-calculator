const expect     = require('chai').expect;
const Calculator = require('../src/calculator');

describe('Days difference', function(){
    it('example 1: calculates the days difference', function(){
        let calculator = new Calculator('02/06/1983', '22/06/1983');
        expect(calculator.daysDifference()).to.equal(19);
    });

    it('example 2: handles leap year divisible by 4', function(){
        let calculator = new Calculator('04/07/1984', '25/12/1984');
        expect(calculator.daysDifference()).to.equal(173);
    });

    it('example 3', function(){
        let calculator = new Calculator('03/01/1989', '03/08/1983');
        expect(calculator.daysDifference()).to.equal(1979);
    });

    it('example 4', function(){
        let calculator = new Calculator('22/09/1998', '2/10/2001');
        expect(calculator.daysDifference()).to.equal(1105);
    });

    it('when same dates are passed, it returns 0', function(){
        let calculator = new Calculator('22/09/1998', '22/09/1998');
        expect(calculator.daysDifference()).to.equal(0);
    });

    it('handles leap year divisible by 100', function(){
        let calculator = new Calculator('03/12/2199', '08/12/2200');
        expect(calculator.daysDifference()).to.equal(369);
    });

    it('handles leap year divisible by 400', function(){
        let calculator = new Calculator('03/12/1945', '06/12/2015');
        expect(calculator.daysDifference()).to.equal(25569);
    });

    it('it returns proper difference when two leap years are in the border', function(){
        calculator = new Calculator('04/07/1988', '12/12/1984');
        expect(calculator.daysDifference()).to.equal(1299);
    });

});
