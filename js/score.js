var input = document.querySelector("input");
var maxScoreDisplay = document.getElementById("scorelimit");
var p1ScoreBtn = document.querySelector("#player1");
var p2ScoreBtn = document.querySelector("#player2");
var p1Score = 0;
var p2Score = 0;
var p1ScoreDisplay = document.querySelector("#player1score");
var p2ScoreDisplay = document.querySelector("#player2score");
var maxScore = 5;
var gameOver = false;
var resetBtn = document.getElementById("reset");
p1ScoreDisplay.textContent = p1Score;
p2ScoreDisplay.textContent = p2Score;
maxScoreDisplay.textContent = maxScore;

input.addEventListener("change", function () {
  maxScoreDisplay.textContent = input.value;
  maxScore = Number(input.value);
  reset();
});

p1ScoreBtn.addEventListener("click", function () {
  if (!gameOver) {
    p1Score++;
    if (p1Score === maxScore) {
      gameOver = true;
      p1ScoreDisplay.style.color = "#00da00";
    }
  }
  p1ScoreDisplay.textContent = p1Score;
});

p2ScoreBtn.addEventListener("click", function () {
  if (!gameOver) {
    p2Score++;
    if (p2Score === maxScore) {
      gameOver = true;
      p2ScoreDisplay.style.color = "#00da00";
    }
  }
  p2ScoreDisplay.textContent = p2Score;
});

resetBtn.addEventListener("click", reset)

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1ScoreDisplay.textContent = 0;
  p2ScoreDisplay.textContent = 0;
  p1ScoreDisplay.style.color = "initial";
  p2ScoreDisplay.style.color = "initial";
  gameOver = false;
}