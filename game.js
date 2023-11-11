let lastRenderTime = 0;
const snakeSpeed = 2; // how many times snake moves per second

// Update the snakes position
function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  // Calculate if snake needs to move. If sSLR is less than time between renders.
  // snakeSpeed is 2 times per second so do 1s / 2 -> 0.5s between each move. If its below 0.5s just return
  if (secondsSinceLastRender < 1 / snakeSpeed) return;
  // console.log("Render"); // prints 2 times/s
  lastRenderTime = currentTime;

  // Moves snake to position, shorten/lengthen based on food, determines loss
  update();

  // Based on update, draws snake and food in correct positions
  draw();
}

window.requestAnimationFrame(main);

const update = () => {};

const draw = () => {};
