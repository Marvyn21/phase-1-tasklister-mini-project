document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  const ul = document.querySelector('#tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userInput = document.querySelector("#new-task-description").value;

    const listItem = document.createElement("li");
    listItem.textContent = userInput;

    ul.appendChild(listItem);

    form.reset();
    });
});
