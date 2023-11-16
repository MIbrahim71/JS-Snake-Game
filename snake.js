import { getInputDirection } from "./input.js";

export let snakeSpeed = 5;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

// POSITION
export const updateSnake = () => {
  const inputDirection = getInputDirection();

  for (let i = snakeBody.length - 2; i >= 0; i--) {
    // snakeBody last element will have coordinate of the current element. snakeBody duplicate created at position [i]
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
};

// UI
export const drawSnake = (gameBoard) => {
  addSegments();
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

export const expandSnake = (amount) => {
  newSegments += amount;
};

export const onSnake = (position) => {
  return snakeBody.some((segment) => {
    return equalPositions(segment, position);
  });
};

const equalPositions = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};

const addSegments = () => {
  for (let i = 0; i < newSegments; i++) {
    // Essentially duplicating last piece of the snake, adding to the end
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }

  newSegments = 0;
};
