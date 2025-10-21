let listContainer = document.querySelector(".listContainer");
listContainer.addEventListener("click", (e) => {
  if (e.target.className === "listItems") {
    if (e.target.style.textDecoration === "") {
      e.target.style.textDecoration = "line-through";
    } else {
      e.target.style.textDecoration = "";
    }
  }
});
