const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {	//will activate the nav and button section
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});
