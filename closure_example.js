/**
 Let's demonstrate a closure by building a simple counter.

 Let's start with a function named counter. It has no parameters. counter
 . It has no parameters. Inside the function it creates a variable count and sets it to 0.
 It then returns ANOTHER function that, when invoked, returns the count variable
 (this is a function inside a function).
 */

function counter() {

    let count = 0;

    return function() { return count; };

}


/**
 * Great! Now that you have implemented the skeleton, let's update the INNER function to increment the count variable
 * before we return the value.
 * Create a closure to hold the value

 Closures are functions that refer to independent (free) variables.

 In short, variables from the parent function of the closure remain bound from the parent's scope.

 or //mynum = mynum + 2;

 */

function counter() {

    let count = 0;

    return function() {

        count += 1;
        //count = count + 1;

        return count;
    }
}

