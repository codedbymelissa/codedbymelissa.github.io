// 1. Show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// 2. Close the mobile menu after a nav link is clicked
const navMenu = document.getElementById("navLinks");

document.querySelectorAll("#navLinks .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
    }
  });
});

// 3. Show a back-to-top button once the visitor scrolls down
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.hidden = window.scrollY < 400;
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 4. Copy my email address to the clipboard
const copyButton = document.getElementById("copyEmail");
const email = document.querySelector('a[href^="mailto:"]').href.replace("mailto:", "");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = "Copied!";
  } catch (error) {
    copyButton.textContent = "Copy failed";
  }
  setTimeout(() => (copyButton.textContent = "Copy email"), 2000);
});