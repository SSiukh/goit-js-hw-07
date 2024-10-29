const input = document.querySelector("input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const elements = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    elements.push(
      `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`
    );
    size += 10;
  }

  return elements.join(" ");
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

create.addEventListener("click", () => {
  if (input.value <= 100 && input.value >= 1) {
    destroyBoxes();
    boxes.insertAdjacentHTML("beforeend", createBoxes(input.value));
  }
  input.value = "";
});
destroy.addEventListener("click", destroyBoxes);
