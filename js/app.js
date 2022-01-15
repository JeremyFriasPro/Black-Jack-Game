

let balance = document.getElementById('balance');
let moneyIn = document.getElementById('moneyIn');

/* /Lever Effect/ When coins are pressed we will subtract 
from bankAmount and add to moneyInGame*/
let bankAmount = 1000;
let moneyInGame = 0;


// Coins
let coinOne = document.getElementById('addOne');
let coinTen = document.getElementById('addTen');
let coinFifty = document.getElementById('addFifty');
let coinHundred = document.getElementById('addHundred');
let coinFiveHundred = document.getElementById('addFiveHundred');

// Buttons
let putBack = document.getElementById('putBack');
let reset = document.getElementById('reset');
let begin = document.getElementById('begin');

let bLink = document.querySelector('.btn-section a');

// Add Event Listeners (click) to Coins
// Subtracting From our $1000 Balance
// Adding to our $0 balance
coinOne.addEventListener('click', e => {
    bankAmount -= 1;
    balance.textContent = `$${bankAmount}`;
    moneyInGame += 1;
    moneyIn.textContent = `$${moneyInGame}`;

    if (bankAmount < 0 && moneyInGame > 1000) {
        bankAmount = 0;
        moneyInGame = 1000;
        balance.textContent = `$${bankAmount}`;
        moneyIn.textContent = `$${moneyInGame}`;
    }
})

coinTen.addEventListener('click', e => {
    bankAmount -= 10;
    balance.textContent = `$${bankAmount}`;
    moneyInGame += 10;
    moneyIn.textContent = `$${moneyInGame}`;

    if (bankAmount < 0 && moneyInGame > 1000) {
        bankAmount = 0;
        moneyInGame = 1000;
        balance.textContent = `$${bankAmount}`;
        moneyIn.textContent = `$${moneyInGame}`;
    }
})

coinFifty.addEventListener('click', e => {
    bankAmount -= 50;
    balance.textContent = `$${bankAmount}`;
    moneyInGame += 50;
    moneyIn.textContent = `$${moneyInGame}`;

    if (bankAmount < 0 && moneyInGame > 1000) {
        bankAmount = 0;
        moneyInGame = 1000;
        balance.textContent = `$${bankAmount}`;
        moneyIn.textContent = `$${moneyInGame}`;
    }
})

coinHundred.addEventListener('click', e => {
    bankAmount -= 100;
    balance.textContent = `$${bankAmount}`;
    moneyInGame += 100;
    moneyIn.textContent = `$${moneyInGame}`;

    if (bankAmount < 0 && moneyInGame > 1000) {
        bankAmount = 0;
        moneyInGame = 1000;
        balance.textContent = `$${bankAmount}`;
        moneyIn.textContent = `$${moneyInGame}`;
    }
})

coinFiveHundred.addEventListener('click', e => {
    bankAmount -= 500;
    balance.textContent = `$${bankAmount}`;
    moneyInGame += 500;
    moneyIn.textContent = `$${moneyInGame}`;

    if (bankAmount < 0 && moneyInGame > 1000) {
        bankAmount = 0;
        moneyInGame = 1000;
        balance.textContent = `$${bankAmount}`;
        moneyIn.textContent = `$${moneyInGame}`;
    }
})


// Add Event Listeners (click) to Buttons
reset.addEventListener('click', e => {
    bankAmount = 1000;
    moneyInGame = 0;
    balance.textContent = `$${bankAmount}`;
    moneyIn.textContent = `$${moneyInGame}`;
});

begin.addEventListener('click', e => {
    if(moneyInGame > 0) {
        bLink.setAttribute('href', '/html/begin.html');
    }
});
