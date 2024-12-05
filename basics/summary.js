// Primitive

//7 Types: String, Number, boolean, null, undefined, object, symbol

//Reference - Non-Primitive

let heros = ["ironman", "captain america", "thor"];

let myobj = {
    name: "ironman",
    age: 30
}

const mFunction = function(){
    console.log("Hello, World!");
}
console.log(typeof mFunction);

// =================================================
// Memory 

// Stack (primitive) , Heap (Reference)

let myYT = "AnythingYaar"

let anothername = myYT
anothername = "chai aut code"
console.log(myYT);
console.log(anothername);

let userOne = {
    eami: "ram@moli.com",
    upi: "gol@okasis"
}

let useTwo = userOne
useTwo.eami = "ram@ram.com"
console.log(useTwo);
