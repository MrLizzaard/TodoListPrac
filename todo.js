const toDoForm = document.querySelector(".js-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-todo");
const addBtn = document.querySelector(".Btn");

function handleSubmit(event) {
  event.preventDefault();
  console.log(toDoInput.value);
}

function pushBtn(event) {}

function init() {
  toDoForm.addEventListener("submit", handleSubmit);
  addBtn.addEventListener("click", pushBtn);
}

init();
