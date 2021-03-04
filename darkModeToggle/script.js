const toggle = document.getElementById("toggle");

toggle.addEventListener("click", (e) => {   /* now we are adding event listener, after clicking the button, 
												it would perform a specific event (e) */
    document.body.classList.toggle("dark", e.target.checked);   /* It will toggle the background color of the body into 
    															   black or "dark"(specified in style.css file). 
    															   e.target.checked is just checking the event 
    															   status(optional). */
});
