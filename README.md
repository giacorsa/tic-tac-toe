# Tic Tac Toe – Vue 3 + Vite

Mini applicazione Tic Tac Toe sviluppata con Vue 3 e Vite, usando la Composition API e un composable per gestire la logica di gioco.

## Tecnologie

- Vue 3 (Composition API, `<script setup>`)
- Vite
- JavaScript

## Struttura principale

### `src/App.vue`

- Importa il composable `useTicTacToe`.
- Gestisce lo stato del gioco (board, currentPlayer, winner) tramite il composable.
- Mostra:
  - titolo del gioco
  - turno corrente
  - eventuale vincitore
  - bottone di reset
- Passa la board al componente `Board`:
  - `:board="board"`
  - ascolta l’evento `@play="playAt"`

### `src/components/Board.vue`

- Riceve la board come prop.
- La trasforma in 9 celle usando `v-for`.
- Per ogni cella:
  - passa il valore al componente `Cell` (`:value="value"`)
  - intercetta il click e emette l’evento `play` verso il padre (`emit('play', index)`).

### `src/components/Cell.vue`

- Riceve il valore della singola cella come prop (`value`).
- Mostra il contenuto (`X`, `O` o vuoto).
- Non contiene logica di gioco, è solo un componente di presentazione.

### `src/composables/useTicTacToe.js`

- Contiene lo **stato reattivo**:
  - `board` → array di 9 celle
  - `currentPlayer` → `"X"` o `"O"`
  - `winner` → `null` o `"X"`/`"O"`
- Contiene la **logica di gioco**:
  - `playAt(index)` → gestisce la mossa
  - `checkWinner()` → controlla le combinazioni vincenti
  - `resetGame()` → resetta lo stato del gioco

## Installazione

```bash
npm install
npm run dev
Apri il browser su l’URL indicato da Vite (di solito http://localhost:5173).
