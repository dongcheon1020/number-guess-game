// 랜덤번호 지정
// 유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다
// 랜덤번호가 < 유저번호 down
// 랜덤번호가 > 유저번호 up
// reset 버튼을 누르면 게임이 리셋
// 5번의 기회를 다 쓰면 게임이 끝난다.
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다 , 기회를 깢지 않음

// let computerNum = 0;
// let playBt = document.getElementById("play-bt");
// let userInput = document.getElementById("user-input");
// let resultArea = document.getElementById("result-area");
// let resetBt = document.getElementById("reset-bt");
// let chanceArea = document.getElementById("chance-area");
// let chances = 5;
// let gameOver = false;
// let history = [];

// playBt.addEventListener("click", play);
// resetBt.addEventListener("click", reset);
// userInput.addEventListener("focus", function () {
//   userInput.value = "";
// });

// function pickRandomNum() {
//   computerNum = Math.floor(Math.random() * 100 + 1);
//   console.log("정답", computerNum);
// }
// function play() {
//   let userValue = userInput.value;

//   if (userValue < 1 || userValue > 100) {
//     resultArea.textContent = "1과 100사이 숫자를 입력해 주세요";
//     return;
//   }
//   if (history.includes(userValue)) {
//     resultArea.textContent = "이미 입력한숫자 입니다.";
//     return;
//   }

//   chances--;
//   chanceArea.textContent = `남은기회: ${chances}번`;
//   console.log(chances);
//   if (userValue < computerNum) {
//     resultArea.textContent = "Up!";
//   } else if (userValue > computerNum) {
//     resultArea.textContent = "Down!";
//   } else {
//     resultArea.textContent = "정답!";
//     gameOver=true
//   }
//   history.push(userValue);
//   console.log(history);

//   if (chances <= 0) {
//     gameOver = true;
//   }
//   if (gameOver == true) {
//     playBt.disabled = true;
//   }
// }
// function reset() {
//   userInput.value = "";
//   pickRandomNum();
//   resultArea.textContent = "결과";
// }
// pickRandomNum();
