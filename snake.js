import { getInputDirection } from "./input.js";

export let snakeSpeed = 5;
const snakeBody = [
  { x: 11, y: 11 },
  { x: 12, y: 11 },
  { x: 13, y: 11 },
]; // middle of screen

export const updateSnake = () => {
  const inputDirection = getInputDirection();

  for (let i = snakeBody.length - 2; i >= 0; i--) {
    // snakeBody last element will have coordinate of the current element. snakeBody duplicate created at position [i]
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
};

export const drawSnake = (gameBoard) => {
  // console.log("Draw snake");

  // Loop through each segment (piece) of the snake
  snakeBody.forEach((segment) => {
    // Snake starts game board at particular x y coordinate
    const snakeElement = document.createElement("div");
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
};
