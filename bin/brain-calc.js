import readlineSync from 'readline-sync';

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperator() {
    const operators = ['+', '-', '*'];
    return operators[Math.floor(Math.random() * operators.length)];
}

function calculate(a, operator, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        default:
            return null;
    }
}

function generateExpression() {
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    const operator = getRandomOperator();
    const expression = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculate(num1, operator, num2);

    return {
        expression: expression,
        answer: correctAnswer
    };
}

function playGame() {
    const rounds = 3;
    let score = 0;

    console.log('Welcome to the Brain Games!');
    console.log('Solve mathematical expressions and write down.');

    for (let i = 1; i <= rounds; i++) {
        const {expression, answer} = generateExpression();

        console.log(`\nRound ${i}/${rounds}`);
        console.log(`Question: ${expression}`);

        const userAnswer = readlineSync.question('Your answer: ');

        if (parseInt(userAnswer) === answer) {
            console.log('Correct!');
            score++;
        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}`)
        }
    }

    console.log(`\nYour result: ${score}/${rounds}`);
}

playGame();