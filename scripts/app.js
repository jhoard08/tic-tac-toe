const GameBoard = (() => {
  const gameBoard = () => ["x", "o", "x", "o", "x", "o", "o", "x", "o"];
  return { gameBoard };
})();


// Gameboard
// X's and O's
// 3x3 grid
console.log(GameBoard.gameBoard());

// Players