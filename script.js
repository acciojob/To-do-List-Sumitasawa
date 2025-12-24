// your code here

document.addEventListener("DOMContentLoaded", () => {
  let todos = [];

  const input = document.querySelector("input");
  const addbtn = document.querySelector("button");
  const ol = document.querySelector("ol");

  addbtn.addEventListener("click", () => {
    const value = input.value.trim();

    if (!value) {
      alert("Todo should be filled");
      return;
    }

    todos.push(value);
    input.value = ""; // clear input
    renderList();
  });

  function renderList() {
    ol.innerHTML = "";

    todos.forEach(todo => {
      const li = document.createElement("li");
      li.textContent = todo;
      ol.appendChild(li);
    });
  }
});
