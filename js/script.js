let button = document.querySelector(".button")
let background = document.querySelector(".background")
let themeName = document.querySelector(".themeName")

button.addEventListener("click", () => {
    background.classList.toggle("dark");

    if (background.classList.contains("dark")) {
        themeName.innerText = ("jasne");
    } else {
        themeName.innerText = ("ciemne");
    }
});