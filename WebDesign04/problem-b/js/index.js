'use strict';

/** Basic Types */

//Define a new variable `motto` for the value "I love Smart Coding School"
let motto = "I love Smart Coding School";
//Log out the motto
console.log(motto);
//Define a variable `mottoLength` that stores the length of the motto.
//Use the `.length` property
//Log out the length.
let mottoLength = motto.length;
console.log(mottoLength);//includes spaces

//Use the `indexOf()` String method to see if the word "cool" is in the string.
//See http://www.w3schools.com/jsref/jsref_obj_string.asp for String methods
//Log out a _boolean_ whether it is or not.
let containsString = motto.indexOf("cool");
let bool_containsString = true;
if (containsString == -1) {
    bool_containsString = false;
}
console.log(bool_containsString);
//Use a String method to replace the word "Smart Coding School" in the `motto` variable with
//the words "SMART". The new value should be re-assigned to the
//`motto` variable.
//Log out the updated motto.
let newMotto = motto.replace("Smart Coding School", "SMART");
console.log(newMotto);
//Calculate the ratio between the length of the updated motto and the length of 
//the old (which you had saved in a variable!). Log out this ratio as a 
//percentage with two decimal places of precision (e.g., `"123.45%"`).
//You can use the `.toFixed()` Number method to specify the precision. 
let ratio = (motto.length / newMotto.length) * 100;
ratio = ratio.toFixed(2);
console.log(ratio + "%");


/** Arrays **/

//Create an array `numbers` that contains these 10 numbers:
//    1 4 1 5 9 2 6 5 3 5
//Log out the array.
let numbers = [1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(numbers);
//Use bracket notation to change the `4` in the array to a `4.2`.
//Log out the updated array.
numbers[1] = 4.2;
console.log(numbers);
//Add the number 3 to the END of the array.
//Log out the updated array.
numbers.push(3);
console.log(numbers);
//Find the median (middle) value of the numbers in the array.
//Hint: sort() the array, then access the middle index of the sorted values.
//You can use the `Math.floor()` function to round to a whole number.
//Log out the median value.
numbers.sort();
console.log(numbers);
let median = 0;
if (numbers.length % 2 == 0) {
    median = (numbers[numbers.length/2] + numbers[(numbers.length/2) + 1]) / 2
} else {
    median = numbers[Math.floor(numbers.length/2)];
}
console.log(median);
/** Objects **/

//Create a variable `rect` that represents a rectangle. This should be an Object
//with properties:
//  `x` (coordinate) of 30, `y` of 50, `width` of 100, `height` of 50
//Log out the rectangle object
let rect = {x:30, y:50, width:100, height:50};
console.log(rect);

//Log out the x- and y- coordinates of the rectangle (its location). Your output 
//should have the format `"X, Y"`.
console.log("(" + rect.x + ", " + rect.y + ")");

//Set the rectangle's height to be the square root of its width. (Use the 
//`Math.sqrt()` function).
//Use *dot notation* to access the properties!
rect.height = Math.sqrt(rect.width);
//Log out the rectangle's area. Use *dot notation* to access the properties!
console.log("area: " + rect.height * rect.width);

//Create a variable `circle` that represents a circle. This should be an object
//with properties:
//  `cx` (center-x-coordinate) of 34, 
//  `cy` of 43,
//  `radius` equal to the LAST value in the (sorted) `numbers` array.
//Log out the circle
let circle = {cx: 34, cy: 43, radius: numbers[numbers.length-1]};
//Create an array `shapes` that represents a list of shapes. The array should
//contain the rectangle and the circle objects defined above.
//Log out the variable. Be sure to inspect it in the developer console!
let shapes = [rect, circle];
for (let i = 0; i < shapes.length; i++) {
    console.log(shapes[i]);
}
//Add a new ANONYMOUS object (e.g., one passed in directly without its own
//variable name) representing a right triangle to the `shapes` array.
//The triangle should have a `base` of 33 and a `height` of 44.
//Log out the updated shapes array.
shapes.push({base: 33, height: 44})
console.log("new shapes: ");
for (let i = 0; i < shapes.length; i++) {
    console.log(shapes[i]);
}
//Log out the triangle's `hypotenuse` property (don't calculate it, just log out
//the current property value!). What do you get?
console.log(shapes[2].hypotenuse);
//Assign the triangle inside the `shapes` array a 'hypotenuse' property of `55`.
//Log out the `shapes` array again.
shapes[2].hypotenuse = 55;
console.log("new new shapes");
for (let i = 0; i < shapes.length; i++) {
    console.log(shapes[i]);
}
//Visually check: what happens if you inspect the previously logged array in the 
//Chrome developer console?

