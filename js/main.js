const buttons = document.querySelectorAll("[data-action]");
const display = document.getElementById("display");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const action = button.dataset.action;
    const oldValue = display.textContent;
    if (action === "increment") {
      display.textContent = parseInt(oldValue) + 1;
    } else if (action === "decrement" && parseInt(oldValue)!==0) {
      display.textContent = parseInt(oldValue) - 1;
    } else if (action === "reset") {
      display.textContent = 0;
    }
  });
});
