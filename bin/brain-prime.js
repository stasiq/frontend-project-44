import readlineSync from 'readline-sync';

// Функция для проверки числа на простоту
function isPrime(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Функция для генерации случайного числа
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Основная функция игры
function playPrimeGame() {
    console.log('brain-prime');
    console.log('Welcome to the Brain Games!');

    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    let score = 0;
    const rounds = 3;

    for (let i = 0; i < rounds; i++) {
        const number = getRandomNumber(1, 100); // Генерируем случайное число от 1 до 100
        const correctAnswer = isPrime(number) ? 'yes' : 'no';

        console.log(`\nQuestion: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer.toLowerCase() === correctAnswer) {
            console.log('Correct!');
            score++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return; // Завершаем игру при неправильном ответе
        }
    }

    console.log(`\nCongratulations, ${name}!`);
}

playPrimeGame();
