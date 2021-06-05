// const
const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

const TODOS_LS = "lists";

// run

form.addEventListener("submit", onSubmit);

//function

function onSubmit(event) {
  event.preventDefault();
  let li = returnLi();
  console.log(li);
}

function returnLi() {
  let li = document.createElement("li");
  let check = document.createElement("i");
  let trashbin = document.createElement("i");
  li.innerText = input.value;
  return li;
}
