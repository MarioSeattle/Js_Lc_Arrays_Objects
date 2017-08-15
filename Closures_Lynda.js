function doSomeMath() {
    var a = 5;
    var b = 4;

    function multiple(){
        var result = a*b;
        return result;

    }
    return multiple;
}

var theResult = doSomeMath();

console.log("The result: ", theResult());
