let boxes = document.querySelectorAll(".box");
let btn = document.querySelector(".btn");
let msgContainer = document.querySelector(".msgContainer");
let resetBtn = document.querySelector(".resetBtn");
let msg = document.querySelector(".msg");

let turn = true;

const winnerPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 7],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn = true;
  enaabledBoxes();
  msgContainer.classList.add("hide");
};

const enaabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked.");
    if (turn) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (pasiVal1) => {
  msg.innerText = `Congratulation, winner is ${pasiVal1}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const checkWinner = () => {
  for (let pattern of winnerPattern) {
    let pasiVal1 = boxes[pattern[0]].innerText;
    let pasiVal2 = boxes[pattern[1]].innerText;
    let pasiVal3 = boxes[pattern[2]].innerText;

    if (pasiVal1 != "" && pasiVal2 != "" && pasiVal3 != "") {
      if (pasiVal1 === pasiVal2 && pasiVal2 === pasiVal3) {
        console.log("Winner");
        showWinner(pasiVal1);
      }
    }
  }
};

resetBtn.addEventListener("click", resetGame);
btn.addEventListener("click", resetGame);
