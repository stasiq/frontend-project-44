import readlineSync from 'readline-sync';

const name = readlineSync.question('Как вас зовут? ');

console.log(`Привет, ${name}!`);
console.log('Welcome to the Brain Games!');
