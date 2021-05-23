"use strict";

function ClickAdd() {
  let textVal = document.getElementById("Input");
  if (textVal.value === "") {
    alert("you have to write something");
  } else {
    let ul = document.getElementById("UL");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(textVal.value));
    ul.appendChild(li);
    textVal.value = "";
  }
}

function CheckTheList() {}
