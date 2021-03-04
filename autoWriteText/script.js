const text = "This is an auto-write text!! <3";

let index = 0;

function writeText() {
    document.body.innerText = text.slice(0, index);   /*Inner text of the body. The slice() method extracts parts of a string 
    													and returns the extracted parts in a new string. 
    													Use the start and end parameters to specify the part of the string 
    													you want to extract. The first character has the position 0, 
    													the second has position 1, and so on. */

    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(writeText, 100);   /*The setInterval() method repeats a given function at every given time-interval.
								setInterval(function, milliseconds);
								The first parameter is the function to be executed.
								The second parameter indicates the length of the time-interval between each execution
								in millisecond . */


