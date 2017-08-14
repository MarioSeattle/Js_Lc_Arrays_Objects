/**
 * Created by Mgomez on 8/3/17.
 */

function sum(arr) {
    var i = 0;

    for (var index = 0; index < arr.length; index++) {
        i += arr[index];
    }

    return i;
}

sum([1, 2, 3]);