export function saveinLocalStorage(board, turn) {
  window.localStorage.setItem("board", JSON.stringify(board));
  window.localStorage.setItem("turn", JSON.stringify(turn));
}

export function removeFromLocalStorage() {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
}
