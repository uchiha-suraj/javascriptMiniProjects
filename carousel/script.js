const imgs = document.getElementById("imgs");

const img = document.querySelectorAll("#imgs img");	//The querySelectorAll() method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object.

let idx = 0;

function run() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`; 	//translateX = transforming a page through a dimension 
}

setInterval(run, 2000);		// will run the function run() in every 2000 millisecond interval
