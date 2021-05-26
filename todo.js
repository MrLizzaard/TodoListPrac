const toDoForm = document.querySelector(".js-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-todo");
const addBtn = document.querySelector(".Btn");

const LS_NAME = "Lists";
const TODO_LS = [];

function initialize() {
  let lists = localStorage.getItem(LS_NAME);
  if (lists !== null) {
    lists = JSON.parse(lists);
    lists.forEach((data) => {
      loadToDo(data.texts);
    });
  }
}

function loadToDo(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("span");
  const id = toDoList.querySelectorAll("li").length + 1;
  const data = {
    texts: text,
    toDoId: id,
  };
  TODO_LS.push(data);
  span.className = "text";
  span.id = data.toDoId;
  span.innerText = data.texts;
  delBtn.className = "del";
  delBtn.innerText = "❌";
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  saveTodo();
}

function saveTodo() {
  localStorage.setItem(LS_NAME, JSON.stringify(TODO_LS));
}

function handleSubmit(event) {
  event.preventDefault();
  const text = toDoInput.value;
  loadToDo(text);

  toDoInput.value = "";
}

function pushAddBtn(event) {}

function init() {
  initialize();
  toDoForm.addEventListener("submit", handleSubmit);
  addBtn.addEventListener("click", handleSubmit);
}

init();
