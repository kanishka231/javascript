


var x =7;
function getName(){
    console.log("Namaste JavaScript");
}
var getName2 = () => {
    console.log("Namaste JavaScript");
}
// console.log(x);
getName();
console.log(x);
console.log(getName);

// so here what is happening if we are console log the x after intializing it i am getting the output as :

// Namaste JavaScript
// 7

// but when i am console log the x before initializing it i am getting the output as :
// undefined
// Namaste JavaScript

// But lets say w comment out the intializing x thing then we will getting the Uncaught refrence error : x s not defined why this is happening intially is undefined now its not defined why this is happening is because of hoisting in javascript
// So how this is happening is because of hoisting in javascript

// is it not defined or undefined is same thing ?
// No they are not the same thing undefined means the variable is declared but not defined and not defined means the variable is not declared

// so what is hoisting ?
//So hoisting is the phenomenon in javascript by which the variables and functions are moved to the top of their scope before the code execution begins
// so how the above code is executed is:
//we can excess the variable x and function getName before they are declared because of hoisting

// 1. var x is hoisted to the top of the scope
// 2. function getName is hoisted to the top of the scope
// 3. the code is executed line by line
// 4. x is assigned the value 7

//so what is happen if we are console log the getName function remeber we are not invoking it we are just console log it so what will be the output ?
// the output will be the entire function definition will be printed in the console
// so the output will be :
// function getName(){
//     console.log("Namaste JavaScript");
// }


//now lets console log it before intialized the function what will happen then ?
// the output will be the same as above function getName(){
//     console.log("Namaste JavaScript");
// }

//so in case of x if we console log it before intializing it we are getting undefined but in case of function if we console log the function before intializing it we are getting the entire code bloack how this is happening 
//so the reason is is as we seen in execution context the memory compartment is created in that pahase variblae are assigend the value undefined and the function is assigned the entire code block so that is why we are getting the entire code block of the function when we console log it before intializing it 


//so even before the code is executed memory is allocated to all varibale and function and they are assigned the value undefined and the function is assigned the entire code block so that is why we are able to excess the function before intializing it but not the variable


//now lets understand the differnce between not-defined and undefind:

// undefined will come becuase of hoisting since when the ececution context is created it will intialized all the vaibale and function with undefined and entire code block in memory context so that is why we are getting undefined

// but not defined will come when the varible you are tryung to log or use is nowhere deaclared in the code so that is why we are getting not defined


//so you can use the varible in javascript before intilizing it in the code but you cannot use the variable which is not declared in the code so that is why we are getting the not defined error


//now what will happen if the getName is arrow function what will be the output then ?
//if we trying to log it before intializing it we will get the error as getName is not defined why this is happening is because of hoisting in javascript
//in this case the getName is not hoisted to the top of the scope because the arrow function are not hoisted in javascript so that is why we are getting the error as getName is not defined
//so the output will be the error as getName is not defined
//becuase it will act just like a variable so it will not hoisted to the top of the scope
//with value undefined so that is why we are getting the error as getName is not defined
