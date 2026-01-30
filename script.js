document.querySelectorAll("h2").forEach(title => {
  const next = title.nextElementSibling;

  if (next && (next.tagName === "P" || next.tagName === "OL")) {
    next.style.display = "none";
  }

  title.style.cursor = "pointer";

  title.addEventListener("click", () => {
    if (next) {
      next.style.display = next.style.display === "none" ? "block" : "none";
    }
  });
});


const darkBtn = document.createElement("button");
darkBtn.innerText = "🌙 Dark Mode";
darkBtn.style.position = "fixed";
darkBtn.style.top = "10px";
darkBtn.style.right = "10px";
darkBtn.style.padding = "10px";
darkBtn.style.cursor = "pointer";
darkBtn.style.background = "black";

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});



const topBtn = document.createElement("button");
topBtn.innerText = "⬆";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px";
topBtn.style.display = "none";
topBtn.style.cursor = "pointer";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
