// DOM
const vsPlayerBtn = document.getElementById('vsPlayer');
const vsCompBtn = document.getElementById('vsComp');
const resetBtn = document.getElementById('resetBtn');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissBtn = document.getElementById('scissBtn');

const leftScore = document.querySelector('.player-score');
const rightScore = document.querySelector('.computer-score')
const announcementText = document.querySelector('.announcement');

vsPlayerBtn.addEventListener('click', () => {
    vsCompBtn.style.display = "none";
    rockBtn.style.display = "block";
    paperBtn.style.display = "block";
    scissBtn.style.display = "block";
    setTimeout(() => {
        vsPlayerBtn.style.visibility = "hidden"
    }, 5000)
})