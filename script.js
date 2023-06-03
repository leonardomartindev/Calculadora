//Toggle theme

const themeToggle = document.querySelector('.theme-toggle');
const iIcon = themeToggle.querySelector('div').querySelector("i")
const iButton = themeToggle.querySelector('div')
const html = document.querySelector("html")
console.log(html)


themeToggle.addEventListener('click', function() {
    themeToggle.classList.toggle('dark');
    iIcon.classList.toggle('fa-moon')
    iButton.classList.toggle('cinza')
    
    html.classList.toggle('dark-theme')
});

//Change type calculator

const normalCalculator = document.querySelector(".container-normal-calculator")
const scientificCalculator = document.querySelector(".container-scientific-calculator")

const iconCalculator = document.querySelector(".scientific-icon")

iconCalculator.addEventListener("click", ()=> {
    normalCalculator.classList.toggle("hide")
    scientificCalculator.classList.toggle("hide")
    iconCalculator.classList.toggle('scientific')
})