load();
const lightMode = document.querySelector(".light-mode-btn");
const darkMode = document.querySelector(".dark-mode-btn");

lightMode.addEventListener("click", setDarkMode);
darkMode.addEventListener("click", setLightMode);

function setLightMode(){
setTheme("light");
}


function setDarkMode(){
setTheme("dark");
}


function setTheme(newTheme){
document.documentElement.setAttribute("data-theme", newTheme);
localStorage.setItem("theme", newTheme);
}


function load(){
    const storedTheme = localStorage.getItem("theme");
   setTheme(storedTheme);
}

