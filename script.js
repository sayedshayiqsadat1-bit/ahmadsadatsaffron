const cartCount = document.getElementById("cartCount");
const toast = document.getElementById("toast");
let count = 0;

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    count += 1;
    cartCount.textContent = new Intl.NumberFormat("fa-IR").format(count);
    toast.classList.add("show");
    button.textContent = "✓";
    setTimeout(() => {
      toast.classList.remove("show");
      button.textContent = "+";
    }, 1800);
  });
});

const overlay = document.getElementById("searchOverlay");
document.getElementById("searchButton").addEventListener("click", () => {
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  overlay.querySelector("input").focus();
});
document.getElementById("closeSearch").addEventListener("click", () => {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
});
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
  }
});
