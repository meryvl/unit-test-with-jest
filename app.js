
const sum = (a,b) => {
    const entero1 = Math.floor(a);
    const entero2 =  Math.floor(b);
    return entero1 + entero2;
}
console.log(sum(7.4,3.8))




const ONE_EURO_IS = {
    JPY: 127.9, // japan yen
    USD: 1.2, // us dollar
    GBP: 0.8, // british pound
}

const fromEuroToDollar = (euros) =>{
    return euros * ONE_EURO_IS.USD;
}
console.log(fromEuroToDollar(1));

const fromDollarToEuro = (dollars) => dollars / ONE_EURO_IS.USD;
console.log(fromDollarToEuro(1.2));

const fromDollarToYen = (dollars) => {
const euros = fromDollarToEuro(dollars);
return euros * ONE_EURO_IS.JPY;
};

console.log(fromDollarToYen(1.2));

const fromYenToPound = (yen) =>{
    const euroJPY = yen / ONE_EURO_IS.JPY;
    return euroJPY * ONE_EURO_IS.GBP;
};
console.log(fromYenToPound(127.9));

module.exports = { sum, fromEuroToDollar, fromDollarToEuro, fromDollarToYen , fromYenToPound }