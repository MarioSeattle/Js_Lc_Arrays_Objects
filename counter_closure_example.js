/**
 *Calling counter returned the function, and we set it to the constant counter1. We then call on counter1 multiple
 * times. It returns a new number incremented by 1 every time.
 */

function counter() {
    let count = 0;

    return function() {
        count += 1;
        return count;
    };
}

console.log('First Counter');
const counter1 = counter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3
console.log();

console.log('Second Counter');
const counter2 = counter();
console.log(counter2()); // 1
console.log(counter2()); // 2
console.log(counter2()); // 3

/**
 * First Counter
 1
 2
 3

 Second Counter
 1
 2
 3
 undefined
 */
