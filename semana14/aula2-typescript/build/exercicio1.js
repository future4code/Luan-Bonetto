var arrayOfNumbers = [1, 2, 3, 4, 5, 6];
var calculateLength = function (numbers) {
    var quantity = numbers.length;
    return quantity;
};
// const resultado: number = calculateLength(arrayOfNumbers)
// console.log(resultado)
var calculateOdd = function (numbers) {
    var oddArray = numbers.filter(function (number) {
        if (number % 2 !== 0) {
            return number;
        }
    });
    return oddArray;
};
// const resultadoOdd: number[] = calculateOdd(arrayOfNumbers)
// const resultadoLengthOdd: number = calculateLength(resultadoOdd)
// console.log(resultadoLengthOdd)
var sumAllNumbers = function (numbers) {
    var reducer = function (accumulator, currentValue) { return accumulator + currentValue; };
    var sumOfAll = numbers.reduce(reducer);
    return sumOfAll;
};
// const resultadoSum: number = sumAllNumbers(arrayOfNumbers)
// console.log(resultadoSum)
var resultLength = calculateLength(arrayOfNumbers);
var resultOdd = calculateOdd(arrayOfNumbers);
var resultLengthOdd = calculateLength(resultOdd);
var resultadoSum = sumAllNumbers(arrayOfNumbers);
var resultOffAll = {
    quantityOfNumber: resultLength,
    quantityOfNumberOdd: resultLengthOdd,
    sumOfAllNumbers: resultadoSum
};
console.log(resultOffAll);
