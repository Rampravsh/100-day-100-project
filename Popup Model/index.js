let openModelBtn = document.querySelector(".openModelBtn");
let container = document.querySelector(".container");
openModelBtn.addEventListener("click", () => {
  container.style.display = "flex";
});
container.addEventListener("click", (e) => {
  if (e.target.className === "container") {
    container.style.display = "none";
  }
});
