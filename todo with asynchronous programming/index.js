const input = document.querySelector("input");
const addBtn = document.querySelector(".add_btn");
const allTodo = document.querySelector(".all_todo");
let API = "https://690b432b6ad3beba00f427ae.mockapi.io/api/v1/todos";

const createTodo = (value) => {
  const todo = document.createElement("div");
  todo.innerHTML = `<div class="single_todo">
          <p>${value}</p>
          <button class="edit_btn">edit</button>
          <button class="delet_btn">delet</button>
        </div>`;
  allTodo.prepend(todo);
};

addBtn.addEventListener("click", () => {
  createTodo(input.value);
  input.value = "";
});
async function fetchData() {
  let response = await fetch(API);
  let data = await response.json();
  console.log(data);
  data.map((item) => createTodo(item.text));
}
fetchData();
