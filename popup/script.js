const open = document.getElementById("open");    //assigned the value of open into variable "open"
const close = document.getElementById("close");   //assigned the value of close into variable "close"
const container = document.getElementById("container");   //assigned the value of container into variable "container"

open.addEventListener("click", () => {    /* now we are adding event listener, after clicking the button "open", 
											it would perform a specific function, here we are using arrow function */
    container.classList.add("active");    // it will add (and active) the container
});

close.addEventListener("click", () => {    /* now we are adding event listener, after clicking the button "&times;", 
											it would perform a specific function, here we are using arrow function */
    container.classList.remove("active");   // it will remove (and active) the container
});
