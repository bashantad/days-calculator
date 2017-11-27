const Calculator = require('./src/calculator');
try {
    (new Calculator(process.argv[2], process.argv[3])).daysDifference()
}catch(err){
    console.log(err.message);
}
