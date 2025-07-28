import readlineSync from 'readline-sync';

// Функция для генерации арифметической прогрессии
function generateProgression(start, step, length) {
    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * step);
    }
    return progression;
}

// Функция для создания вопроса с пропущенным числом
function generateQuestion() {
    const start = getRandomNumber(-50, 50);
    const step = getRandomNumber(1, 10);
    const length = getRandomNumber(5, 10);

    const progression = generateProgression(start, step, length);
    const hiddenIndex = getRandomNumber(0, length - 1);
    const correctAnswer = progression[hiddenIndex];

    const visibleProgression = [...progression];
    visibleProgression[hiddenIndex] = '..';

    return {
        question: visibleProgression.join(' '),
        answer: correctAnswer
    };
}

// Функция для генерации случайного числа
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playProgressionGame() {
    console.log('brain-progression');
    console.log('Welcome to the Brain Games!');

    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What number is missing in the progression?');

    let score = 0;
    const rounds = 3;

    for (let i = 0; i < rounds; i++) {
        const {question, answer} = generateQuestion();

        console.log(`\nQuestion: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (parseInt(userAnswer) === answer) {
            console.log('Correct!');
            score++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log(`Let's try again, ${name}!`);
            return; // Завершаем игру при неправильном ответе
        }
    }

    console.log(`Congratulations, ${name}!`);
}

playProgressionGame();
