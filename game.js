import {
  update as updateSnake,
  draw as drawSnake,
  snakeSpeed,
} from "./snake.js";

let lastRenderTime = 0;
// const snakeSpeed = 2; // how many times snake moves per second

// Update the snakes position
function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  // Calculate if snake needs to move. If sSLR is less than time between renders.
  // snakeSpeed is 2 times per second so do 1s / 2 -> 0.5s between each move. If its below 0.5s just return
  if (secondsSinceLastRender < 1 / snakeSpeed) return;
  // console.log("Render"); // prints 2 times/s
  lastRenderTime = currentTime;

  update();

  draw();
}

window.requestAnimationFrame(main);

// Moves snake to position, shorten/lengthen based on food, determines loss
const update = () => {
  updateSnake();
};

// Based on update, draws snake and food in correct positions
const draw = () => {
  drawSnake();
};
