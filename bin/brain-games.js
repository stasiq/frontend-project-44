import readlineSync from 'readline-sync';
import gameEngine from '../src/engine.js';
import evenGame from '../src/games/brain-even.js';
import calcGame from '../src/games/brain-calc.js';
import gcdGame from '../src/games/brain-gcd.js';
import primeGame from '../src/games/brain-prime.js';
import progressionGame from '../src/games/brain-progression.js';

const games = [
    {
        name: 'brain-even',
        description: 'Answer "yes" if the number is even, otherwise answer "no".',
        logic: evenGame
    },
    {
        name: 'brain-calc',
        description: 'Calculator',
        logic: calcGame
    },
    {
        name: 'brain-gcd',
        description: 'Сommon divisor',
        logic: gcdGame
    },
    {
        name: 'brain-prime',
        description: 'Dound prime number',
        logic: primeGame
    },
    {
        name: 'brain-progression',
        description: 'What number is missing in the progression?',
        logic: progressionGame
    }
];

function showMenu() {
    console.log('\n🎯 Welcome to the Brain Games!');
    console.log('Choose a game:\n');

    games.forEach((game, index) => {
        console.log(`${index + 1}. ${game.name}`);
        console.log(`   ${game.description}`);
        console.log('');
    });

    console.log('0. Выйти из игры');
    console.log('─'.repeat(50));
}

function main() {

    while (true) {
        showMenu();

        const choice = readlineSync.question('Enter the game number (1-5) or 0 to exit: ').trim();
        const index = parseInt(choice) - 1;

        if (choice === '0') {
            console.log('\n👋 Goodbye, come back again!');
            break;
        }

        if (index >= 0 && index < games.length) {
            console.log(`\n🚀 Launching the game: ${games[index].name}`);
            console.log('─'.repeat(50));

            gameEngine(games[index].description, games[index].logic);

            console.log('─'.repeat(50));
            console.log('Do you want to play some more?');
        } else {
            console.log('\n❌ Incorrect selection. Please enter a number between 0 and 5.');
        }
    }
}

main();
