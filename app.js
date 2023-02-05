// DOM
const bigBertha = document.querySelector('.game-container')
const vsPlayerBtn = document.getElementById('vsPlayer');
const vsCompBtn = document.getElementById('vsComp');
const resetBtn = document.getElementById('resetBtn');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissBtn = document.getElementById('scissBtn');
const btnCont = document.querySelector('.button-container')
const scoreArea = document.querySelector('.score');
const leftScore = document.querySelector('.player-score');
const rightScore = document.querySelector('.computer-score');
const leftTurnDisplay = document.querySelector('.player-one-turn')
const rightTurnDisplay = document.querySelector('.player-two-turn')
const announcementText = document.querySelector('.announcement');
const playAgainButton = document.createElement('button');
playAgainButton.innerHTML = "Play again?";
playAgainButton.classList.add('play-again')
const winnerAnnouncement = document.createElement('div')
winnerAnnouncement.classList.add('winner-announcement')
var gameInProgress = false;
let turn = 0;
let leftCounter = 0;
let rightCounter = 0;
let roundArray = [];
let leftName = 'Ben'
let rightName = 'James'
let leftPlayerScore = 0;
let rightPlayerScore = 0;

vsPlayerBtn.addEventListener('click', () => {
    vsCompBtn.style.visibility = "hidden";
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
    if (leftCounter < 5 || rightCounter < 5) {
        gameInProgress = true;
    } else {
        gameInProgress = false;
    }
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
    vsPlayerBtn.style.visibility = "hidden";
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
        winnerAnnouncement.innerHTML = `${leftName} wins! ${leftCounter} : ${rightCounter}`
        leftPlayerScore++
        winnerCalled()
    } else if (rightCounter == 5) {
        winnerAnnouncement.innerHTML = `${rightName} wins! ${rightCounter} : ${leftCounter}`
        rightTurnDisplay.style.visibility = "hidden"
        leftTurnDisplay.style.visibility = "hidden"
        winnerCalled()
        rightPlayerScore++
    }
    scoreArea.appendChild(winnerAnnouncement)
}

function turnSignal() {

    if (leftCounter == 5) {
        leftTurnDisplay.style.visibility = "hidden"
        rightTurnDisplay.style.visibility = "hidden"
    } else if (rightCounter == 5) {
        leftTurnDisplay.style.visibility = "hidden"
        rightTurnDisplay.style.visibility = "hidden"
    } else {
        if (turn % 2 != 0) {
            leftTurnDisplay.style.visibility = "hidden"
            rightTurnDisplay.style.visibility = "visible"
        } else if (turn % 2 == 0) {
            leftTurnDisplay.style.visibility = "visible"
            rightTurnDisplay.style.visibility = "hidden"
        } 
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
        winnerAnnouncement.innerHTML = `${leftName} wins! ${leftCounter} : ${rightCounter}`
        leftPlayerScore++
        winnerCalled()
    } else if (rightCounter == 5) {
        winnerAnnouncement.innerHTML = `${rightName} wins! ${rightCounter} : ${leftCounter}`
        rightTurnDisplay.style.visibility = "hidden"
        leftTurnDisplay.style.visibility = "hidden"
        winnerCalled()
        rightPlayerScore++
    }
    scoreArea.appendChild(winnerAnnouncement)
}

function winnerCalled() {
    announcementText.style.display = "none"
    vsCompBtn.style.visibility = "hidden"
    vsPlayerBtn.style.visibility = "hidden"
    leftScore.style.display = "none"
    rightScore.style.display = "none"
    rockBtn.style.display = "none"
    paperBtn.style.display = "none"
    scissBtn.style.display = "none"
    rightTurnDisplay.style.display = "none"
    leftTurnDisplay.style.display = "none"
    setTimeout(() => {
        scoreArea.appendChild(playAgainButton)
    }, 1100)
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

playAgainButton.addEventListener('click', () => {
    location.reload()
})