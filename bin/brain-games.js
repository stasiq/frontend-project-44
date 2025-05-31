#!/usr/bin/env node
import readlineSync from 'readline-sync';
// const name = readlineSync.question('Your answer: ');
// Спрашиваем имя пользователя
const name = readlineSync.question('Как вас зовут? ');

// Выводим приветствие
console.log(`Привет, ${name}!`);
console.log('Welcome to the Brain Games!');
