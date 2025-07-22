import readlineSync from 'readline-sync';

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const correctAnswer = gcd(num1, num2);

    return {
        question: `${num1} ${num2}`,
        answer: correctAnswer
    };
}

function playGCDGame() {
    console.log('brain-gcd');
    console.log('Welcome to the Brain Games!');

    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Find the greatest common divisor of given numbers.');

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

    console.log(`\nCongratulations, ${name}!`);
}

playGCDGame();
