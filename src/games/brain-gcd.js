// src/games/brain-gcd.js
import {getRandomNumber} from '../utils.js';

function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

export default function gcdGame() {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);

    const question = `${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2).toString();

    return {
        question,
        correctAnswer
    };
}
