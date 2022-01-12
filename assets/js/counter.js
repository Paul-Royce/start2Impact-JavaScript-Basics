
// COUNTER DISPLAY
const anchor = document.querySelector('.display-container');
const display = document.createElement('div')
display.textContent = 0;
display.className = 'counter-display';
anchor.append(display);

// DECREASE INPUT
const anchorOne = document.querySelector('.decrease-box');
const btnDecrease = document.createElement('button');
btnDecrease.textContent = '-';
btnDecrease.setAttribute('id', 'button-decrease');
anchorOne.append(btnDecrease);

// INCREASE INPUT
const anchoTwo = document.querySelector('.increase-box');
const btnIncrease = document.createElement('button');
btnIncrease.textContent = '+';
btnIncrease.setAttribute('id', 'button-increase');
anchoTwo.append(btnIncrease);

// RESET INPUT
const anchorThree = document.createElement('div');
anchorThree.setAttribute('class', 'reset-container')
const mainAnchor = document.querySelector('main') /* i should choose a better naming instead of mainAnhor */
mainAnchor.append(anchorThree);

const btnReset = document.createElement('button');
btnReset.textContent = 'RESET';
btnReset.setAttribute('id', 'reset-btn');
anchorThree.append(btnReset);


// FUNCTIONS
btnDecrease.addEventListener('click', decreaseNumber);
btnIncrease.addEventListener('click', increaseNumber);
btnReset.addEventListener('click', resetNumber)

function decreaseNumber (){
    display.textContent--;
    display.style.color = 'red'
}

function increaseNumber (){
    display.textContent++;
    display.style.color = 'green'
}

function resetNumber (){
    display.textContent = 0;
    display.style.color = 'black';
}

