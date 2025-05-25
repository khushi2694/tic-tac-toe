let currentPlayer = "x";
let array = Array(9).fill(null);

function handleClick(el) {
    const id = Number(el.id);
    if (array[id] !== null) return;

    array[id] = currentPlayer;
    el.innerText = currentPlayer;

    if (checkWinner()) {
        alert(`Winner is ${currentPlayer}`);
    } else if (array.every(cell => cell !== null)) {
        alert("It's a draw!");
    } else {
        currentPlayer = currentPlayer === "x" ? "0" : "x";
    }
}

function checkWinner() {
    return (
        (array[0] !== null && array[0] === array[1] && array[1] === array[2]) ||
        (array[3] !== null && array[3] === array[4] && array[4] === array[5]) ||
        (array[6] !== null && array[6] === array[7] && array[7] === array[8]) ||
        (array[0] !== null && array[0] === array[3] && array[3] === array[6]) ||
        (array[1] !== null && array[1] === array[4] && array[4] === array[7]) ||
        (array[2] !== null && array[2] === array[5] && array[5] === array[8]) ||
        (array[0] !== null && array[0] === array[4] && array[4] === array[8]) ||
        (array[2] !== null && array[2] === array[4] && array[4] === array[6])
    );
}
