document.addEventListener("DOMContentLoaded", function() {
  const rect = document.getElementById("rect");
  const btn = document.getElementById("colorBtn");
  const colors = ["lightblue", "lightgreen", "salmon", "khaki", "plum"];

  btn.addEventListener("click", function() {
    let current = rect.style.backgroundColor;
    let next = colors[Math.floor(Math.random() * colors.length)];
    while(next === current) {
      next = colors[Math.floor(Math.random() * colors.length)];
    }
    rect.style.backgroundColor = next;
  });
});
