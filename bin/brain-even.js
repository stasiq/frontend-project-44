#!/usr/bin/env node
import readlineSync from 'readline-sync';
// const name = readlineSync.question('Your answer: ');
console.log('Welcome to the Brain Games!');
// Спрашиваем имя пользователя
const name = readlineSync.question('May I have your name? ');

// Выводим приветствие
console.log(`Hello, ${name}!`);


// Функция для генерации случайного числа
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // генерируем число от 1 до 100
}

// Функция проверки чётности
function isEven(number) {
    return number % 2 === 0;
}

// Основная функция игры
function playGame() {
    const number = getRandomNumber();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`\nКакое число загадано: ${number}`);
    const userAnswer = readlineSync.question('Это число чётное? (yes/no): ');

    if (userAnswer.toLowerCase() === correctAnswer) {
        console.log('Correct! 🎉');
        return true;
    } else {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
        return false;
    }
}

// Функция запуска игры
function startGame() {
    console.log('Добро пожаловать в игру "Проверка на чётность"!');
    console.log('Правила: отвечайте "yes", если число чётное, или "no", если нечётное.');

    let score = 0;
    const totalRounds = 3;

    for (let i = 1; i <= totalRounds; i++) {
        console.log(`\nРаунд ${i}/${totalRounds}`);
        if (playGame()) {
            score++;
        }
    }

    console.log(`\nResult: ${score}/${totalRounds}`);
}

// Запуск игры
startGame();

