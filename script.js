let computerNum = 0;
let playBt = document.querySelector(".play-bt");
let userInput = document.getElementById("user-input");
let resultArea = document.querySelector(".result-area-text");
let resetBt = document.querySelector(".reset-bt");
let chanceArea = document.querySelector(".chance-area");
let history = [];
let inputMessage = document.querySelector(".input-messege");
let chanceAreaNum = 5;
let gameOver = false;
let correct = document.querySelector(".correct");

correct.addEventListener("click", function () {
  alert(`정답: ${computerNum}`);
});

playBt.addEventListener("click", play);
resetBt.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});
function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100 + 1);
}
function play() {
  let userValue = userInput.value;
  inputMessage.textContent = "";

  if (userValue > 100 || userValue <= 0) {
    inputMessage.textContent = "1 부터 100 사이의 숫자를 입력해주세요.";
    return;
  }
  if (history.includes(userValue)) {
    inputMessage.textContent = "이미 입력한 숫자 입니다.";
    return;
  } else {
    history.push(userValue);
    chanceAreaNum -= 1;
    chanceArea.textContent = `남은 기회: ${chanceAreaNum}번`;
  }

  if (userValue < computerNum) {
    resultArea.textContent = "Up!";
    resultArea.style = "color:#F7361B";
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down!";
    resultArea.style = "color:#1B66F7";
  } else {
    resultArea.textContent = "정답!";
    resultArea.style = "color:#1BD939";
    inputMessage.textContent = `정답: ${computerNum}`;
    playBt.disabled = true;
    userInput.disabled = true;
    playBt.style = "display:none";
    resetBt.style = "border-radius:8px";
  }
  if (chanceAreaNum <= 0) {
    gameOver = true;
  }

  if (gameOver) {
    playBt.disabled = true;
    userInput.disabled = true;
    playBt.style = "display:none";
    resetBt.style = "border-radius:8px";
    resultArea.textContent = `게임 오버`;
    resultArea.style = "color:#F7361B";
    inputMessage.textContent = `정답: ${computerNum}`;
    return;
  }
}
function reset() {
  pickRandomNum();
  userInput.value = "";
  resultArea.textContent = "시작";
  resultArea.style = "color:#000";
  inputMessage.textContent = "";
  chanceAreaNum = 5;
  chanceArea.textContent = `남은 기회: ${chanceAreaNum}번`;
  history.splice(0, history.length);
  playBt.disabled = false;
  userInput.disabled = false;
  gameOver = false;
  playBt.style = "display:block";
  resetBt.style = "border-radius:8px 0 0 8px";
}
pickRandomNum();
