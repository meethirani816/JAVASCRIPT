const myarr = new Array(1,2,3,4)
// console.log(myarr);

// Array methods
// myarr.push(5)
// myarr.push(6)
// // console.log(myarr);
// myarr.pop()
// console.log(myarr);

// myarr.unshift(0)
// myarr.shift()
// console.log(myarr);

// const newarr = myarr.join()
// console.log(myarr);
// console.log(newarr);

console.log("A ", myarr);
const my1 = myarr.slice(1,3)
console.log(my1);

console.log("B ", myarr);
const my2 = myarr.splice(1,3)
console.log("C ", myarr);


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));