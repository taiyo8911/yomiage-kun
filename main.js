"use strict"

// 読み上げるテキスト
const y = ["279", "275", "292", "292乙", "特急", "公休", "297", "297乙", "291", "291乙", "特急", "公休", "276", "271", "283", "283乙", "特急", "予備または公休または特急", "296", "296乙", "289", "289乙", "特急", "公休", "277", "273", "282", "282乙", "公休", "295", "295乙", "285", "285乙", "特急", "公休", "278", "272", "287", "287乙", "特急", "予備または公休または特急", "290", "290乙", "281", "281乙", "特急", "公休", "280", "274", "293", "293乙", "特急", "公休", "288", "288乙", "286", "286乙", "特急", "予備または公休または特急", "294", "294乙", "284", "284乙", "特急", "公休", "終了です！"];

var speakText = [];
const select = document.querySelector('#start_text');
var options = document.querySelectorAll("#start_text option");
const speakBtn = document.querySelector('#speak-btn');
const cancelBtn = document.querySelector('#cancel-btn');
const pauseBtn = document.querySelector('#pause-btn');
const resumeBtn = document.querySelector('#resume-btn');

select.addEventListener('change', function () {
    speakBtn.disabled = false;
    // 初期化
    speakText = [];
    // 読み上げ開始位置の指定
    var index = this.selectedIndex;
    var startText = options[index].value;
    var startIndex = y.indexOf(startText);
    // 区切らせるために単語の間に「、」を入れる
    for (var i = startIndex; i < y.length; i++) {
        speakText.push(y[i] + "、");
    }
})
speakBtn.addEventListener('click', function () {
    speakBtn.disabled = true;
    cancelBtn.disabled = false;
    pauseBtn.disabled = false;
    // 発言を作成
    const uttr = new SpeechSynthesisUtterance(speakText)
    // 速度
    uttr.rate = 0.6;
    // 発言を再生 (発言キュー発言に追加)
    speechSynthesis.speak(uttr);
})
cancelBtn.addEventListener('click', function () {
    cancelBtn.disabled = true;
    speakBtn.disabled = false;
    pauseBtn.disabled = true;
    resumeBtn.disabled = true;
    // 再生停止 (発言キューをクリアして止まる)
    speechSynthesis.cancel();
})
pauseBtn.addEventListener('click', function () {
    pauseBtn.disabled = true;
    speakBtn.disabled = true;
    resumeBtn.disabled = false;
    // 一時停止 (発言キューを保持して止まる)
    speechSynthesis.pause();
})
resumeBtn.addEventListener('click', function () {
    resumeBtn.disabled = true;
    pauseBtn.disabled = false;
    // 再生再開 (一時停止を解除)
    speechSynthesis.resume();
})