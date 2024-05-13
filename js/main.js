const inputText = document.querySelector('#input_text');
const rate = document.querySelector('#rate');
const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
const pauseBtn = document.querySelector('#pause-btn');
const resumeBtn = document.querySelector('#resume-btn');

let speakText;

inputText.addEventListener('change', function () {
    if (inputText.value == "") {
        startBtn.disabled = true;
    }
    else {
        startBtn.disabled = false;
        speakText = '';
        speakText = inputText.value.split('\n');
    }
})

startBtn.addEventListener('click', function () {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    pauseBtn.disabled = false;
    const uttr = new SpeechSynthesisUtterance(speakText);
    uttr.rate = rate.value;
    speechSynthesis.speak(uttr);
})

stopBtn.addEventListener('click', function () {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resumeBtn.disabled = true;
    speechSynthesis.cancel();
})

pauseBtn.addEventListener('click', function () {
    pauseBtn.disabled = true;
    startBtn.disabled = true;
    resumeBtn.disabled = false;
    speechSynthesis.pause();
})

resumeBtn.addEventListener('click', function () {
    resumeBtn.disabled = true;
    pauseBtn.disabled = false;
    speechSynthesis.resume();
})
