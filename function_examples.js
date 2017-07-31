/**
 * Function returning a value
 */

function calculateRectangleArea(len, width){

    return len * width;

}

var roomArea = calculateRectangleArea(10, 10);

console.log(roomArea)

/**
 *
 * Function returning a function
 */

function sayGoodBye(){

//outer function

    console.log("good bye");

//inner function
    function andISayHello(){

        console.log("Hello!");
    }

return andISayHello;

}

var something = sayGoodBye();
something();

/**
 *  "good bye"
 *"Hello!"
 */




