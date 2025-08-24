import {getRandomNumber} from '../utils.js';

function generateProgression(start, step, length) {
    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * step);
    }
    return progression;
}

export default function progressionGame() {
    const start = getRandomNumber(-50, 50);
    const step = getRandomNumber(1, 10);
    const length = getRandomNumber(5, 10);

    const progression = generateProgression(start, step, length);
    const hiddenIndex = getRandomNumber(0, length - 1);
    const correctAnswer = progression[hiddenIndex]; // Исправлено: добавлены квадратные скобки

    const visibleProgression = [...progression]; // Создаем копию прогрессии
    visibleProgression[hiddenIndex] = '..'; // Исправлено: правильно заменяем элемент
    const question = visibleProgression.join(' ');

    return {
        question,
        correctAnswer: correctAnswer.toString()
    };
}
