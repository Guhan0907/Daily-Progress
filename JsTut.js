
// function ans(a) {
//     var v = 90;
//     var v = 9;
    
//     // let v = 909;
//     // let v = 7;

//     let t ;
//     // let t = 7;

//     console.log("Value of v: " + v);
// }

// ans(8);

// const ck = function fun(a) {
//     return a;
// }

// console.log(ck(78))


// closure
// function createCounter() {
//     let count = 0; // 'count' is a private variable within this closure

//     return {
//         increment: function() {
//             count++;
//             return count;
//         },
//         decrement: function() {
//             count--;
//             return count;
//         },
//         getCount: function() {
//             return count;
//         }
//     };
// }

// const myCounter = createCounter(); // 'count' is initialized to 0 inside this instance
// console.log(myCounter.increment()); // Output: 1
// console.log(myCounter.increment()); // Output: 2
// // console.log(myCounter.getCount());  // Output: 2

// // const anotherCounter = createCounter(); // A completely separate instance of 'count'
// // console.log(anotherCounter.increment()); // Output: 1
// // console.log(myCounter.getCount());       // Output: 2 (myCounter's count is unaffected)


// function add() {
//     const v = 5;
    
//     function inc(p) {
//         return v*p;
//     }
    
//     return inc;
// }

// console.log(add.inc(5))

// const fun = () =>  console.log("Helo");
// const val = ()=> (console.log("summa"))

// // fun()
// val()

// const sim = (a) => (a > 5 ? console.log("Greater") : console.log("Smaller"));

// sim(5)


// console.log(`$` === "$")
// var q = 89 , w = 56;

// console.log(`something that we are adding ${q+w} and also multiple ${2 * w * q}`);


// const person = "Mike";
// const age = 28;

// function myTag(strings, personExp, ageExp) {
//   const str0 = strings[0]; // "That "
//   const str1 = strings[1]; // " is a "
//   const str2 = strings[2]; // "."

//   const ageStr = ageExp < 100 ? "youngster" : "centenarian";

//   // We can even return a string built using a template literal
//   return `${str0}${personExp}${str1}${ageStr}${str2}`;
// }

// const output = myTag`That ${person} is a ${age}.`;

// console.log(output);
// // That Mike is a youngster.


// arr = [5,6,7,8,9,34]
// console.log(arr)
// va = [...arr]
// console.log(va)

// const[fir , sec , ...third] = [56 , 65, 33, 45, 56,66]
// console.log(`${fir} , now another ${sec} , now the third ${third}`)

// const my = ['val' , 78 , 'checking']
// const[ck , ...ty] = my;
// console.log(ty)


// arr = [5, 5, 34, 56, 4, 6, 2]

// const num = arr.map(function(x) {
//     return 2*x;
// })

// console.log(num)

const val = [1,2,3,7,8];
    
// const mm = val.map(x => {
//     let ans = x*2
//     console.log(ans)
// })

// const dp = val.filter(x => x>3)
// console.log(dp)


// the below program to understang the call 
// function foo() {
//     throw new Error("Try for an Error occured !");
// }
// function buzz() {
//     foo();
// }
// function baz() {
//     buzz()
// }
// baz()

// function foo() {
//     foo()
// }



function hello() {
    this.name = "hello";
    console.log(this);
    // this.setInterval(() => {})
}

const arrowHello = () => {
    // setInterval()
    this.name = "arrow function"
    console.log(this);
}

// hello(); // 'this' refers to the global object (or undefined in strict mode)
// arrowHello(); // 'this' refers to the lexical scope, which is the global object in this case

// console.log(this.name); // 'this' refers to the global object (or undefined in strict mode)


function outerFunction() {
    let t =0 ;
    function innerFunction() {
        t++;
        console.log("because of",t)
    } 
    innerFunction();
    // return innerFunction;
    return () => 1;
}

// const myInnerFunction = outerFunction();
// const anotherInnerFunction = outerFunction();

// console.log("return", typeof anotherInnerFunction)
// anotherInnerFunction()
// // myInnerFunction;
// myInnerFunction();
// () => myInnerFunction();

// console.log(myInnerFunction()); 


// function test(cb){
//     cb();
// }

// const obj = {
//     name: "fir_name",
//     lname: "last_name",
//     age: "20",
//     func: function(){
//         console.log("func:", this);
//         test(() =>{
//             console.log("callback:", this);
//         });
//     }
// }

// obj.func();

function callback(c) {
    console.log("Callback", c)
}

function hello(b) {
    console.log("Hello", b);
    b();

}

hello(()=> callback(1+1));