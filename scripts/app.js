const GameBoard = (() => {
  const click = document.querySelectorAll('.cell');

  click.forEach(cell => {
    cell.addEventListener('click', (e) => {
      console.log(e.target);
      if(e.target){
        document.getElementById('grid').innerHTML = 'X'
      }
    })
  })

  const gameBoard = () => ["x", "o", "x", "o", "x", "o", "o", "x", "o"];
  return { gameBoard };
})();


// Gameboard
// X's and O's
// 3x3 grid
console.log(GameBoard.gameBoard());

// Players