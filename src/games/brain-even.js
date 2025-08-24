// src/games/brain-even.js
import {getRandomNumber} from '../utils.js';

function isEven(number) {
    return number % 2 === 0;
}

export default function evenGame() {
    const number = getRandomNumber(1, 100); // Генерируем число от 1 до 100
    const question = number.toString(); // Вопрос - это само число
    const correctAnswer = isEven(number) ? 'yes' : 'no'; // Ответ: yes/no

    return {
        question,
        correctAnswer
    };
}
