// DOM
const vsPlayerBtn = document.getElementById('vsPlayer');
const vsCompBtn = document.getElementById('vsComp');
const resetBtn = document.getElementById('resetBtn');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissBtn = document.getElementById('scissBtn');

const leftScore = document.querySelector('.player-score');
const rightScore = document.querySelector('.computer-score');
const leftTurnDisplay = document.querySelector('.player-one-turn')
const rightTurnDisplay = document.querySelector('.player-two-turn')
const announcementText = document.querySelector('.announcement');
let turn = 0;
let leftCounter = 0;
let rightCounter = 0;
let roundArray = [];
let leftName = 'Ben'
let rightName = 'James'

vsPlayerBtn.addEventListener('click', () => {
    vsCompBtn.style.display = "none";
    rockBtn.style.display = "block"; 
    paperBtn.style.display = "block";
    scissBtn.style.display = "block";
    playerGame();
    setTimeout(() => {
        vsPlayerBtn.style.visibility = "hidden"
    }, 5000)
    leftScore.innerHTML = `${leftName}'s score: ${leftCounter}`
    rightScore.innerHTML = `${rightName}'s score: ${leftCounter}`
    leftTurnDisplay.innerHTML = `${leftName}'s turn!`
    rightTurnDisplay.innerHTML = `${rightName}'s turn!`
    rightTurnDisplay.style.visibility = 'hidden';
})

function playerGame() {
    rockBtn.addEventListener('click', () => {
        turn++;
        roundArray.push('rock');
        winDetermination();
        turnSignal();
        return 'rock';
    })
    paperBtn.addEventListener('click', () => {
        turn++;
        roundArray.push('paper');
        winDetermination();
        turnSignal();
        return 'paper';
    })
    scissBtn.addEventListener('click', () => {
        turn++;
        roundArray.push('scissors');
        winDetermination();
        turnSignal();
        return 'scissors';
    })
}
function vsComputerGame() {
    rockBtn.addEventListener('click', () => {
        computerChoice();
        turn++;
        roundArray.push('rock');
        computerWinDetermination();
        return 'rock';
    })
    paperBtn.addEventListener('click', () => {
        computerChoice();
        turn++;
        roundArray.push('paper');
        computerWinDetermination();
        return 'paper';
    })
    scissBtn.addEventListener('click', () => {
        computerChoice();
        turn++;
        roundArray.push('scissors');
        computerWinDetermination();
        return 'scissors';
    })
}

vsCompBtn.addEventListener('click', () => {
    vsPlayerBtn.style.display = "none";
    rockBtn.style.display = "block"; 
    paperBtn.style.display = "block";
    scissBtn.style.display = "block";
    setTimeout(() => {
        vsCompBtn.style.visibility = "hidden"
    }, 5000)
    rightName = 'Computer';
    leftScore.innerHTML = `${leftName}'s score: ${leftCounter}`
    rightScore.innerHTML = `${rightName}'s score: ${leftCounter}`
    vsComputerGame();
})

function computerChoice() {
    let computerChoiceSelection = Math.floor((Math.random() * 3) + 1)
    console.log(computerChoiceSelection)
    turn++;
    if (computerChoiceSelection == 1) {
        turn++;
        roundArray.push('rock')
        return 'rock';
    } else if (computerChoiceSelection == 2) {
        turn++;
        roundArray.push('paper')
        return 'paper';
    } else if (computerChoiceSelection == 3) {
        turn++;
        roundArray.push('scissors')
        return 'scissors';
    }
}

function winDetermination() {
    if (turn != 0 && turn % 2 == 0) {
        console.log(roundArray)
        winCombinations();
        roundArray = [];
    }
    leftScore.innerHTML = `${leftName}'s score: ${leftCounter}`
    rightScore.innerHTML = `${rightName}'s score: ${rightCounter}`
    if (leftCounter == 5) {
        alert(`${leftName} wins!`)
        winnerCalled()
    } else if (rightCounter == 5) {
        alert(`${rightName} wins!`)
        winnerCalled()
    }
}

function turnSignal() {
    if (turn % 2 != 0) {
        leftTurnDisplay.style.visibility = "hidden"
        rightTurnDisplay.style.visibility = "visible"
    } else if (turn % 2 == 0) {
        leftTurnDisplay.style.visibility = "visible"
        rightTurnDisplay.style.visibility = "hidden"
    }
}

function computerWinDetermination() {
    if (turn % 3 == 0) {
        console.log(roundArray)
        winCombinations();
        roundArray = [];
    }
    leftScore.innerHTML = `${leftName}'s score: ${leftCounter}`
    rightScore.innerHTML = `${rightName}'s score: ${rightCounter}`
    if (leftCounter == 5) {
        alert(`${leftName} wins!`)
        winnerCalled()
    } else if (rightCounter == 5) {
        alert(`${rightName} wins!`)
        winnerCalled()
    }
}

function winnerCalled() {
    leftScore.innerHTML = ''
    rightScore.innerHTML = ''
    rockBtn.style.visibility = 'hidden'
    paperBtn.style.visibility = 'hidden'
    scissBtn.style.visibility = 'hidden'
    leftTurnDisplay.innerHTML = ''
    rightTurnDisplay.style.visibility = 'visible'
    resetBtn.style.width = '100vw'
    resetBtn.style.height = '100vh'
}

function winCombinations() {
    if (roundArray[0] == 'rock' && roundArray[1] == 'rock') {
        console.log("It's a draw!")
    } else if (roundArray[0] == 'paper' && roundArray[1] == 'paper') {
        console.log("It's a draw!")
    } else if (roundArray[0] == 'scissors' && roundArray[1] == 'scissors') {
        console.log("It's a draw!")
    } else if (roundArray[0] == 'rock' && roundArray[1] == 'scissors') {
        console.log(`${leftName} wins!`)
        leftCounter++;
    } else if (roundArray[0] == 'paper' && roundArray[1] == 'rock') {
        console.log(`${leftName} wins!`)
        leftCounter++
    } else if (roundArray[0] == 'scissors' && roundArray[1] == 'paper') {
        console.log(`${leftName} wins!`)
        leftCounter++
    } else if (roundArray[0] == 'rock' && roundArray[1] == 'paper') {
        console.log(`${rightName} wins!`)
        rightCounter++
    } else if (roundArray[0] == 'paper' && roundArray[1] == 'scissors') {
        console.log(`${rightName} wins!`)
        rightCounter++
    } else if (roundArray[0] == 'scissors' && roundArray[1] == 'rock') {
        console.log(`${rightName} wins!`)
        rightCounter++
    } 
}

function resetGame() {
    location.reload()
}