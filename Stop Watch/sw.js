const timeDisplay = document.querySelector('.timeDisplay');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resetBtn = document.querySelector('#resetBtn');

let startTime = 0;
let currentTime = 0;
let elapsedTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener('click', () => {
    if (paused) {
        paused = true;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime , 75)

    }
});

pauseBtn.addEventListener('click', () => {
 
clearInterval(intervalId);
elapsedTime = 0;

});
resetBtn.addEventListener('click', () => {
    // paused = false ;
    clearInterval();
    timeDisplay.textContent = "00:00:00";
    

});

function updateTime() {
    elapsedTime = Date.now() - startTime;
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor(elapsedTime / (1000 * 60) % 60);
    hrs = Math.floor(elapsedTime / (1000 * 60 * 60) % 60);


    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent =  `${hrs}:${mins}:${secs}`;
    
    function pad(unit) {
        return(("0") + unit ).length > 2 ? unit : "0" + unit 
    }
}

