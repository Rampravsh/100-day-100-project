const input = document.querySelector("input");
const addBtn = document.querySelector(".add_btn");
const allTodo = document.querySelector(".all_todo");
let API = "https://690b432b6ad3beba00f427ae.mockapi.io/api/v1/todos";

// here created todon function

const createTodo = (value, id) => {
  const todo = document.createElement("div");
  todo.innerHTML = `<div class="single_todo">
          <p>${value}</p>
          <button class="edit_btn">edit</button>
          <button class="delet_btn">delet</button>
        </div>`;
  allTodo.prepend(todo);
  let deletBtn = todo.querySelector(".delet_btn");
  deletBtn.addEventListener("click", () => {
    // console.log(value, id);
    deleteData(id);
  });
  let editBtn = todo.querySelector(".edit_btn");
  editBtn.addEventListener("click", () => forUpdateTodo(todo, id, value));
};

//for updating todo inner Html function

function forUpdateTodo(todo, id, value) {
  todo.innerHTML = `<div class="single_todo">
          <input class='update_input' type="text" value="${value}">
          <button class="save_btn">Save</button>
        </div>`;
  let updataInput = todo.querySelector(".update_input");
  let saveBtn = todo.querySelector(".save_btn");
  saveBtn.addEventListener("click", () => {
    updateData(id, updataInput);
  });
}

// evevtlistener for post todo

addBtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("plese add todo first");
    return;
  }
  postData();
  input.value = "";
});

//fetch data function

async function fetchData() {
  let response = await fetch(API);
  let data = await response.json();
  if (data) {
    allTodo.innerHTML = "";
    data.forEach((element) => {
      createTodo(element.text, element.id);
    });
  }
}

//post data function

async function postData() {
  let value = input.value;
  let objData = {
    text: value.trim(),
  };
  let response = await fetch(API, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });
  if (response.status === 201) {
    fetchData();
  }
}

// delet data function

async function deleteData(id) {
  let response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    fetchData();
  }
}

// update data function
async function updateData(id, updateInput) {
  let value = updateInput.value;
  let objData = {
    text: value.trim(),
  };
  let response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });
  if (response.ok) {
    fetchData();
  }
  console.log(response);
}
fetchData();
