import { onSnake, expandSnake } from "./snake.js";

const randomNum = () => Math.floor(Math.random() * 21);
let food = {
  x: randomNum(),
  y: randomNum(),
};

const EXPANSION_RATE = 1;

export const updateFood = () => {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = { x: randomNum(), y: randomNum() };
  }
};

export const drawFood = (gameBoard) => {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
};
