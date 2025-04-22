/*
Method Chaining = calling one method after another in one continuous line of code
*/

// no method chaining //
let usernam = window.prompt('Enteryou username')
usernam = usernam.trim()

let letter= usernam.charAt(0)
letter = letter.toUpperCase()


let extra = usernam.slice(1)
extra = extra.toLowerCase()
usernam = letter+extra
console.log(usernam)


// method chaining //
usernam = usernam.trim().charAt(0).toUpperCase() + usernam.trim().slice(1).toLowerCase()
console.log(usernam)

/*
CallBacks = function the are passed as an argument to another function
    // reading file
    //
    //
*/


hello(bye) // don't pass the pernthiss => ()
function hello(callback){
    console.log('hi');
    callback();
}
function bye(){
    console.log('bye');
}
function leave(){
    console.log('leave')
}
function wait(){
    console.log('wait')
}

sum(result,1,2)
function sum(callback,x,y){
    let summation = x+y;
    callback(summation);
}
function result(summation){
    console.log(summation);
}

/*
syncronis =
asyniccronis = multiple operations without waiting
    // deos not block the exicution flow
    // imput output data
*/
function func1(){
    setTimeout(()=> {console.log('task1');
                    callback()}, 3000);
            
}
function func2(){
    console.log('task2')
    console.log('task3')
    console.log('task4')
}
func1(func2);

/*
Calllback hell = sistuation in js where call back are nested within other call backs
                to the degree where the code is difficult to read. 
        // Old pattern to handle asynchronous functions
        // we use Promises + async/await to avoid callback hell
*/

function t1(callback){
    setTimeout(()=>{
        console.log('t1 complete')
        callback()
    },2000)
}
function t2(callback){
    setTimeout(()=>{
        console.log('t1 complete')
        callback()
    },1000)
}
function t3(callback){
    setTimeout(()=>{
        console.log('t1 complete')
        callback()
    },3000)
}
function t4(callback){
    setTimeout(()=>{
        console.log('t1 complete')
        callback()
    },1500)
}
function t5(callback){
    setTimeout(()=>{
        console.log('ALL TASK are complete')
        callback()
    },1500)
}
t1(()=>{
    t2(()=>{
        t3(()=>{
            t4(()=>{t5()})
        })
    })
})

/*
Promosis = handle asycnc code
    // promicies to returm a value
    // usualy arrow function
*/

// practie code
    // walk dog
    //clean ki

function walkDog(){
    
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            const walk = true
            if(walk){
                resolve('walk it like i talk it')
            }
            else(){
                reject('nope')
            }
        },1500)
    })
}
function clean(){
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            const squeeqy = true
            if(squeeqy){
                resolve('walk it like i talk it')
            }
            else(){
                reject('nope')
            }
    
        },2500)
    })
    
}
function trash(){
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            const noDirt = true
            if(noDirt){
                resolve('walk it like i talk it')
            }
            else(){
                reject('nope')
            }
        },500)
    })
    
}
walkDog.then(value =>{console.log(value); return clean()})
.then(value =>{console.log(value); return trash()})
.then(value =>{console.log(value); console.log('all done my budy')})
.catch(error => console.error())
walkDog(()=>{
    clean(()=>{
        trash(()=>{console.log('hsdjb')})
    })
})

async function walk() {
    const walked = await walkDog()
    console.log(walked)
}
/*
acync/await = let you write sync code in an async maner
async = return a promise
await = make a async promis wait for a promise
    // await without a aysnc then it is a syntax error

*/