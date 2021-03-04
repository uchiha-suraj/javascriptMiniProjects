const btn = document.getElementById("btn");   // assigned the value of button id "btn" into variable "btn"

btn.addEventListener("click", () => {   /* now we are adding event listener, after clicking the button, 
												                   it would perform a specific function, here we are using arrow function */ 
    document.body.style.background = randomBg();   // changing the background color of the page by using randomBg func, which we have created 
});

function randomBg() {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;  
}


/*   `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`   */
/*Hue-Saturation-Lightness (HSL) is an alternative to the RGB color model. 
Rather than having three values that represents red, green and blue, we now have three values representing 
hue, saturation and lightness.
HSL has a cylindrical geometry.

Hue => Hue is the perceived color, for example red, green, blue or yellow. The unit of hue is degrees, 
       because the HSL model is represented as a cylinder with hue being the circular coordinate. 
       Red is 0°, green is 120° and blue is 240°.
       ${Math.floor(Math.random() * 360)}
       this is the reason, why the value of hue is multiplyed by 360.

Saturation => Saturation represents how “colorful” the color is. It has a value between 0 and 100%. 
			  0% is unsaturated (gray), while 100% is full saturation.
			  here we have used 100%, means full saturation.

Lightness => Lightness is simply the brightness of the color. It has a value between 0 and 100%. 
			       0% lightness is black, while 100% lightness is white. 50% is “normal” colors.

*/