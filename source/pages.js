const mathFunctions = require("./utils/mathFunctions");
const formatArray = require("./utils/formatArray")

const pageIndex = (req, res) => {

    const data = {
        menu : [
            {
                href : "/prime",
                method : "Test if a number is prime or not"
            },
            {
                href : "/fibonacci",
                method : "Show the i-th element in a Fibonacci sequence"
            },
            {
                href : "/gcd",
                method : "Show the greatest common divisor of two numbers"
            },
            {
                href : "/count",
                method : "Count numbers within a range"
            },
            {
                href : "/quickSort",
                method : "Sort an array using Quick Sort method"
            },
            {
                href : "/sum",
                method : "Calculate the sum of numbers inside an array"
            }
        ]
    }

    res.render('index', data)
}


const pagePrime = (req, res) => {
    
    var inputNumber = parseInt(req.body.inputNumber);
    
    const data = {
        inputNumber : inputNumber,
        result : inputNumber ? mathFunctions.testIfPrime(inputNumber) : ""
    }

    res.render('prime', data)
};


const pageFibonacci = (req, res) => {

    var inputNumber = parseInt(req.body.inputNumber);

    const data = {
        inputNumber : inputNumber,
        result :  inputNumber ? mathFunctions.getFibonacciElement(inputNumber) : ""
    }

    res.render('fibonacci', data)
};


const pageGcd = (req, res) => {

    var firstNumber = parseInt(req.body.firstNumber);
    var secondNumber = parseInt(req.body.secondNumber);

    const data = {
        firstNumber : firstNumber,
        secondNumber : secondNumber,
        result : mathFunctions.getGcd(firstNumber, secondNumber)
    }

    res.render('gcd', data)
};


const pageCount = (req, res) => {

    var inputNumber = parseInt(req.body.inputNumber);

    const data = {
        inputNumber : inputNumber,
        result : inputNumber ? mathFunctions.getCount(inputNumber) : ""
    }

    res.render('count', data)
};


const pageQuickSort = (req, res) => {

    const copiedInput = inputArray.slice();
    
    var inputArray = (req.body.inputArray) ? formatArray.stringToArray(req.body.inputArray) : "";
    var result = mathFunctions.getQuickSortedArray(inputArray, 0, inputArray.length - 1);
    
    const data = {
        inputArray : formatArray.arrayValidator(copiedInput) ? formatArray.arrayToString(copiedInput) : "",
        result : formatArray.arrayValidator(result) ? formatArray.arrayToString(result) : ""
    }

    res.render('quickSort', data)
};


const pageSum = (req, res) => {

    var inputArray = formatArray.stringToArray(req.body.inputArray);
    var result = mathFunctions.getSumOfNumbers(inputArray);

    const data = {
        inputArray : formatArray.arrayValidator(inputArray) ? formatArray.arrayToString(inputArray) : "",
        result : formatArray.arrayValidator(result) ? formatArray.arrayToString(result) : ""
    }

    res.render('sum', data)
};


module.exports = {
    pageIndex,
    pagePrime,
    pageFibonacci,
    pageGcd,
    pageCount,
    pageQuickSort,
    pageSum
}