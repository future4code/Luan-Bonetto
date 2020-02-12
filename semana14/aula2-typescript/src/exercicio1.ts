type infoOfArray = {
    quantityOfNumber: number,
    quantityOfNumberOdd: number,
    sumOfAllNumbers: number,
}

const arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6]

const calculateLength = (numbers: number[]): number => {
    let quantity : number = numbers.length
    return quantity
}

const calculateOdd = (numbers: number[]): number[] => {
    let oddArray : number[] = numbers.filter((number) => {
        if(number%2 !== 0){
            return number
        }
    })
    return oddArray
}

const sumAllNumbers = (numbers: number[]): number => {
    const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue
    let sumOfAll : number = numbers.reduce(reducer)
    return sumOfAll
}

const resultLength: number = calculateLength(arrayOfNumbers)
const resultOdd: number[] = calculateOdd(arrayOfNumbers)
const resultLengthOdd: number = calculateLength(resultOdd)
const resultadoSum: number = sumAllNumbers(arrayOfNumbers)

const resultOffAll: infoOfArray = {
    quantityOfNumber: resultLength,
    quantityOfNumberOdd: resultLengthOdd,
    sumOfAllNumbers: resultadoSum
}

console.log(resultOffAll)