const toDoForm = document.querySelector(".js-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-todo");
const addBtn = document.querySelector(".Btn");

const TODO_LS = [];

function loadToDo(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("span");
  const id = document.querySelectorAll(".js-todo").length + 1;
  span.className = "text";
  span.id = id;
  span.innerText = text;
  delBtn.className = "del";
  delBtn.innerText = "❌";
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
}

function saveTodo(text, id) {
  localStorage();
}

function handleSubmit(event) {
  event.preventDefault();
  const text = toDoInput.value;
  loadToDo(text);
  saveToDo(text);

  toDoInput.value = "";
}

function pushAddBtn(event) {}

function init() {
  toDoForm.addEventListener("submit", handleSubmit);
  addBtn.addEventListener("click", handleSubmit);
}

init();
