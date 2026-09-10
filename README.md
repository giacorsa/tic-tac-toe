# Tic Tac Toe – Vue 3 + Vite

Mini application Tic Tac Toe developed using Vue 3 and Vite, using Composition API and a composable to manage game logic.

## Tecnologies

- Vue 3 (Composition API, `<script setup>`)
- Vite
- JavaScript

## MAin STructure

### `src/App.vue`

- It imports the composable `useTicTacToe`.
- It manages state game (board, currentPlayer, winner) by the composable.
- It shows:
  - game title
  - actual turn
  - probably winner
  - reset button
- Pass the board to the component `Board`:
  - `:board="board"`
  - It listen the event `@play="playAt"`

### `src/components/Board.vue`

- receives the board as a prop.
- The board has rasformed in 9 cells using `v-for`.
- For every cell:
  - it pass the value to the component `Cell` (`:value="value"`)
  - intercepts the click and emits the `play` event to the parent (`emit('play', index)`).

### `src/components/Cell.vue`

- It receives the single cell value as prop (`value`).
- It shows the content (`X`, `O` or empty).
- It doesn't contain game logic, it's just presentqztion component.

### `src/composables/useTicTacToe.js`

- It contains the **reactive state**:
  - `board` → 9 cells array
  - `currentPlayer` → `"X"` o `"O"`
  - `winner` → `null` o `"X"`/`"O"`
- It contains the **game logic**:
  - `playAt(index)` → It manages the move
  - `checkWinner()` → It checks the winning combinations.
  - `resetGame()` → resetta game state

## Installation

```bash
npm install
npm run dev
Open the browser on the URL indicated by Vite (usually http://localhost:5173).
