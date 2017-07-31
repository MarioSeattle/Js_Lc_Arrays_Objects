    Explain what nested scope is.
    Explain how functions can be treated as values.
    Explain what a closure is.
    Implement a closure.
    Explain what a higher order function is.
    Implement problems with the following higher order functions:
        filter
        map
        reduce

    ****What is Nested Scope?
    Functions can be created inside other functions, producing several degrees
    of locality.

    var landscape = function() {

      var result = "";
      var flat = function(size) {

        for (var count = 0; count < size; count++)
          result += "_";
      };

      var mountain = function(size) {

        result += "/";
        for (var count = 0; count < size; count++)
          result += "'";
        result += "\\";

      };

      flat(3);
      mountain(4);
      flat(6);
      mountain(1);
      flat(1);
      return result;

    };

    console.log(landscape());

    // → ___/''''\______/'\_

    In short, each local scope can also see all the local scopes that
    contain it. The set of variables visible inside a function is determined
    by the place of that function in the program text.

    *****ES6 let and const

    New way to create variables with an ES6 feature, let and const.

    The following is legal:

    const arr = [1, 2, 3];
    arr.push(4);

    arr.push(4);

    //Yes

    *****Functions as Values

    Function variables usually simply act as names for a specific piece of the program.
    Such a variable is defined once and never changed.

    A function value can do all the things that other values can do—you can use it in
    arbitrary expressions, not just call it. It is possible to store a function value in
    a new place, pass it as an argument to a function, and so on.

    let launchMissiles = function(value) {

      missileSystem.launch("now");

    };

    if (safeMode)

      launchMissiles = function(value) {/* do nothing */};

     **Functions are treated just like any other data type (like arrays, objects, numbers,
     and booleans). They can be stored in variables and sent around just like any other
     data type.

     //true

     *****What is a closure?

     The ability to treat functions as values, combined with the fact that local
     variables are “re-created” every time a function is called

     What happens to local variables when the function call that created them is no longer active ?

     //example
     It defines a function, wrapValue, which creates a local variable. It then returns a function that accesses and
     returns this local variable.

     function wrapValue(n) {

       var localVariable = n;
       return function() { return localVariable; };

     }

     var wrap1 = wrapValue(1);

     var wrap2 = wrapValue(2);

     console.log(wrap1());
     // → 1

     console.log(wrap2());
     // → 2

     In fact, multiple instances of the variable can be alive at the same time, which is another good
     illustration of the concept that local variables really are re-created for every call—different calls
     can’t trample on one another’s local variables.

     **This feature—being able to reference a specific instance of local variables in an enclosing function—is
     called closure.

     **A function that “closes over” some local variables is called a closure.

     function multiplier(factor) {

       return function(number) {

         return number * factor;

       };

     }

     var twice = multiplier(2);

     console.log(twice(5));

     // → 10

     think of the function keyword as “freezing” the code in its body and wrapping it into a package
     (the function value). So when you read return function(...) {...}, think of it as returning a handle
     to a piece of computation, frozen for later use.

    ****What is a Higher Order Function?

    Functions that operate on other functions, either by taking them as arguments or by returning them, are
    called higher-order functions.

    **Higher-order functions allow us to abstract over actions, not just values.

    function greaterThan(n) {

      return function(m) { return m > n; };

    }

    const greaterThan10 = greaterThan(10);

    console.log(greaterThan10(11));
    // → true

    **functions that change other functions.

    function noisy(f) {

      return function(arg) {

        console.log("calling with", arg);

        const val = f(arg);

        console.log("called with", arg, "- got", val);

        return val;
      };

    }

    noisy(Boolean)(0);

    // → calling with 0
    // → called with 0 - got false

    ** functions that provide new types of control flow.

    function unless(test, then) {

      if (!test) {

        then();

      }

    }

    function repeat(times, body) {

      for (var i = 0; i < times; i++) {

        body(i);

      }

    }

    repeat(3, function(n) {

      unless(n % 2, function() {

        console.log(n, "is even");

      });

    });
    // → 0 is even
    // → 2 is even


    function unless(test, then) {

      if (!test) {

        then();

      }
    }

    function repeat(times, body) {

      for (var i = 0; i < times; i++) {

        body(i);

      }
    }

    repeat(3, function(n) {

      unless(n % 2, function() {

        console.log(n, "is even");

      });

    });
    // → 0 is even
    // → 2 is even


    **An important difference is that variables declared inside inner functions do not end up in the environment
    of the outer function. And that is usually a good thing.


    *****Filtering an array

    To find the people in the data set who were born after 2000, the following function might be helpfu

    function filter(array, test) {

      const passed = [];

      for (var i = 0; i < array.length; i++) {

        if (test(array[i]))

          passed.push(array[i]);
      }

      return passed;
    }

    console.log(filter(people, function(person) {

      return person.born > 2000;

    }));
    // → [{name: "Philibert Haverbeke", …}, …]

    // The test function is called for each element, and its return value determines whether an
    element is included in the returned array.

    //Note how the filter function, rather than deleting elements from the existing array, builds up a new
    array with only the elements that pass the test. This function is pure. It does not modify the array it
    is given.

    //filter is also a standard method on arrays.

    console.log(people.filter(function(person) {

      return person.born > 2000;

    }));

    // → [{name: "Philibert Haverbeke", …}, …]


    ****Transforming with map

    **The map method transforms an array by applying a function to all of its elements and building a new array from
    the returned values.

    **he new array will have the same length as the input array, but its content will have been “mapped” to a new
    form by the function.

    function map(array, transform) {

      const mapped = [];

      for (var i = 0; i < array.length; i++) {

        mapped.push(transform(array[i]));

      }

      return mapped;
    }

    const overNinety = people.filter(function(person) {

      return person.died - person.born > 90;

    });

    console.log(map(overNinety, function(person) {

      return person.name;

    }));

    // → ["Clara Aernoudts", "Emile Haverbeke",
    //    "Maria Haverbeke"]

    //Like filter, map is also a standard method on arrays. The same code above can be implemented like so:

    const overNinety = people.filter(function(person) {

      return person.died - person.born > 90;

    });

    console.log(overNinety.map(function(person) {

      return person.name;

    }));

    // → ["Clara Aernoudts", "Emile Haverbeke",
    //    "Maria Haverbeke"]

    ****Summarizing with reduce

    Another common pattern of computation on arrays is computing a single value from them.

    The higher-order operation that represents this pattern is called reduce (or sometimes fold).
    You can think of it as folding up the array, one element at a time.

    function reduce(array, combine, start) {

      let current = start;

      for (var i = 0; i < array.length; i++) {

        current = combine(current, array[i]);

      }

      return current;
    }

    console.log(reduce([1, 2, 3, 4], function(a, b) {

      return a + b;

    }, 0));

    // → 10

    The standard array method reduce, which of course corresponds to this function, has an added convenience.
    If your array contains at least one element, you are allowed to leave off the start argument. The method
    will take the first element of the array as its start value and start reducing at the second element.

    To use reduce to find my oldest person by year, we can write something like this:

    console.log(people.reduce(function(min, cur) {
      if (cur.born < min.born) {
        return cur;
      } else {
        return min;
      }
    }));
    // → {name: "Pauwels van Haverbeke", born: 1535, …}



