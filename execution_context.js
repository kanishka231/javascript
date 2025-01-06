// Everthing in javascript is happen inside an Excecution context it has two compartments memory and code 
// Memory is where all the variables and functions are stored as a key value pair and it is also know as variable environment
// another compartment is code where the code is executed line by line and it is also known as scope chain or Thread of execution

// javascript is single threaded and synchronous language
// single threaded means it can execute only one task at a time
// synchronous means it will execute the task one by one line by line and it will not jump to the next line until the current line is executed
// javascript has a call stack which is a data structure that records the function calls, basically where in the program we are
// call stack is a stack data structure which follows LIFO principle
// LIFO means Last In First Out


// what happens when we run the javascript code ?

// 1. when we run the javascript code the global execution context is created

var n = 2;
function square(num){
    var ans = num * num;
    return ans;
}
var squareOfN = square(n);
console.log(squareOfN);

var squareof4 = square(4);
console.log(squareof4);


// the excecution context is created in two phases memory creation phase and code execution phase

// Memory creation phase
//javascript allocates memory for the variables and functions
n: undefined
square: function square(num){
    var ans = num * num;
    return ans;
}
squareOfN: undefined
squareof4: undefined

//undefined is a special value in javascript which means the variable is declared but not assigned any value.
// spcial keyword undefined is used to denote the absence of value


// Code execution phase
// the code is executed line by line

n: 2
square: function square(num){
    var ans = num * num;
    return ans;
}
//function invocation
//functions are the heart of the javascript
//when we invoke a function a new execution context is created
//this execution context has this two compartments memory and code
//phase 1 memory creation phase
//memory is allocated for the arguments and local variables
//arguments are the values that are passed to the function
//local variables are the variables that are declared inside the function
//we will be allocating memory to num and ans
num:undefined
ans:undefined

//phase 2 code execution phase
//the code is executed line by line
num: 2
ans: 4

//return keyword is used to return the value from the function to the caller where the function is invoked
//the value of ans is returned to the caller
//the value of ans is assigned to squareOfN
//the function square is executed and
//the value of squareOfN is 4
return 4
//the function square is executed and
//the value of squareOfN is 4
// after the return ans assignment the function square is popped out of the call stack
//and the entire execution context is removed from the call stack
squareOfN: 4
//num is parameter of the function and n is the argument
squareOfN: 4
console.log(4)

//now we are again invoking the function square with the argument 4
//function invocation
//functions are the heart of the javascript
//when we invoke a function a new execution context is created
//this execution context has this two compartments memory and code
//phase 1 memory creation phase
//memory is allocated for the arguments and local variables
//arguments are the values that are passed to the function
//local variables are the variables that are declared inside the function
//we will be allocating memory to num and ans
num:undefined
ans:undefined
//phase 2 code execution phase
//the code is executed line by line
num: 4
ans: 16
return 16
//the function square is executed and
//the value of squareof4 is 16
squareOf4: 16
console.log(16)

//the function square is popped out of the call stack
//and the entire execution context is removed from the call stack
squareOf4: 16
console.log(16)

//the global execution context is popped out of the call stack
//and the entire execution context is removed from the call stack

//the call stack is empty
//the code execution is completed
//the program is terminated



// Now as we can say it is very complicated lets say there is one more fincton invokation inside the sqaure function its will again create the new execution conetxt and if there another function side that it will again create the excution context and it will be very difficult to keep track of all the execution context so to keep track of all the execution context javascript handles this very beautifully how ?
// lets see ------------------->

// it manages this creation deltion using the stack this is called call stack
// it has its own call stack 
// Call Stack

//it is a stack data strcuture ans whenever a function is invoked a new executaion context created and pushed to the call stack and when the function is executed it is popped out of the call stack
// call stack is a stack data structure which follows LIFO principle
// LIFO means Last In First Out
//stack is used to manages the execution context in javascript

//after all these execution context are popped out of the call stack the call stack is empty


//call stack maintains the order of execution of the execution contexts how ?
