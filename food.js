let food = {
  x: `${Math.floor(Math.random() * 21)}`,
  y: `${Math.floor(Math.random() * 21)}`,
};

const updateFood = () => {};

export const drawFood = (gameBoard) => {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
};
