class TicTacToe {
    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.selectedPosition = [];
        this.currentPlayer = 'x';
        this.lastTurn = [0, 0];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
            this.lastTurn[0] = rowIndex;
            this.lastTurn[1] = columnIndex;
        }
    }

    isFinished() {
        return this.isDraw() || Boolean(this.getWinner());
    }

    getWinner() {
        if (this.field[0][0] === this.field[1][1] && this.field[0][0] ===
            this.field[2][2]) return this.field[0][0];
        if (this.field[0][2] === this.field[1][1] && this.field[0][2] ===
            this.field[2][0]) return this.field[2][0];

        if (this.field[0][0] === this.field[0][1] && this.field[0][0] ===
            this.field[0][2]) return this.field[0][0];
        if (this.field[1][0] === this.field[1][1] && this.field[1][0] ===
            this.field[1][2]) return this.field[1][0];
        if (this.field[2][0] === this.field[2][1] && this.field[2][0] ===
            this.field[2][2]) return this.field[2][0];

        if (this.field[0][0] === this.field[1][0] && this.field[0][0] ===
            this.field[2][0]) return this.field[0][0];
        if (this.field[0][1] === this.field[1][1] && this.field[0][1] ===
            this.field[2][1]) return this.field[0][1];
        if (this.field[0][2] === this.field[1][2] && this.field[0][2] ===
            this.field[2][2]) return this.field[0][2];

        else return null;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (!this.field[i][j]) return false;
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
