const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

const addTask = () => {
  if (inputBox.value === "") {
    alert("Please write something !");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showList = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showList();
