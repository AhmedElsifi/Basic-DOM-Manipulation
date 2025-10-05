const buttons = document.querySelectorAll("[data-action]");
const display = document.getElementById("display");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const action = button.dataset.action;
    let value = Number(display.textContent);
    if (action === "increment") value++;
    else if (action === "decrement" && value > 0) value--;
    else if (action === "reset") value = 0;
    display.textContent = value;
  });
});
