const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    document.querySelector(".error").classList.add("active");
    inputBox.value = "";
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBox.value = "";
    document.querySelector(".error").classList.remove("active");
    saveData();
  }
}
inputBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === 13) {
    addTask();
  } else if (event.key === "Escape" || event.key === 27) {
    inputBox.value = "";
  }
});
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
    saveData();
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
