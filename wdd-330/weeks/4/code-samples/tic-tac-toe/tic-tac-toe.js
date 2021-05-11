let cells = document.getElementById("board").children;

for (i = 0; i < cells.length; i++) {
  cells[i].addEventListener("touchend", handleTouch, false);
}

function handleTouch(event) {
  if (event.target.classList.contains("tapped")) {
    alert("This square is not free");
  } else {
    let gameOver = checkWinner();
    if (!gameOver) {
      event.target.classList.add(currentPlayer);
      event.target.classList.toggle("tapped");
      event.target.innerText = currentPlayer;
      numberOfPlays++;
      let clickedRow = event.target.getAttribute("data-row");
      let clickedColumn = event.target.getAttribute("data-col");
      currentBoard[clickedRow][clickedColumn] = currentPlayer;
      let gameOver = checkWinner();
      if (gameOver) {
        document.getElementById(
          "result"
        ).innerHTML = `Congratulations, ${currentPlayer} is the winner!`;
      } else {
        currentPlayer = currentPlayer === "❌" ? "⭕" : "❌";
        document.getElementById(
          "result"
        ).innerHTML = `${currentPlayer} it is your move`;
      }
    } else {
      alert("The game has already ended.");
    }
  }
}

let currentPlayer = "❌";

document.getElementById("reset").addEventListener("touchend", resetGame, false);

function resetGame() {
  for (i = 0; i < cells.length; i++) {
    cells[i].classList.remove("❌");
    cells[i].classList.remove("⭕");
    cells[i].classList.remove("tapped");
    cells[i].innerHTML = "";
  }

  currentBoard = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  numberOfPlays = 0;
  currentPlayer = "❌";
  console.table(currentBoard);
  document.getElementById("result").innerHTML = "";
}

let currentBoard = [
  [" 󠀠󠀠", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

let numberOfPlays = 0;

function checkWinner() {
  // top row
  if (
    currentBoard[0][0] !== " " &&
    currentBoard[0][0] == currentBoard[0][1] &&
    currentBoard[0][1] == currentBoard[0][2]
  ) {
    return true;
  }

  // middle row
  if (
    currentBoard[1][0] !== " " &&
    currentBoard[1][0] == currentBoard[1][1] &&
    currentBoard[1][1] == currentBoard[1][2]
  ) {
    return true;
  }

  // bottom row
  if (
    currentBoard[2][0] !== " " &&
    currentBoard[2][0] == currentBoard[2][1] &&
    currentBoard[2][1] == currentBoard[2][2]
  ) {
    return true;
  }

  // left col
  if (
    currentBoard[0][0] !== " " &&
    currentBoard[0][0] == currentBoard[1][0] &&
    currentBoard[1][0] == currentBoard[2][0]
  ) {
    return true;
  }

  // middle col
  if (
    currentBoard[0][1] !== " " &&
    currentBoard[0][1] == currentBoard[1][1] &&
    currentBoard[1][1] == currentBoard[2][1]
  ) {
    return true;
  }

  // right col
  if (
    currentBoard[0][2] !== " " &&
    currentBoard[0][2] == currentBoard[1][2] &&
    currentBoard[1][2] == currentBoard[2][2]
  ) {
    return true;
  }

  // descending diagonal
  if (
    currentBoard[0][0] !== " " &&
    currentBoard[0][0] == currentBoard[1][1] &&
    currentBoard[1][1] == currentBoard[2][2]
  ) {
    return true;
  }

  // ascending diagnonal
  if (
    currentBoard[0][2] !== " " &&
    currentBoard[0][2] == currentBoard[1][1] &&
    currentBoard[1][1] == currentBoard[2][0]
  ) {
    return true;
  }

  if (numberOfPlays == 9) {
    document.getElementById("result").innerHTML = `It was a Tie!`;
  }
}
