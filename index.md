a test


# My Interactive Demo Page

This page shows how you can embed an interactive element directly
inside Markdown when hosted on GitHub Pages (or any static site
renderer that allows raw HTML + JavaScript).

---

## Interactive Rectangle Example

Click the button to change the color of the rectangle:

<div id="color-demo" style="margin: 20px 0;">
  <div id="rect"
       style="width:200px; height:100px; background-color:lightblue; border:1px solid #333; margin-bottom:10px;">
  </div>
  <button onclick="changeColor()">Change Color</button>
</div>

<script>
  function changeColor() {
    const rect = document.getElementById("rect");
    const colors = ["lightblue", "lightgreen", "salmon", "khaki", "plum"];
    const current = rect.style.backgroundColor;
    let next = colors[Math.floor(Math.random() * colors.length)];
    // ensure new color differs from current
    while (next === current) {
      next = colors[Math.floor(Math.random() * colors.length)];
    }
    rect.style.backgroundColor = next;
  }
</script>

