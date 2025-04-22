/*
Scope: set of variable within a section of code

Global
module
block = curly braces
private
*/

const a = 1 // global scope = everything use this

function test(){
    const b = 2
    const h=5
    console.log(a,b,h)
    if(true){
        const c = 3
        var d = 4
        const h=5 // you cannot re-access outside bc you over ridded it
        console.log(b,c,d,h)
    }
}

console.log(a) // b will not work bc it is scoped into the test function
console.log(a) // can only be used within a block
console.log(a) // var will work bc it is module scoped but don't use it 
        // d deos not work tough ?!?!?!

const globalVar = 'global' // global scope = everything use this
    // not using module and at the top of the text
    // you want to avoid this so you can keep track

const moduleVar ='module' // you can use it on other pages
    // only can use if you export it with the key and import it onto another page

/*
Hoisting: move code at the top if needed so it is defined when you want to use it
    // only functions of hoisted other then VAR keyword  


*/

function sumFun(a,b){ // will work if moved
    return a+b
}

const sumCost = (a,b) => a+b // will not work if you use of after initializing

var c = 2 // makes undefined until initialized
    // don't use this though
    // you cannot define the function like in const though
    // when used in a for loop it pulls the final value only



/*
Important:

Closure = ;
    // used to self contain variables
    // function within a function
    // similar to classes
    // inner can user outer variable but not vice versa
*/

function outer(){
    let mee = 'hi'
    function inner(){
        console.log(mee)
    }

    inner()
}

outer()

function creatCount(){
    let count = 0;
    function increment(){
        
        count ++;
        console.log(`${count}`)
    }
    function getCount(){
        return count; // since it is private
    }
    return {increment,getCount}
}
const counter = creatCount();
counter.increment();
console.log(counter.increment())
counter.increment()
counter.increment();
counter.increment();
counter.increment();

/*
Event Loops:
    // webAPI
        // DOM
        // set timeout
    
heap = memory allocation
blocking = slow code
    // code cant do anything until finished rendering/running
callback = saves the function ad runs other code until ready
    // set to the webAPI until done and send to the task queue
*/

console.log('hi')
setTimeout(function onTimeout(){
    console.log('Iwantta be first')
},5000) // minimum time of excution not exact
console.log('im second')