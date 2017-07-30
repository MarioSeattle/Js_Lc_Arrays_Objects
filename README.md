In this lesson, you will be able to do the following:

    Explain what an array is.
    Explain what an object is.
    Explain how objects and arrays are mutable.
    Implement functions that create and modify arrays.
    Implement functions that create and modify objects.

    *****What are arrays?

    JavaScript provides a data type specifically for storing sequences of values.

    It is called an array and is written as a list of values between square brackets,
    separated by commas.

    var listOfNumbers = [2, 3, 5, 7, 11];

    console.log(listOfNumbers[2]);

    // → 5

    console.log(listOfNumbers[2 - 1]);

    // → 3

    The first index of an array is zero, not one. So the first element can be read with
    listOfNumbers[0]

    ["Hello", "How", "are", "you"] //  [  ] square brackets

    ****Properties

    Almost all JavaScript values have properties. The exceptions are null and undefined. If you
    try to access a property on one of these nonvalues, you get an error.

    null.length;
    // → TypeError: Cannot read property 'length' of null

    The two most common ways to access properties in JavaScript are with a dot and with square brackets.
    Both value.x and value[x] access a property on value—but not necessarily the same property.

    The difference is in how x is interpreted. When using a dot, the part after the dot must be a valid
    variable name, and it directly names the property. When using square brackets, the expression between
    the brackets is evaluated to get the property name. Whereas value.x fetches the property of value
    named “x”, value[x] tries to evaluate the expression x and uses the result as the property name.

    So if you know that the property you are interested in is called “length”, you say value.length.
    If you want to extract the property named by the value held in the variable i, you say value[i].

    The length property of an array tells us how many elements it contains. This property name is a valid
    variable name, and we know its name in advance, so to find the length of an array, you typically write
    array.length because that is easier to write thanarray["length"]

    ////Yes! Variables cannot start with numbers, so arrays cannot have a 1 property referenced with a dot.

    *****Array Methods

    string and array objects contain, in addition to the length property, a number of properties that refer to
    function values.

    var doh = "Doh";

    console.log(typeof doh.toUpperCase);
    // → function

    console.log(doh.toUpperCase());
    // → DOH

    Properties that contain functions are generally called methods of the value they belong to.

    //“toUpperCase is a method of a string”

    var mack = [];

    mack.push("Mack");
    mack.push("the", "Knife");

    console.log(mack);
    // → ["Mack", "the", "Knife"]

    console.log(mack.join(" "));
    // → Mack the Knife

    console.log(mack.pop());
    // → Knife

    console.log(mack);
    // → ["Mack", "the"]

    **The push method can be used to add values to the end of an array.

    **The popmethod does the opposite: it removes the value at the end of the array and returns it.

    **An array of strings can be flattened to a single string with the joinmethod.

    **The argument given to join determines the text that is glued between the array’s elements.

    *******Objects

    Values of the type object are arbitrary collections of properties

    One way to create an object is by using a curly brace notation.

    var day1 = {
      squirrel: false,
      events: ["work", "touched tree", "pizza", "running",
               "television"]
    };

    console.log(day1.squirrel);
    // → false

    console.log(day1.wolf);
    // → undefined

    day1.wolf = false;
    console.log(day1.wolf);
    // → false

    **The delete operator cuts off a tentacle from such an octopus.

    var anObject = {left: 1, right: 2};
    console.log(anObject.left);
    // → 1

    delete anObject.left;
    console.log(anObject.left);
    // → undefined

    console.log("left" in anObject);
    // → false

    console.log("right" in anObject);
    // → true

    The binary in operator, when applied to a string and an object,
    returns a Boolean value that indicates whether that object has that property.

    Arrays, then, are just a kind of object specialized for storing sequences of things.

    **An array has an index whereas an object has a KEY

    *****Mutability of Objects and Arrays

    object values can be modified.

    numbers, strings, and Booleans, are all immutable—it is impossible to change an
    existing value of those types.

    objects, on the other hand, the content of a value can be modified by changing its properties.

    var object1 = {value: 10};
    var object2 = object1;
    var object3 = {value: 10};

    console.log(object1 == object2);
    // → true

    console.log(object1 == object3);
    // → false

    object1.value = 15;

    console.log(object2.value);
    // → 15

    console.log(object3.value);
    // → 10

    JavaScript’s == operator, when comparing objects, will return true only if both objects are
    precisely the same value.

    




