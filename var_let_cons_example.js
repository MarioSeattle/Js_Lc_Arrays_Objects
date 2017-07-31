/**
 * Created by Mgomez on 7/31/17.
 */

function test (){

    var example1 = "Mario";

    if(true){

        var example = "Gomez";
        console.log(example1);

    }
        console.log(example1);

}
test();

//Mario
//Mario

function test (){

    let example1 = "Mario";

    if(true){

        let example = "Gomez";
        console.log(example1);

    }
    console.log(example1);

}
test();

//Gomez
//Mario

//When using const we can not reassing variables

//Arrays and objects can be change with const

const example1 = [1,2,3];
example1[0]=0;
example1[3]=1;
console.log(example1);


//We can mutuate the array but we can not changed values etc



