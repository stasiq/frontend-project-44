import {getRandomNumber} from '../utils.js';

function getRandomOperator() {
    const operators = ['+', '-', '*'];
    return operators[getRandomNumber(0, operators.length - 1)];
}

function calculate(a, operator, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        default:
            return null;
    }
}

export default function calcGame() {
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    const operator = getRandomOperator();

    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculate(num1, operator, num2).toString();

    return {
        question,
        correctAnswer
    };
}
