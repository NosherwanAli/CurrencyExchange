
var currencyOne = 100;
var currencyTwo = 0;
var ExchangeRate = 1.2; // Example exchange rate from currency one to currency two

function convertCurrency(amount, rate) {
    return amount * rate;
}
   currencyTwo = convertCurrency(currencyOne, ExchangeRate);

console.log(currencyTwo); // Output the converted amount