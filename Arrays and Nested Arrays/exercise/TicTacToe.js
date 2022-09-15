function ticTacToe(moves) {

    let board = [[false, false, false],
        [false, false, false],
        [false, false, false]];

    let gameOver = false;
    let playerMove = 'X';


    for (let move of moves) {
        if (board.some(x => x.some(a => a === false))) {
            if (gameOver) {
                break;
            }
            move = move.split(' ');
            let row = move[0];
            let col = move[1];


            if (!isValidIndex(row, col, board)) {
                continue;
            }


            if (board[row][col] !== false) {
                console.log("This place is already taken. Please choose another!");
                continue;
            }
            board[row][col] = playerMove;

            if (checkLefDiagonal(board, playerMove) || checkRightDiagonal(board, playerMove)) {
                gameOver = true;
            }
            for (let i = 0; i < board.length; i++) {
                if (checkRow(board, i, playerMove) || checkColumn(board, i, playerMove)) {
                    gameOver = true;
                }
            }
            playerMove = switchPlayer(playerMove);
        }
    }

    if (!gameOver) {
        console.log("The game ended! Nobody wins :(");
    } else {
        playerMove = switchPlayer(playerMove);
        console.log(`Player ${playerMove} wins!`)
    }

    printBoard(board);


    function checkRow(board, index, player) {
        return board[index][0] === player && board[index][1] === player && board[index][2] === player;
    }

    function checkColumn(board, index, player) {
        return board[0][index] === player && board[1][index] === player && board[2][index] === player;
    }

    function checkLefDiagonal(board, player) {
        return board[0][0] === player && board[1][1] === player && board[2][2] === player;
    }

    function checkRightDiagonal(board, player) {
        return board[0][2] === player && board[1][1] === player && board[2][0] === player;
    }


    function switchPlayer(player) {
        return player === 'X' ? 'O' : 'X';
    }

    function isValidIndex(row, col, board) {
        return row >= 0 && row <= board.length && col >= 0 && col < board[row].length;

    }

    function printBoard(board) {
        console.log((board[0][0] + "\t" + board[0][1] + "\t" + board[0][2]));
        console.log((board[1][0] + "\t" + board[1][1] + "\t" + board[1][2]));
        console.log((board[2][0] + "\t" + board[2][1] + "\t" + board[2][2]));
    }
}

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);

ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]);

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);