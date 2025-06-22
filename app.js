let count = 0;

const counter = document.getElementById("counter");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

function updateColor() {
  if (count > 0) {
    counter.style.color = "lime"; 
  } else if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "cyan"; 
  }
}

increase.addEventListener("click", () => {
  count++;
  counter.textContent = count;
  updateColor();
});

decrease.addEventListener("click", () => {
  count--;
  counter.textContent = count;
  updateColor();
});

reset.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
  updateColor();
});
