const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        themeToggle.textContent = "Темна тема"; 
    } else {
        body.classList.add("dark-theme");
        themeToggle.textContent = "Світла тема"; 
    }
});
const burgerMenu = document.getElementById("burger-menu");
const menu = document.getElementById("menu");
burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
});