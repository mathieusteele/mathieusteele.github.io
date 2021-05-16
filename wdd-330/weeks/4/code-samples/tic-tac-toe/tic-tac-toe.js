let cells = document.getElementById("board").children;

for (i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", handleTouch, false);
}

function handleTouch(event) {
  if (event.target.innerText !== "") {
    alert("This square is not free");
  } else {
    let gameOver = checkWinner();
    if (!gameOver) {
      event.target.innerText = currentPlayer;
      numberOfPlays++;
      let clickedRow = event.target.getAttribute("data-row");
      let clickedColumn = event.target.getAttribute("data-col");
      board[clickedRow][clickedColumn] = currentPlayer;
      let gameOver = checkWinner();
      if (gameOver) {
        document.getElementById(
          "result"
        ).innerHTML = `Congratulations, ${currentPlayer} is the winner!`;
      } else {
        if (numberOfPlays < 9) {
          currentPlayer = currentPlayer === "❌" ? "⭕" : "❌";
          document.getElementById(
            "result"
          ).innerHTML = `${currentPlayer} it is your move`;
        }
      }
    } else {
      alert("The game has already ended.");
    }
  }
}

let currentPlayer = "❌";

document.getElementById("reset").addEventListener("click", resetGame, false);

function resetGame() {
  for (i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }

  board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  numberOfPlays = 0;
  currentPlayer = "❌";
  document.getElementById("result").innerHTML = "❌ it is your move";
}

let board = [
  [" 󠀠󠀠", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

let numberOfPlays = 0;

function checkWinner() {
  // top row
  if (
    board[0][0] !== " " &&
    board[0][0] == board[0][1] &&
    board[0][1] == board[0][2]
  ) {
    return true;
  }

  // middle row
  if (
    board[1][0] !== " " &&
    board[1][0] == board[1][1] &&
    board[1][1] == board[1][2]
  ) {
    return true;
  }

  // bottom row
  if (
    board[2][0] !== " " &&
    board[2][0] == board[2][1] &&
    board[2][1] == board[2][2]
  ) {
    return true;
  }

  // left col
  if (
    board[0][0] !== " " &&
    board[0][0] == board[1][0] &&
    board[1][0] == board[2][0]
  ) {
    return true;
  }

  // middle col
  if (
    board[0][1] !== " " &&
    board[0][1] == board[1][1] &&
    board[1][1] == board[2][1]
  ) {
    return true;
  }

  // right col
  if (
    board[0][2] !== " " &&
    board[0][2] == board[1][2] &&
    board[1][2] == board[2][2]
  ) {
    return true;
  }

  // descending diagonal
  if (
    board[0][0] !== " " &&
    board[0][0] == board[1][1] &&
    board[1][1] == board[2][2]
  ) {
    return true;
  }

  // ascending diagnonal
  if (
    board[0][2] !== " " &&
    board[0][2] == board[1][1] &&
    board[1][1] == board[2][0]
  ) {
    return true;
  }

  if (numberOfPlays == 9) {
    document.getElementById("result").innerHTML = `It was a Tie!`;
    return false;
  }
}
