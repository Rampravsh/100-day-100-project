// console.log("hello world!");

const input = document.querySelector("#input");
const addBtn = document.querySelector("#addBtn");
const date = document.querySelector("#date");
const todo = document.querySelector(".single-todo");
const todoBox = document.querySelector(".all-todo");

const createTodo = (todoText) => {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("single-todo");
  todoDiv.innerHTML = `
            <input type="checkbox" />
            <span>${todoText}</span>
            <button><i class="fa-solid fa-pen"></i></button>
            <button><i class="fa-solid fa-trash"></i></button>
  `;
  return todoDiv;
};

addBtn.addEventListener("click", () => {
  // console.log((todo.children[1] = input.value));
  // console.log(todo);
  todoBox.appendChild(createTodo(input.value));
});
// console.log(date);

const todayDate = new Date().toLocaleDateString();
// console.log(todayDate);

date.innerText = todayDate;

// console.dir(todo.children[1]);

// const h1 = document.createElement("h1");
// h1.innerHTML = "heoo";

// console.dir(todoBox);
