const calculatorScreen = document.querySelector('.calculator-screen')
const operators = document.querySelectorAll('.operator')

let prevNumber = ''
let calculatorOperator = ''
let currentNumber = '0'

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value)
        updateScreen(event.target.value)
    });
});

const inputOperator = (operator) => {
    if (calculatorOperator === '') {
        prevNumber = currentNumber
    }
    calculatorOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    const number = calculate(calculatorOperator, prevNumber, currentNumber)
    currentNumber = number
    calculatorOperator = ''
    updateScreen(currentNumber)
});


let result = ''
const calculate = (calculatorOperator, prevNumber, currentNumber) => {
    switch (calculatorOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = prevNumber - currentNumber
            break
        case '*':
            result = prevNumber * currentNumber
            break
        case '/':
            result = prevNumber / currentNumber
            break
        default:
            return
    }
    return result
}

const clearAll = () => {
    prevNumber = ''
    calculatorOperator = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
});

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
});