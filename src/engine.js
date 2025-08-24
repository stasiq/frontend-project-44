import {getUserName} from './utils.js';
import readlineSync from 'readline-sync';

export default function gameEngine(description, gameLogic) {
    console.log('Welcome to the Brain Games!');

    const userName = getUserName();

    console.log(description);

    const roundsCount = 3; // Количество раундов в каждой игре

    for (let i = 0; i < roundsCount; i++) {
        const {question, correctAnswer} = gameLogic();

        console.log(`Question: ${question}`);

        const userAnswer = readlineSync.question('Your answer: ').trim();

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
            console.log(`Let's try again, ${userName}`);
            return; // Завершаем игру при неправильном ответе
        }
    }

    console.log(`Congratulations, ${userName}`);
}
