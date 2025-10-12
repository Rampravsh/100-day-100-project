// console.log("hello world!");

const input = document.querySelector("#input");
const addBtn = document.querySelector("#addBtn");
const date = document.querySelector("#date");
const todo = document.querySelector(".single-todo");



addBtn.addEventListener("click", () => {
  console.log((todo.children[1] = input.value));
  console.log(todo);
});
// console.log(date);

const todayDate = new Date().toLocaleDateString();
// console.log(todayDate);

date.innerText = todayDate;

console.dir(todo.children[1]);
