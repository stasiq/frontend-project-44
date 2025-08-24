// src/games/brain-prime.js
import {getRandomNumber, isPrime} from '../utils.js';

export default function primeGame() {
    const number = getRandomNumber(2, 100);
    const question = number.toString();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    return {
        question,
        correctAnswer
    };
}
